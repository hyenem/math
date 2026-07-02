/* ============================================================
 * 용어 사전 — 사이트 전역 수학 용어 레지스트리
 *
 * 본문 사용법:
 *   <a class="term" data-term="supremum">상한</a>
 *   → site.js가 href를 채우고, 호버(모바일: 탭)하면
 *     단어장 카드 툴팁을 띄운다.
 *
 * 항목 형식 (한 용어당 정확히 한 항목):
 *   "slug": {
 *     "ko": "한국어 용어",
 *     "en": "English term",
 *     "short": "툴팁용 1~3문장 요약. KaTeX 수식 $...$ 사용 가능.",
 *     "href": "subjects/analysis/ch01.html#def-slug"   // 사이트 루트 기준
 *   }
 *
 * 규약:
 *   - slug는 영문 소문자·숫자·하이픈만 (예: metric-space)
 *   - href의 앵커는 반드시 #def-<slug> 형태
 *   - 정의가 있는 페이지의 정의 박스에 id="def-<slug>"를 단다
 *   - tools/check_site.py가 이 파일과 실제 페이지의 일치를 검사한다
 *
 * 아래가 병합(Object.assign)인 이유: 페이지가 이 파일보다 먼저
 * 데모/보조 용어를 등록할 수 있게 하기 위함 (styleguide.html 참고).
 * ============================================================ */

