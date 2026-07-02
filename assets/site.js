/* ============================================================
 * 여백 — 공통 사이트 스크립트
 *
 * 하는 일:
 *   1. 공통 chrome 주입: 상단 헤더, 푸터
 *   2. toc.js 기반 자동 생성: 홈 과목 카드, 과목별 챕터 목록,
 *      챕터 페이지 사이드바 + 모바일 목차 + 이전/다음 네비
 *   3. terms.js 기반 용어 링크: href 채우기 + 단어장 카드 툴팁
 *   4. 정리 자동 링크: 본문의 "정리 N.M" 텍스트를 해당 정리 박스로
 *      링크하고, 호버 시 정리 원문을 카드로 미리보기 (fetch 기반)
 *   5. KaTeX 수식 렌더링 ($...$, $$...$$)
 *
 * 페이지 쪽 규약 (body 속성):
 *   data-page    = "home" | "subject" | "chapter" | "plain"
 *   data-subject = 과목 slug (subject/chapter 페이지)
 *   data-chapter = 챕터 파일명, 예: "ch01.html" (chapter 페이지)
 *
 * 정리 링크 규약: 정리 박스에 id="thm-N-M" (루딘 번호 N.M).
 *   "정리 N.M" 텍스트가 자동으로 링크된다 — 같은 페이지면 앵커가
 *   있을 때만, 다른 챕터면 ready인 챕터만. tools/check_site.py가
 *   교차 참조의 유효성을 검사한다.
 * ============================================================ */

