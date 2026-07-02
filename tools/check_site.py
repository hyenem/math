#!/usr/bin/env python3
"""여백 사이트 무결성 검사.

콘텐츠를 추가/수정할 때마다 실행한다:
    python3 tools/check_site.py

data/toc.js와 data/terms.js는 정규식이 아니라 node로 실제 평가한다
(주석·필드 순서·문자열 속 특수문자에 영향받지 않는 정확한 파싱).
node가 PATH에 있어야 한다.

검사 항목
  [오류] 내부 링크가 존재하지 않는 파일/앵커를 가리킴
  [오류] data-term 슬러그가 data/terms.js에 없음 (styleguide.html은 제외)
  [오류] terms.js의 href가 존재하지 않는 파일/앵커를 가리킴
  [오류] terms.js의 href 앵커가 #def-<slug> 규약을 어김
  [오류] toc.js에서 ready:true인 챕터의 HTML 파일이 없음
  [오류] "정리 N.M" 교차 참조 대상 앵커(thm-N-M)가 대상 챕터에 없음
         (site.js가 자동 링크하므로 깨진 링크가 됨)
  [경고] 본문 id="def-*" 앵커에 대응하는 terms.js 항목이 없음
  [경고] 같은 페이지의 "정리 N.M" 참조에 앵커가 없음 (링크 생략됨)
  [경고] 파일 내 '$' 개수가 홀수 (수식 구분자 짝 안 맞음 의심)

오류가 하나라도 있으면 종료 코드 1.
"""

import json
import os
import re
import shutil
import subprocess
import sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {".git", "docs", "tools", "node_modules"}
SKIP_VENDOR = os.path.join("assets", "vendor")
TERM_CHECK_EXEMPT = {"styleguide.html"}  # 데모 용어를 인라인 주입하는 페이지


# '$' 짝 검사에서 제외할 태그 — KaTeX auto-render의 기본 ignoredTags와 일치
RAW_TAGS = {"script", "noscript", "style", "textarea", "pre", "code", "option"}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []       # (href, line)
        self.terms = []       # (slug, line)
        self.dollar_count = 0
        self._in_raw = 0      # KaTeX가 렌더링하지 않는 태그 내부

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if tag in RAW_TAGS:
            self._in_raw += 1
        if "id" in d and d["id"]:
            self.ids.add(d["id"])
        if tag == "a":
            line = self.getpos()[0]
            if "href" in d and d["href"]:
                self.links.append((d["href"], line))
            if "data-term" in d:
                self.terms.append((d.get("data-term") or "", line))

    def handle_endtag(self, tag):
        if tag in RAW_TAGS and self._in_raw > 0:
            self._in_raw -= 1

    def handle_data(self, data):
        if not self._in_raw:
            self.dollar_count += data.count("$")


def find_html_files():
    out = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        rel = os.path.relpath(dirpath, ROOT)
        dirnames[:] = [
            d for d in dirnames
            if d not in SKIP_DIRS and not os.path.join(rel, d).startswith(SKIP_VENDOR)
        ]
        for f in filenames:
            if f.endswith(".html"):
                out.append(os.path.relpath(os.path.join(dirpath, f), ROOT))
    return sorted(out)


def load_data():
    """data/toc.js와 data/terms.js를 node로 실제 평가해 (toc, terms)를 얻는다.

    정규식 파싱은 주석·필드 순서·문자열 속 중괄호($\\mathbb{R}$ 등)에
    깨지므로 쓰지 않는다. node가 없으면 검사를 진행할 수 없다.
    """
    node = shutil.which("node")
    if not node:
        fallback = os.path.expanduser("~/.local/bin/node")
        node = fallback if os.path.exists(fallback) else None
    if not node:
        print("[오류] node를 찾을 수 없습니다 — data/*.js 평가에 필요합니다")
        sys.exit(2)
    parts = ["globalThis.window = {};"]
    for name in ("toc.js", "terms.js"):
        with open(os.path.join(ROOT, "data", name), encoding="utf-8") as fh:
            parts.append(fh.read())
    parts.append(
        ";console.log(JSON.stringify({toc: window.MATH_TOC || [],"
        " terms: window.MATH_TERMS || {}}))"
    )
    proc = subprocess.run([node, "-e", "\n".join(parts)],
                          capture_output=True, text=True)
    if proc.returncode != 0:
        print("[오류] data/*.js 평가 실패 (JS 문법 오류?):")
        print(proc.stderr.strip())
        sys.exit(2)
    data = json.loads(proc.stdout)
    return data["toc"], data["terms"]