window.MATH_TERMS = Object.assign(window.MATH_TERMS || {}, {

  /* ---------- 해석학 1장: 실수와 복소수 체계 ---------- */

  "ordered-set": {
    "ko": "순서집합",
    "en": "ordered set",
    "short": "두 원소의 대소 비교가 가능한 집합. 임의의 $x, y$에 대해 $x \\lt y$, $x = y$, $y \\lt x$ 중 정확히 하나가 성립하고, 추이성($x \\lt y \\lt z \\Rightarrow x \\lt z$)을 만족한다.",
    "href": "subjects/analysis/ch01.html#def-ordered-set"
  },
  "upper-bound": {
    "ko": "상계",
    "en": "upper bound",
    "short": "집합 $E$의 모든 원소 이상인 값. $E$의 상계가 하나라도 존재하면 $E$는 위로 유계(bounded above)라 한다. 상계는 보통 무수히 많다.",
    "href": "subjects/analysis/ch01.html#def-upper-bound"
  },
  "supremum": {
    "ko": "상한",
    "en": "supremum",
    "short": "상계 중 가장 작은 것 (최소상계). $\\alpha = \\sup E$는 ① $\\alpha$가 상계이고 ② $\\gamma \\lt \\alpha$이면 $\\gamma$는 상계가 아님을 뜻한다. 집합에 속하지 않을 수 있다.",
    "href": "subjects/analysis/ch01.html#def-supremum"
  },
  "infimum": {
    "ko": "하한",
    "en": "infimum",
    "short": "하계 중 가장 큰 것 (최대하계). $\\inf E$로 쓴다. 상한의 부등호를 전부 뒤집은 개념.",
    "href": "subjects/analysis/ch01.html#def-infimum"
  },
  "lub-property": {
    "ko": "최소상계성질 (완비성)",
    "en": "least-upper-bound property",
    "short": "\"공집합이 아니고 위로 유계인 부분집합은 반드시 상한을 갖는다\"는 성질. $\\mathbb{R}$은 만족하고 $\\mathbb{Q}$는 만족하지 않는다 — \"구멍 없음\"의 공식화.",
    "href": "subjects/analysis/ch01.html#def-lub-property"
  },
  "field": {
    "ko": "체",
    "en": "field",
    "short": "덧셈·곱셈이 교환·결합·분배법칙을 만족하고, $0 \\neq 1$이 있으며, 뺄셈과 ($0$ 이외의) 나눗셈이 항상 가능한 대수 구조. $\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$가 대표적.",
    "href": "subjects/analysis/ch01.html#def-field"
  },
  "ordered-field": {
    "ko": "순서체",
    "en": "ordered field",
    "short": "순서가 연산과 호환되는 체: $y \\lt z \\Rightarrow x+y \\lt x+z$이고, 양수끼리의 곱은 양수. 익숙한 부등식 규칙이 전부 성립한다.",
    "href": "subjects/analysis/ch01.html#def-ordered-field"
  },
  "archimedean-property": {
    "ko": "아르키메데스 성질",
    "en": "Archimedean property",
    "short": "$x \\gt 0$이면 임의의 $y$에 대해 $nx \\gt y$인 자연수 $n$이 존재한다. \"아무리 작은 걸음도 쌓이면 어디든 넘어선다.\" $\\mathbb{R}$의 완비성에서 유도된다 (Rudin 1.20a).",
    "href": "subjects/analysis/ch01.html#def-archimedean-property"
  },
  "density-of-q": {
    "ko": "유리수의 조밀성",
    "en": "density of Q in R",
    "short": "임의의 두 실수 $x \\lt y$ 사이에 유리수 $p$가 존재한다 (Rudin 1.20b). 조밀함은 완비성과 다르다 — $\\mathbb{Q}$는 조밀하지만 완비가 아니다.",
    "href": "subjects/analysis/ch01.html#def-density-of-q"
  },
  "complex-number": {
    "ko": "복소수",
    "en": "complex number",
    "short": "실수 순서쌍 $(a,b)$에 곱셈 $(a,b)(c,d)=(ac-bd, ad+bc)$를 준 것. $i=(0,1)$로 정의하면 $i^2=-1$이 계산으로 나온다. $\\mathbb{C}$는 체이지만 순서체는 될 수 없다.",
    "href": "subjects/analysis/ch01.html#def-complex-number"
  },
  "conjugate-modulus": {
    "ko": "켤레복소수와 절댓값",
    "en": "conjugate, absolute value",
    "short": "$z = a+bi$에 대해 켤레는 $\\bar{z} = a-bi$, 절댓값은 $|z| = \\sqrt{z\\bar{z}} = \\sqrt{a^2+b^2}$. $|zw|=|z||w|$, $|z+w| \\le |z|+|w|$가 성립한다.",
    "href": "subjects/analysis/ch01.html#def-conjugate-modulus"
  },
  "cauchy-schwarz": {
    "ko": "코시-슈바르츠 부등식",
    "en": "Cauchy–Schwarz inequality",
    "short": "$\\left|\\sum a_j \\bar{b}_j\\right|^2 \\le \\sum |a_j|^2 \\sum |b_j|^2$. \"내적의 크기는 크기의 곱을 넘지 못한다\" — 삼각부등식의 재료 (Rudin 1.35).",
    "href": "subjects/analysis/ch01.html#def-cauchy-schwarz"
  },
  "euclidean-space": {
    "ko": "유클리드 공간",
    "en": "Euclidean space",
    "short": "실수 $k$-순서쌍 전체 $\\mathbb{R}^k$에 내적 $\\mathbf{x}\\cdot\\mathbf{y} = \\sum x_i y_i$와 노름 $|\\mathbf{x}| = \\sqrt{\\mathbf{x}\\cdot\\mathbf{x}}$를 준 것. 이 책 대부분의 무대.",
    "href": "subjects/analysis/ch01.html#def-euclidean-space"
  },
  "triangle-inequality": {
    "ko": "삼각부등식",
    "en": "triangle inequality",
    "short": "$|\\mathbf{x}+\\mathbf{y}| \\le |\\mathbf{x}|+|\\mathbf{y}|$, 또는 거리 형태로 $|\\mathbf{x}-\\mathbf{z}| \\le |\\mathbf{x}-\\mathbf{y}|+|\\mathbf{y}-\\mathbf{z}|$. \"돌아가는 길은 직행보다 짧지 않다\" — 2장 거리공간의 출발점.",
    "href": "subjects/analysis/ch01.html#def-triangle-inequality"
  }
});