(function () {
  "use strict";

  var ROOT = document.currentScript.src.replace(/assets\/site\.js.*$/, "");

  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function renderMathIn(node) {
    if (typeof renderMathInElement === "function") {
      renderMathInElement(node, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    }
  }

  onReady(function () {
    var SITE = window.MATH_SITE || { name: "수학 노트", tagline: "" };
    var TOC = window.MATH_TOC || [];
    var body = document.body;
    var page = body.dataset.page || "plain";
    var subject = null;
    var chapter = null;

    if (body.dataset.subject) {
      subject = TOC.find(function (s) { return s.slug === body.dataset.subject; }) || null;
    }
    if (subject && body.dataset.chapter) {
      chapter = subject.chapters.find(function (c) { return c.file === body.dataset.chapter; }) || null;
    }

    /* ---------- 1. 헤더 ---------- */
    var crumbs = '<a class="site-name" href="' + ROOT + 'index.html">' + esc(SITE.name) + "</a>";
    if (subject) {
      crumbs += '<span class="crumb-sep">·</span>' +
        '<a href="' + ROOT + "subjects/" + esc(subject.slug) + '/index.html">' + esc(subject.title) + "</a>";
    }
    if (chapter) {
      crumbs += '<span class="crumb-sep">·</span>' +
        '<span class="crumb-here">' + chapter.num + "장</span>";
    }
    var header = el('<header class="site-header"><nav>' + crumbs + "</nav></header>");
    body.insertBefore(header, body.firstChild);

    /* ---------- 2. 페이지별 자동 생성 ---------- */
    if (page === "home") buildHome();
    if (page === "subject" && subject) buildChapterList(subject);
    if (page === "chapter" && subject) {
      buildSidebar(subject, chapter);
      buildMobileToc(subject, chapter);
      buildPrevNext(subject, chapter);
    }

    /* ---------- 3. 푸터 ---------- */
    var main = document.querySelector("main.content");
    var footer = el(
      '<footer class="site-footer">' + esc(SITE.name) + " — " + esc(SITE.tagline) +
      ' · <a href="' + ROOT + 'styleguide.html">스타일 가이드</a></footer>'
    );
    body.appendChild(footer);

    /* ================= 생성 함수들 ================= */

    function subjectHref(s) { return ROOT + "subjects/" + s.slug + "/index.html"; }
    function chapterHref(s, c) { return ROOT + "subjects/" + s.slug + "/" + c.file; }

    function buildHome() {
      var grid = document.getElementById("subject-cards");
      if (!grid) return;
      TOC.forEach(function (s) {
        var readyCount = s.chapters.filter(function (c) { return c.ready; }).length;
        var progress = s.status === "active"
          ? readyCount + " / " + s.chapters.length + "장"
          : "준비 중";
        var inner =
          "<h2>" + esc(s.title) + '<span class="card-en">' + esc(s.en) + "</span></h2>" +
          '<p class="card-desc">' + esc(s.desc) + "</p>" +
          '<div class="card-meta"><span>' + esc(s.book) + "</span>" +
          '<span class="card-progress">' + progress + "</span></div>";
        var card = s.status === "active"
          ? el('<a class="subject-card" href="' + subjectHref(s) + '">' + inner + "</a>")
          : el('<div class="subject-card planned">' + inner + "</div>");
        grid.appendChild(card);
      });
    }

    function chapterItems(s, current, compact) {
      return s.chapters.map(function (c) {
        var label = '<span class="ch-num">' + c.num + "</span><span>" + esc(c.title) + "</span>";
        if (!c.ready) {
          var badge = compact ? "" : '<span class="badge">준비 중</span>';
          return "<li>" + '<span class="chapter-pending">' + label + badge + "</span></li>";
        }
        var cls = current && current.file === c.file ? ' class="current"' : "";
        return "<li" + cls + '><a href="' + chapterHref(s, c) + '">' + label + "</a></li>";
      }).join("");
    }

    function buildChapterList(s) {
      var list = document.getElementById("chapter-list");
      if (!list) return;
      list.innerHTML = chapterItems(s, null, false);
    }

    function buildSidebar(s, current) {
      var aside = el(
        '<aside class="sidebar"><div class="sidebar-inner">' +
        '<p class="sidebar-subject"><a href="' + subjectHref(s) + '">' + esc(s.title) + "</a></p>" +
        "<ol>" + chapterItems(s, current, true) + "</ol>" +
        "</div></aside>"
      );
      body.insertBefore(aside, document.querySelector("main.content"));
    }

    function buildMobileToc(s, current) {
      var mainEl = document.querySelector("main.content");
      if (!mainEl) return;
      var details = el(
        '<details class="toc-mobile"><summary>' + esc(s.title) + " 목차</summary>" +
        "<ol>" + chapterItems(s, current, true) + "</ol></details>"
      );
      mainEl.insertBefore(details, mainEl.firstChild);
    }

    function buildPrevNext(s, current) {
      var mainEl = document.querySelector("main.content");
      if (!mainEl || !current) return;
      var idx = s.chapters.indexOf(current);
      var prev = idx > 0 ? s.chapters[idx - 1] : null;
      var next = idx < s.chapters.length - 1 ? s.chapters[idx + 1] : null;
      function side(c, dir, cls) {
        if (!c) return "<span></span>";
        var text = '<span class="pn-dir">' + dir + "</span>" + c.num + "장 " + esc(c.title);
        if (!c.ready) {
          return '<span class="' + cls + '" style="color:var(--pencil)">' + text + " (준비 중)</span>";
        }
        return '<a class="' + cls + '" href="' + chapterHref(s, c) + '">' + text + "</a>";
      }
      var nav = el(
        '<nav class="prev-next">' +
        side(prev, "← 이전", "pn-prev") +
        side(next, "다음 →", "pn-next") +
        "</nav>"
      );
      mainEl.appendChild(nav);
    }

    /* ================= 단어장 카드 (용어·정리 공용 툴팁) ================= */

    var cardMgr = (function () {
      var card = null;
      var hideTimer = null;
      var currentAnchor = null;

      function ensure() {
        if (card) return card;
        card = el(
          '<div class="term-card hidden" id="term-card" role="tooltip">' +
          '<div class="term-card-title"></div>' +
          '<div class="term-card-body"></div>' +
          '<a class="term-card-go"></a>' +
          "</div>"
        );
        card.addEventListener("mouseenter", cancelHide);
        card.addEventListener("mouseleave", scheduleHide);
        document.body.appendChild(card);
        return card;
      }

      /* data: { title, en, body, bodyIsHTML, href, goText } */
      function show(anchor, data) {
        cancelHide();
        ensure();
        if (currentAnchor && currentAnchor !== anchor) {
          currentAnchor.removeAttribute("aria-describedby");
        }
        currentAnchor = anchor;
        anchor.setAttribute("aria-describedby", "term-card");

        card.querySelector(".term-card-title").innerHTML =
          esc(data.title) + (data.en ? '<span class="term-card-en">' + esc(data.en) + "</span>" : "");
        var bodyEl = card.querySelector(".term-card-body");
        if (data.bodyIsHTML) bodyEl.innerHTML = data.body;
        else bodyEl.textContent = data.body;
        var go = card.querySelector(".term-card-go");
        go.href = data.href;
        go.textContent = data.goText || "정의 보기 →";
        renderMathIn(bodyEl);

        // 위치: 앵커 아래. 좌우 클램프, 아래 공간 부족 시 위로.
        card.classList.remove("hidden");
        card.style.visibility = "hidden";
        var r = anchor.getBoundingClientRect();
        var cw = card.offsetWidth, chh = card.offsetHeight;
        var left = Math.max(window.scrollX + 8, Math.min(r.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - cw - 8));
        var top = r.bottom + window.scrollY + 8;
        if (r.bottom + chh + 16 > document.documentElement.clientHeight && r.top - chh - 8 > 0) {
          top = r.top + window.scrollY - chh - 8;
        }
        card.style.left = left + "px";
        card.style.top = top + "px";
        card.style.visibility = "";
      }

      function hide() {
        if (card) card.classList.add("hidden");
        if (currentAnchor) currentAnchor.removeAttribute("aria-describedby");
        currentAnchor = null;
      }
      function scheduleHide() {
        cancelHide();
        hideTimer = setTimeout(hide, 250);
      }
      function cancelHide() {
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      }

      document.addEventListener("click", function (e) {
        if (!card || card.classList.contains("hidden")) return;
        if (card.contains(e.target)) return;
        if (currentAnchor && currentAnchor.contains(e.target)) return;
        hide();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") hide();
      });

      return {
        show: show, hide: hide, scheduleHide: scheduleHide, cancelHide: cancelHide,
        isCurrent: function (a) { return currentAnchor === a; }
      };
    })();

    var TOUCH_MODE = window.matchMedia("(hover: none)").matches;

    /* 앵커에 카드 이벤트 배선. getData(cb)는 비동기 지원 */
    function wireCard(a, getData) {
      function open() {
        getData(function (data) { if (data) cardMgr.show(a, data); });
      }
      if (TOUCH_MODE) {
        a.addEventListener("click", function (e) {
          if (!cardMgr.isCurrent(a)) {
            e.preventDefault();
            open();
          }
        });
      } else {
        a.addEventListener("mouseenter", open);
        a.addEventListener("mouseleave", cardMgr.scheduleHide);
        a.addEventListener("focus", open);
        a.addEventListener("blur", cardMgr.scheduleHide);
      }
    }

    /* ================= 용어 링크 ================= */

    function initTerms() {
      var TERMS = window.MATH_TERMS || {};
      var links = document.querySelectorAll("a.term");
      links.forEach(function (a) {
        var slug = a.dataset.term;
        var term = TERMS[slug];
        if (!term) {
          a.classList.add("term-missing");
          if (!a.getAttribute("href")) a.href = "#";
          console.warn("[여백] 미등록 용어:", slug, "→ data/terms.js에 추가하세요");
          return;
        }
        a.href = ROOT + term.href;
        wireCard(a, function (cb) {
          cb({ title: term.ko, en: term.en, body: term.short, bodyIsHTML: false,
               href: ROOT + term.href, goText: "정의 보기 →" });
        });
      });
    }

    /* ================= 정리 자동 링크 + 원문 미리보기 ================= */

    function initThmRefs() {
      if (!subject) return;
      var mainEl = document.querySelector("main.content");
      if (!mainEl) return;
      var currentFile = body.dataset.chapter || "";
      var readyFiles = {};
      subject.chapters.forEach(function (c) { if (c.ready) readyFiles[c.file] = true; });

      // 1) 대상 텍스트 노드 수집 (링크·박스 라벨·스크립트 내부는 제외)
      var nodes = [];
      (function collect(node) {
        for (var child = node.firstChild; child; child = child.nextSibling) {
          if (child.nodeType === 3) {
            if (child.nodeValue.indexOf("정리") !== -1) nodes.push(child);
          } else if (child.nodeType === 1) {
            var tag = child.tagName;
            if (tag === "SCRIPT" || tag === "STYLE" || tag === "A") continue;
            if (child.classList.contains("box-label")) continue;
            collect(child);
          }
        }
      })(mainEl);

      // 2) "정리 N.M" 패턴을 링크로 치환
      nodes.forEach(function (textNode) {
        var text = textNode.nodeValue;
        var re = /정리\s?(\d{1,2})\.(\d{1,2})/g;
        var frag = null, last = 0, m;
        while ((m = re.exec(text)) !== null) {
          var n = m[1], k = m[2];
          var file = "ch" + (n.length < 2 ? "0" + n : n) + ".html";
          var anchor = "thm-" + n + "-" + k;
          var href = null;
          if (file === currentFile) {
            if (document.getElementById(anchor)) href = "#" + anchor;
          } else if (readyFiles[file]) {
            href = ROOT + "subjects/" + subject.slug + "/" + file + "#" + anchor;
          }
          if (!href) continue;
          if (!frag) frag = document.createDocumentFragment();
          frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          var a = document.createElement("a");
          a.className = "thmref";
          a.href = href;
          a.textContent = m[0];
          wireThmPreview(a, file, anchor);
          frag.appendChild(a);
          last = m.index + m[0].length;
        }
        if (frag) {
          frag.appendChild(document.createTextNode(text.slice(last)));
          textNode.parentNode.replaceChild(frag, textNode);
        }
      });

      // 3) 미리보기: 대상 페이지에서 정리 박스 원문을 가져와 카드로
      var docCache = {};
      function withDoc(file, cb) {
        if (file === currentFile) { cb(document); return; }
        var url = ROOT + "subjects/" + subject.slug + "/" + file;
        if (docCache[url] !== undefined) { cb(docCache[url]); return; }
        fetch(url).then(function (r) { return r.text(); }).then(function (html) {
          docCache[url] = new DOMParser().parseFromString(html, "text/html");
          cb(docCache[url]);
        }).catch(function () { docCache[url] = null; cb(null); });
      }

      function wireThmPreview(a, file, anchor) {
        wireCard(a, function (cb) {
          withDoc(file, function (doc) {
            if (!doc) { cb(null); return; }
            var target = doc.getElementById(anchor);
            if (!target) { cb(null); return; }
            var box = target.classList.contains("box") ? target : target.closest(".box");
            if (!box) { cb(null); return; }
            var clone = box.cloneNode(true);
            var label = clone.querySelector(".box-label");
            var title = label ? label.textContent.trim() : a.textContent;
            if (label) label.remove();
            // 미리보기 안의 링크는 동작하지 않도록 텍스트화
            clone.querySelectorAll("a").forEach(function (inner) {
              var span = doc.createElement("span");
              span.textContent = inner.textContent;
              inner.parentNode.replaceChild(span, inner);
            });
            cb({ title: title, en: "", body: clone.innerHTML, bodyIsHTML: true,
                 href: a.href, goText: "정리로 이동 →" });
          });
        });
      }
    }

    /* ---------- 초기화 (cardMgr 등 모든 정의가 끝난 뒤 실행) ---------- */
    initThmRefs();
    initTerms();
    renderMathIn(main || body);
  });
})();
