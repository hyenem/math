# 여백 — 교과서의 행간을 채우는 대학수학 노트

유명 대학수학 교과서(해석학은 Rudin PMA)를 기준으로 공부하면서,
교과서가 생략한 직관과 설명을 채워 넣는 정적 웹사이트.
프레임워크·빌드 도구 없음 — 순수 HTML/CSS/JS.

## 로컬에서 보기

```bash
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000
```

## 구조

```
index.html                 홈 (과목 카드는 toc.js에서 자동 생성)
styleguide.html            콘텐츠 블록 견본 — 새 챕터 쓸 때 참고
assets/style.css           디자인 시스템 ("필기도구" 색 체계)
assets/site.js             레이아웃 주입, 네비 자동 생성, 용어 툴팁, KaTeX
assets/vendor/katex/       KaTeX 로컬 번들 (오프라인 동작)
assets/fonts/              리디바탕 (본문 명조)
data/toc.js                전체 목차 — 단일 진실 공급원
data/terms.js              용어 사전 — 단어장 카드 툴팁의 데이터
subjects/<과목>/chNN.html   챕터 본문 + 연습문제
tools/check_site.py        링크/앵커/용어 무결성 검사
```

## 새 챕터 추가하기

1. `subjects/<과목>/chNN.html` 작성 — `styleguide.html`의 블록 견본을 따른다.
   블록 순서 규칙: 직관(형광펜) → 정의(파란펜) → 예시 → 흔한 오해(빨간펜).
2. 새 용어의 정의 박스에 `id="def-<slug>"`를 달고 `data/terms.js`에 등록.
3. 정리 박스에 `id="thm-N-M"` (교재 번호 N.M)을 단다. 본문의 "정리 N.M" 텍스트는
   site.js가 자동으로 링크하고, 호버하면 정리 원문 카드를 띄운다.
   (같은 페이지는 앵커가 있을 때만, 다른 챕터는 ready인 챕터만 링크된다.)
4. `data/toc.js`에서 해당 챕터의 `ready: true`로 변경.
5. 검사 실행: `python3 tools/check_site.py` — 링크·앵커·용어·정리 참조를 전부 검사한다.

## 콘텐츠 원칙

- 모든 엄밀한 정의 **앞에** 일상 언어 직관을 먼저 쓴다.
- 모든 정리에 "이 정리가 하는 일" 한 문장을 먼저 쓴다.
- 증명은 접어두고, 접힌 상태에서 증명 전략 한 줄을 보여준다.
- 각 장 끝에 문제 3종: 개념 확인 → 교과서 연습(재서술) → 임용 기출.
- 문제에는 힌트와 풀이를 단계적 `<details>`로 단다.
