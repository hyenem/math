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
  },

  /* ---------- 해석학 2장: 기초 위상 ---------- */

  "countable": {
    "ko": "가산집합",
    "en": "countable set",
    "short": "자연수 전체와 일대일 대응이 있는 집합 — 원소를 $x_1, x_2, \\dots$로 빠짐없이 나열할 수 있다. $\\mathbb{Z}, \\mathbb{Q}$는 가산, $\\mathbb{R}$은 비가산.",
    "href": "subjects/analysis/ch02.html#def-countable"
  },
  "metric-space": {
    "ko": "거리공간",
    "en": "metric space",
    "short": "두 점마다 거리 $d(p,q)$가 정의된 집합. 조건: 양수성($p \\neq q \\Rightarrow d \\gt 0$), 대칭성, 삼각부등식. 수렴을 말할 최소한의 무대다.",
    "href": "subjects/analysis/ch02.html#def-metric-space"
  },
  "neighborhood": {
    "ko": "근방",
    "en": "neighborhood",
    "short": "$N_r(p) = \\{q : d(p,q) \\lt r\\}$ — $p$ 중심, 반지름 $r$인 열린 공. $\\mathbb{R}$에서는 열린구간 $(p-r, p+r)$.",
    "href": "subjects/analysis/ch02.html#def-neighborhood"
  },
  "limit-point": {
    "ko": "집적점",
    "en": "limit point",
    "short": "모든 근방이 자기 아닌 $E$의 점을 포함하는 점 — \"$E$가 한없이 몰려드는 지점\". $E$에 속하지 않을 수 있고, 근방마다 $E$의 점이 무한히 많다 (Rudin 2.20).",
    "href": "subjects/analysis/ch02.html#def-limit-point"
  },
  "open-set": {
    "ko": "열린집합",
    "en": "open set",
    "short": "모든 점이 내점인 집합 — 어느 점이든 어떤 근방이 통째로 집합 안에 들어간다. 열림 $\\iff$ 여집합이 닫힘 (Rudin 2.23).",
    "href": "subjects/analysis/ch02.html#def-open-set"
  },
  "closed-set": {
    "ko": "닫힌집합",
    "en": "closed set",
    "short": "자신의 집적점을 모두 포함하는 집합. 임의의 교집합·유한 합집합에서 닫힘이 보존된다 (Rudin 2.24).",
    "href": "subjects/analysis/ch02.html#def-closed-set"
  },
  "bounded-dense": {
    "ko": "유계 / 조밀 (거리공간)",
    "en": "bounded / dense",
    "short": "유계: 공 하나에 통째로 들어감. 조밀: 공간의 모든 점이 $E$의 점이거나 집적점 ($\\bar{E} = X$). 예: $\\mathbb{Q}$는 $\\mathbb{R}$에서 조밀.",
    "href": "subjects/analysis/ch02.html#def-bounded-dense"
  },
  "closure": {
    "ko": "폐포",
    "en": "closure",
    "short": "$\\bar{E} = E \\cup E'$ ($E'$은 집적점 전체) — $E$를 포함하는 가장 작은 닫힌집합. 예: $\\overline{(0,1)} = [0,1]$, $\\overline{\\mathbb{Q}} = \\mathbb{R}$.",
    "href": "subjects/analysis/ch02.html#def-closure"
  },
  "open-cover": {
    "ko": "열린 덮개",
    "en": "open cover",
    "short": "합집합이 $E$를 포함하는 열린집합들의 모임 $\\{G_\\alpha\\}$. 컴팩트성 정의의 재료.",
    "href": "subjects/analysis/ch02.html#def-open-cover"
  },
  "compact": {
    "ko": "컴팩트 집합",
    "en": "compact set",
    "short": "모든 열린 덮개가 유한 부분덮개를 갖는 집합 — \"유한처럼 행동하는 무한\". 컴팩트이면 닫히고 유계이며, $\\mathbb{R}^k$에서는 역도 성립 (하이네-보렐).",
    "href": "subjects/analysis/ch02.html#def-compact"
  },
  "heine-borel": {
    "ko": "하이네-보렐 정리",
    "en": "Heine–Borel theorem",
    "short": "$\\mathbb{R}^k$에서: 닫힘+유계 $\\iff$ 컴팩트 $\\iff$ 모든 무한 부분집합이 안에 집적점을 가짐. 일반 거리공간에서는 \"닫힘+유계 $\\Rightarrow$ 컴팩트\"가 거짓!",
    "href": "subjects/analysis/ch02.html#def-heine-borel"
  },
  "perfect-set": {
    "ko": "완전집합",
    "en": "perfect set",
    "short": "닫혀 있고 고립점이 없는(모든 점이 집적점인) 집합. $\\mathbb{R}^k$의 공집합 아닌 완전집합은 비가산이다 (Rudin 2.43).",
    "href": "subjects/analysis/ch02.html#def-perfect-set"
  },
  "cantor-set": {
    "ko": "칸토어 집합",
    "en": "Cantor set",
    "short": "$[0,1]$에서 가운데 $1/3$을 무한히 반복 제거한 집합. 컴팩트·완전·비가산이지만 길이 $0$, 내부 공집합 — 해석학 최고의 반례 공장.",
    "href": "subjects/analysis/ch02.html#def-cantor-set"
  },
  "connected-set": {
    "ko": "연결집합",
    "en": "connected set",
    "short": "공집합 아닌 분리된 두 집합($\\bar{A} \\cap B = A \\cap \\bar{B} = \\varnothing$)의 합으로 쪼갤 수 없는 집합 — \"한 덩어리\". $\\mathbb{R}$에서는 연결 $\\iff$ 구간 (Rudin 2.47).",
    "href": "subjects/analysis/ch02.html#def-connected-set"
  },

  /* ---------- 해석학 3장: 수열과 급수 ---------- */

  "convergent-sequence": {
    "ko": "수열의 수렴",
    "en": "convergence of a sequence",
    "short": "임의의 $\\varepsilon \\gt 0$에 대해 $N$이 존재하여 $n \\ge N$이면 $d(p_n, p) \\lt \\varepsilon$ — \"$\\varepsilon$이 먼저, $N$은 그에 맞춰서\". 극한은 유일하고 수렴수열은 유계다.",
    "href": "subjects/analysis/ch03.html#def-convergent-sequence"
  },
  "subsequence": {
    "ko": "부분수열",
    "en": "subsequence",
    "short": "첨자를 증가하게 골라낸 $\\{p_{n_k}\\}$. 전체가 수렴 $\\iff$ 모든 부분수열이 같은 값으로 수렴. $\\mathbb{R}^k$의 유계수열은 수렴 부분수열을 가진다 (볼차노-바이어슈트라스).",
    "href": "subjects/analysis/ch03.html#def-subsequence"
  },
  "cauchy-sequence": {
    "ko": "코시 수열",
    "en": "Cauchy sequence",
    "short": "$m, n \\ge N$이면 $d(p_n, p_m) \\lt \\varepsilon$ — 극한값 없이 \"자기들끼리 뭉침\"으로 수렴을 예고하는 조건. 수렴 $\\Rightarrow$ 코시는 항상 참, 역은 완비공간에서만.",
    "href": "subjects/analysis/ch03.html#def-cauchy-sequence"
  },
  "complete-space": {
    "ko": "완비 거리공간",
    "en": "complete metric space",
    "short": "모든 코시 수열이 수렴하는 거리공간. $\\mathbb{R}^k$와 컴팩트 공간은 완비, $\\mathbb{Q}$는 아니다 ($\\sqrt{2}$ 근사 수열이 반례).",
    "href": "subjects/analysis/ch03.html#def-complete-space"
  },
  "limsup-liminf": {
    "ko": "상극한 / 하극한",
    "en": "limsup / liminf",
    "short": "부분수열 극한 전체의 집합 $E$에 대해 $\\limsup s_n = \\sup E$, $\\liminf s_n = \\inf E$. 극한과 달리 (확장실수에서) 항상 존재한다. 수렴 $\\iff$ 상극한 $=$ 하극한.",
    "href": "subjects/analysis/ch03.html#def-limsup-liminf"
  },
  "series": {
    "ko": "급수",
    "en": "series",
    "short": "부분합 $s_n = a_1 + \\cdots + a_n$의 수열이 수렴할 때 $\\sum a_n$이 수렴한다고 한다 — 무한합은 부분합 수열의 극한일 뿐. 수렴하면 $a_n \\to 0$ (역은 거짓: 조화급수).",
    "href": "subjects/analysis/ch03.html#def-series"
  },
  "absolute-convergence": {
    "ko": "절대수렴",
    "en": "absolute convergence",
    "short": "$\\sum |a_n|$이 수렴하는 것. 절대수렴 $\\Rightarrow$ 수렴이고, 재배열해도 합이 불변. 수렴하지만 절대수렴이 아니면 조건수렴 — 재배열로 아무 값이나 만들 수 있다 (리만).",
    "href": "subjects/analysis/ch03.html#def-absolute-convergence"
  }
});