def main():
    errors, warnings = [], []

    html_files = find_html_files()
    pages = {}
    for rel in html_files:
        p = PageParser()
        with open(os.path.join(ROOT, rel), encoding="utf-8") as fh:
            p.feed(fh.read())
        pages[rel] = p

    toc, terms = load_data()

    # 1. toc.js: ready 챕터 파일 존재
    for s in toc:
        for c in s.get("chapters", []):
            rel = os.path.join("subjects", s.get("slug", "?"), c.get("file", "?"))
            if c.get("ready") and rel not in pages:
                errors.append(f"toc.js: ready인 챕터 파일이 없음 → {rel}")

    # 2. HTML 내부 링크
    for rel, p in pages.items():
        base = os.path.dirname(rel)
        for href, line in p.links:
            if re.match(r"^(https?:|mailto:|javascript:)", href):
                continue
            if href == "#":
                continue  # site.js가 채우는 자리 (용어 링크 등)
            if href.startswith("#"):
                if href[1:] not in p.ids:
                    errors.append(f"{rel}:{line}: 페이지 내 앵커 없음 → {href}")
                continue
            path_part, _, frag = href.partition("#")
            target = os.path.normpath(os.path.join(base, path_part))
            if target.startswith(".."):
                errors.append(f"{rel}:{line}: 사이트 밖을 가리키는 링크 → {href}")
                continue
            full = os.path.join(ROOT, target)
            if not os.path.exists(full):
                errors.append(f"{rel}:{line}: 링크 대상 파일 없음 → {href}")
                continue
            if frag and target in pages and frag not in pages[target].ids:
                errors.append(f"{rel}:{line}: 링크 앵커 없음 → {href}")

    # 3. data-term 등록 여부
    for rel, p in pages.items():
        if os.path.basename(rel) in TERM_CHECK_EXEMPT:
            continue
        for slug, line in p.terms:
            if slug not in terms:
                errors.append(f"{rel}:{line}: 미등록 용어 data-term=\"{slug}\"")

    # 4. terms.js href 유효성 + #def-<slug> 규약
    for slug, entry in terms.items():
        if not re.fullmatch(r"[a-z0-9-]+", slug):
            errors.append(f"terms.js: slug 형식 위반(소문자·숫자·하이픈만) → \"{slug}\"")
        href = entry.get("href") if isinstance(entry, dict) else None
        if not href:
            errors.append(f"terms.js: \"{slug}\" 항목에 href 없음")
            continue
        path_part, _, frag = href.partition("#")
        if frag != f"def-{slug}":
            errors.append(f"terms.js: \"{slug}\"의 앵커가 #def-{slug}가 아님 → #{frag}")
        target = os.path.normpath(path_part)
        if target not in pages:
            errors.append(f"terms.js: \"{slug}\"의 href 파일 없음 → {path_part}")
        elif frag and frag not in pages[target].ids:
            errors.append(f"terms.js: \"{slug}\"의 앵커가 {path_part}에 없음 → #{frag}")

    # 5. def-* 앵커인데 terms.js에 없는 것 (경고)
    for rel, p in pages.items():
        if os.path.basename(rel) in TERM_CHECK_EXEMPT:
            continue
        for i in p.ids:
            if i.startswith("def-") and i[4:] not in terms:
                warnings.append(f"{rel}: 정의 앵커 id=\"{i}\"가 terms.js에 없음 (용어 등록 권장)")

    # 6. "정리 N.M" 참조 유효성 (site.js 자동 링크 대상)
    thm_re = re.compile(r"정리\s?(\d{1,2})\.(\d{1,2})")
    for rel, p in pages.items():
        mm = re.match(r"subjects/([a-z0-9-]+)/ch\d+\.html$", rel.replace(os.sep, "/"))
        if not mm:
            continue
        subj = mm.group(1)
        with open(os.path.join(ROOT, rel), encoding="utf-8") as fh:
            src = fh.read()
        seen_refs = set()
        for m in thm_re.finditer(src):
            n, k = m.group(1), m.group(2)
            if (n, k) in seen_refs:
                continue
            seen_refs.add((n, k))
            target = os.path.join("subjects", subj, f"ch{int(n):02d}.html")
            anchor = f"thm-{n}-{k}"
            if target == rel:
                if anchor not in p.ids:
                    warnings.append(f"{rel}: 같은 페이지 참조 '정리 {n}.{k}'의 앵커 없음 (링크 생략)")
            elif target in pages:
                if anchor not in pages[target].ids:
                    errors.append(f"{rel}: '정리 {n}.{k}' 교차 참조 앵커가 {target}에 없음")

    # 7. $ 짝 검사 (경고)
    for rel, p in pages.items():
        if p.dollar_count % 2 == 1:
            warnings.append(f"{rel}: '$' 개수가 홀수({p.dollar_count}) — 수식 구분자 확인")

    for e in errors:
        print(f"[오류] {e}")
    for w in warnings:
        print(f"[경고] {w}")
    print(f"\n검사 완료: HTML {len(pages)}개, 용어 {len(terms)}개, "
          f"오류 {len(errors)}건, 경고 {len(warnings)}건")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
