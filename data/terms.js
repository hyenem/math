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
  },

  /* ---------- 해석학 4장: 연속 ---------- */

  "function-limit": {
    "ko": "함수의 극한",
    "en": "limit of a function",
    "short": "$0 \\lt d(x, p) \\lt \\delta$이면 $d(f(x), q) \\lt \\varepsilon$ — $x = p$ 자체는 제외한다. $p$는 정의역의 집적점이어야 하며, 모든 수열 $p_n \\to p$에 대해 $f(p_n) \\to q$와 동치 (Rudin 4.2).",
    "href": "subjects/analysis/ch04.html#def-function-limit"
  },
  "continuous-function": {
    "ko": "연속",
    "en": "continuity",
    "short": "$d(x,p) \\lt \\delta \\Rightarrow d(f(x), f(p)) \\lt \\varepsilon$. 세 얼굴이 동치: $\\varepsilon$–$\\delta$ = 수렴하는 수열 보존 = 열린집합의 원상이 열림 (Rudin 4.8).",
    "href": "subjects/analysis/ch04.html#def-continuous-function"
  },
  "uniform-continuity": {
    "ko": "균등연속",
    "en": "uniform continuity",
    "short": "하나의 $\\delta$가 모든 지점을 감당: $\\forall\\varepsilon\\ \\exists\\delta\\ \\forall p,q$. 연속보다 강하다 ($1/x$이 반례). 컴팩트 위의 연속함수는 자동으로 균등연속 (Rudin 4.19).",
    "href": "subjects/analysis/ch04.html#def-uniform-continuity"
  },
  "discontinuity-kinds": {
    "ko": "제1종 / 제2종 불연속",
    "en": "discontinuity of the first/second kind",
    "short": "한쪽 극한 $f(x+), f(x-)$가 둘 다 존재하면 제1종(도약), 하나라도 없으면 제2종(진동 등). 단조함수의 불연속은 전부 제1종이고 많아야 가산 개다 (Rudin 4.29–4.30).",
    "href": "subjects/analysis/ch04.html#def-discontinuity-kinds"
  },

  /* ---------- 해석학 5장: 미분 ---------- */

  "derivative": {
    "ko": "미분계수 / 도함수",
    "en": "derivative",
    "short": "$f'(x) = \\lim_{t \\to x} \\frac{f(t)-f(x)}{t-x}$ — 할선 기울기의 극한이자 최선의 일차 근사. 미분가능 $\\Rightarrow$ 연속이지만 역은 거짓이고, 미분가능해도 $f'$이 연속이 아닐 수 있다 ($x^2 \\sin(1/x)$).",
    "href": "subjects/analysis/ch05.html#def-derivative"
  },
  "mean-value-theorem": {
    "ko": "평균값 정리",
    "en": "mean value theorem",
    "short": "$[a,b]$ 연속, $(a,b)$ 미분가능이면 $f(b)-f(a) = (b-a)f'(x)$인 $x$가 존재. 증명: 컴팩트 → 최대최소 → 내부 극값($f'=0$). 단조성 판정·로피탈·테일러가 전부 여기서 나온다.",
    "href": "subjects/analysis/ch05.html#def-mean-value-theorem"
  },
  "taylor-theorem": {
    "ko": "테일러 정리",
    "en": "Taylor's theorem",
    "short": "$f(\\beta) = \\sum_{k \\lt n} \\frac{f^{(k)}(\\alpha)}{k!}(\\beta-\\alpha)^k + \\frac{f^{(n)}(x)}{n!}(\\beta-\\alpha)^n$ — 오차(라그랑주 나머지)가 명시된 다항 근사. $n=1$이면 평균값 정리. 증명은 롤 정리 $n$번 연쇄.",
    "href": "subjects/analysis/ch05.html#def-taylor-theorem"
  },

  /* ---------- 해석학 6장: 리만-스틸체스 적분 ---------- */

  "partition": {
    "ko": "분할",
    "en": "partition",
    "short": "$[a,b]$의 유한 점집합 $a = x_0 \\le \\cdots \\le x_n = b$. 각 소구간의 $\\sup, \\inf$로 상합 $U(P,f)$와 하합 $L(P,f)$를 만든다. 세분할수록 상합은 줄고 하합은 는다.",
    "href": "subjects/analysis/ch06.html#def-partition"
  },
  "riemann-integral": {
    "ko": "리만 적분",
    "en": "Riemann integral",
    "short": "상적분 $\\inf_P U(P,f)$와 하적분 $\\sup_P L(P,f)$가 일치할 때의 공통값. 실전 판정은 리만 판정법: $U(P,f) - L(P,f) \\lt \\varepsilon$인 분할의 존재. 연속·단조함수는 적분가능, 디리클레 함수는 불가능.",
    "href": "subjects/analysis/ch06.html#def-riemann-integral"
  },
  "fundamental-theorem-calculus": {
    "ko": "미적분학의 기본정리",
    "en": "fundamental theorem of calculus",
    "short": "① $F(x) = \\int_a^x f$는 $f$의 연속점에서 $F' = f$ (Rudin 6.20). ② $F' = f \\in \\mathscr{R}$이면 $\\int_a^b f = F(b) - F(a)$ (Rudin 6.21, 증명 = 소구간마다 MVT + 망원합).",
    "href": "subjects/analysis/ch06.html#def-fundamental-theorem-calculus"
  },

  /* ---------- 해석학 7장: 함수열과 함수급수 ---------- */

  "pointwise-convergence": {
    "ko": "점별 수렴",
    "en": "pointwise convergence",
    "short": "각 점 $x$마다 수열 $f_n(x)$가 수렴하는 것 — $N$이 $\\varepsilon$과 $x$ 둘 다에 의존해도 된다. 연속·적분·미분이 극한에 유전되지 않을 수 있다 ($x^n$이 대표 반례).",
    "href": "subjects/analysis/ch07.html#def-pointwise-convergence"
  },
  "uniform-convergence": {
    "ko": "균등수렴",
    "en": "uniform convergence",
    "short": "하나의 $N$이 모든 $x$를 동시에 감당: $n \\ge N \\Rightarrow \\sup_x |f_n(x) - f(x)| \\le \\varepsilon$. 판정은 $M_n = \\sup|f_n - f| \\to 0$. 연속성 유전, $\\lim$–$\\int$ 교환을 보증한다.",
    "href": "subjects/analysis/ch07.html#def-uniform-convergence"
  },
  "m-test": {
    "ko": "바이어슈트라스 M-판정법",
    "en": "Weierstrass M-test",
    "short": "$|f_n(x)| \\le M_n$ (모든 $x$)이고 $\\sum M_n$이 수렴하면 $\\sum f_n$은 균등·절대수렴 (Rudin 7.10). 함수급수 균등수렴의 실전 도구 1호.",
    "href": "subjects/analysis/ch07.html#def-m-test"
  },
  "equicontinuity": {
    "ko": "동등연속",
    "en": "equicontinuity",
    "short": "하나의 $\\delta$가 모든 지점과 족의 모든 함수를 동시에 감당하는 것. 점별 유계 + 동등연속이면 컴팩트 위에서 균등수렴 부분수열이 존재한다 (아르젤라-아스콜리, Rudin 7.25).",
    "href": "subjects/analysis/ch07.html#def-equicontinuity"
  },

  /* ---------- 해석학 8장: 특수 함수 ---------- */

  "power-series": {
    "ko": "멱급수",
    "en": "power series",
    "short": "$\\sum c_n x^n$. 수렴반지름 $R = 1/\\limsup \\sqrt[n]{|c_n|}$ 안에서 절대수렴하고, 컴팩트 부분구간에서 균등수렴하며, 항별 미분이 정당하다 (Rudin 8.1).",
    "href": "subjects/analysis/ch08.html#def-power-series"
  },
  "exp-function": {
    "ko": "지수함수",
    "en": "exponential function",
    "short": "$E(z) = \\sum z^n/n!$ (수렴반지름 $\\infty$)이 정의. 코시 곱으로 $E(z)E(w) = E(z+w)$, 항별 미분으로 $E' = E$. 로그는 그 역함수, $x^\\alpha = E(\\alpha \\ln x)$가 일반 거듭제곱의 정의다.",
    "href": "subjects/analysis/ch08.html#def-exp-function"
  },
  "log-function": {
    "ko": "로그함수",
    "en": "logarithm",
    "short": "순증가 전단사 $E : \\mathbb{R} \\to (0,\\infty)$의 역함수. $\\ln'(y) = 1/y$이고 $\\ln y = \\int_1^y dt/t$와 일치. 일반 거듭제곱 $x^\\alpha = E(\\alpha \\ln x)$의 재료.",
    "href": "subjects/analysis/ch08.html#def-log-function"
  },
  "trig-functions": {
    "ko": "삼각함수 (해석적 정의)",
    "en": "trigonometric functions",
    "short": "$C(x) = \\frac{E(ix)+E(-ix)}{2}$, $S(x) = \\frac{E(ix)-E(-ix)}{2i}$ — 오일러 공식이 정의가 된다. $C^2 + S^2 = 1$, $C' = -S$, $S' = C$이고, $\\pi/2$는 $C$의 가장 작은 양의 영점으로 정의된다.",
    "href": "subjects/analysis/ch08.html#def-trig-functions"
  },
  "gamma-function": {
    "ko": "감마 함수",
    "en": "Gamma function",
    "short": "$\\Gamma(x) = \\int_0^\\infty t^{x-1}e^{-t}dt$. $\\Gamma(n+1) = n!$ — 팩토리얼의 연속 확장이며, 로그볼록성 조건이 이 확장을 유일하게 결정한다 (보어-몰레루프).",
    "href": "subjects/analysis/ch08.html#def-gamma-function"
  },
  /* ---------- 선형대수 2장: 선형변환과 행렬 ---------- */

  "linear-transformation": {
    "ko": "선형변환",
    "en": "linear transformation",
    "short": "$T(x+y) = T(x)+T(y)$, $T(cx) = cT(x)$를 만족하는 함수 — 벡터공간의 구조를 보존한다. $T(0) = 0$은 자동. 미분과 적분도 선형변환이다.",
    "href": "subjects/linear-algebra/ch02.html#def-linear-transformation"
  },
  "null-space": {
    "ko": "영공간 (핵)",
    "en": "null space, kernel",
    "short": "$N(T) = \\{x : T(x) = 0\\}$ — $T$가 $0$으로 뭉개는 방향들의 부분공간. $T$가 단사 $\\iff N(T) = \\{0\\}$ (Friedberg 2.4). $\\dim N(T)$를 nullity라 한다.",
    "href": "subjects/linear-algebra/ch02.html#def-null-space"
  },
  "rank-nullity": {
    "ko": "차원정리",
    "en": "dimension theorem, rank–nullity",
    "short": "$\\operatorname{nullity}(T) + \\operatorname{rank}(T) = \\dim V$ (Friedberg 2.3) — 뭉갠 차원과 살아남은 차원의 합은 원래 차원. 선형대수에서 가장 많이 인용되는 등식.",
    "href": "subjects/linear-algebra/ch02.html#def-rank-nullity"
  },
  "matrix-representation": {
    "ko": "행렬표현",
    "en": "matrix representation",
    "short": "순서기저를 고르면 선형변환이 행렬이 된다: $j$번째 열 = $T(v_j)$의 좌표. $[T(u)]_\\gamma = [T]_\\beta^\\gamma [u]_\\beta$이고, 합성은 행렬 곱 (Friedberg 2.11) — 행렬 곱셈 정의의 기원.",
    "href": "subjects/linear-algebra/ch02.html#def-matrix-representation"
  },
  "isomorphism": {
    "ko": "동형사상",
    "en": "isomorphism",
    "short": "전단사 선형변환. $V \\cong W \\iff \\dim V = \\dim W$ (Friedberg 2.19) — 유한차원 벡터공간은 차원 하나로 완전히 분류되고, 모든 $n$차원 공간은 $F^n$과 같다.",
    "href": "subjects/linear-algebra/ch02.html#def-isomorphism"
  },

  /* ---------- 선형대수 3장: 행렬연산과 연립방정식 ---------- */

  "rank": {
    "ko": "계수 (rank)",
    "en": "rank",
    "short": "$\\operatorname{rank}A = \\dim(\\text{열공간})$ — 일차독립인 열의 최대 개수이며, 행으로 세도 같다. 계산: 소거해서 피벗 개수. 가역 $\\iff \\operatorname{rank} = n$.",
    "href": "subjects/linear-algebra/ch03.html#def-rank"
  },
  "homogeneous-system": {
    "ko": "동차 연립방정식",
    "en": "homogeneous system",
    "short": "$Ax = 0$ — 해집합은 부분공간 $N(L_A)$이고 차원은 $n - \\operatorname{rank}A$ (자유 변수 개수). 비동차 $Ax = b$의 해집합은 특수해 $+ N(L_A)$의 평행이동.",
    "href": "subjects/linear-algebra/ch03.html#def-homogeneous-system"
  },

  /* ---------- 선형대수 4장: 행렬식 ---------- */

  "determinant": {
    "ko": "행렬식",
    "en": "determinant",
    "short": "선형변환의 부호 있는 부피 배율. 행마다 선형 + 같은 행이면 $0$ + $\\det I = 1$이 특징짓는다. $\\det(AB) = \\det A \\det B$, 가역 $\\iff \\det \\neq 0$, $\\det(cA) = c^n \\det A$.",
    "href": "subjects/linear-algebra/ch04.html#def-determinant"
  },

  /* ---------- 선형대수 5장: 대각화 ---------- */

  "eigenvalue": {
    "ko": "고윳값 / 고유벡터",
    "en": "eigenvalue, eigenvector",
    "short": "$T(v) = \\lambda v$인 $0$ 아닌 $v$가 고유벡터, $\\lambda$가 고윳값 — 변환이 방향을 안 바꾸는 벡터. 고유공간 $E_\\lambda = N(T - \\lambda I)$는 부분공간이고, $\\dim E_\\lambda = n - \\operatorname{rank}(A - \\lambda I)$.",
    "href": "subjects/linear-algebra/ch05.html#def-eigenvalue"
  },
  "characteristic-polynomial": {
    "ko": "특성다항식",
    "en": "characteristic polynomial",
    "short": "$f(t) = \\det(A - tI)$ — 그 근이 정확히 고윳값이다. 닮은 행렬은 특성다항식이 같다 (기저 불변량).",
    "href": "subjects/linear-algebra/ch05.html#def-characteristic-polynomial"
  },
  "diagonalizable": {
    "ko": "대각화 가능",
    "en": "diagonalizable",
    "short": "고유벡터들로 기저를 만들 수 있는 것 ($Q^{-1}AQ = D$). 판정: 특성다항식이 완전 분해 + 모든 고윳값에서 기하 중복도 = 대수 중복도. 서로 다른 고윳값이 $n$개면 자동.",
    "href": "subjects/linear-algebra/ch05.html#def-diagonalizable"
  },
  "cayley-hamilton": {
    "ko": "케일리-해밀턴 정리",
    "en": "Cayley–Hamilton theorem",
    "short": "$f$가 특성다항식이면 $f(A) = O$ — 행렬은 자기 특성방정식을 만족한다. $A^n$을 낮은 거듭제곱으로 환원하고 $A^{-1}$을 다항식으로 표현하는 도구.",
    "href": "subjects/linear-algebra/ch05.html#def-cayley-hamilton"
  },

  /* ---------- 선형대수 6장: 내적공간 ---------- */

  "inner-product": {
    "ko": "내적",
    "en": "inner product",
    "short": "첫 변수에 선형, 켤레 대칭, 양의 정부호인 $\\langle x, y \\rangle$ — 길이($\\|x\\| = \\sqrt{\\langle x,x\\rangle}$)·각도·직교의 원천. 함수 공간에서는 $\\int f\\bar{g}$.",
    "href": "subjects/linear-algebra/ch06.html#def-inner-product"
  },
  "orthonormal-basis": {
    "ko": "정규직교기저",
    "en": "orthonormal basis",
    "short": "서로 수직이고 길이 1인 기저. 좌표가 내적 한 번으로 나온다: $x = \\sum \\langle x, v_i \\rangle v_i$ — 이 계수가 푸리에 계수의 정체다.",
    "href": "subjects/linear-algebra/ch06.html#def-orthonormal-basis"
  },
  "gram-schmidt": {
    "ko": "그람-슈미트 직교화",
    "en": "Gram–Schmidt process",
    "short": "독립집합을 직교집합으로 바꾸는 기계: $u_k = w_k - \\sum_{j \\lt k} \\frac{\\langle w_k, u_j \\rangle}{\\|u_j\\|^2} u_j$ — \"앞 방향 그림자 빼기\"의 반복. 정규직교기저의 존재를 구성적으로 증명한다.",
    "href": "subjects/linear-algebra/ch06.html#def-gram-schmidt"
  },
  "orthogonal-complement": {
    "ko": "직교여공간",
    "en": "orthogonal complement",
    "short": "$W^\\perp = \\{x : x \\perp W\\}$. 유한차원이면 $V = W \\oplus W^\\perp$, $(W^\\perp)^\\perp = W$. 정사영 = $W$ 안에서의 최선 근사 (최소제곱법의 원리).",
    "href": "subjects/linear-algebra/ch06.html#def-orthogonal-complement"
  },
  "adjoint": {
    "ko": "수반연산자",
    "en": "adjoint",
    "short": "$\\langle Tx, y \\rangle = \\langle x, T^*y \\rangle$를 만족하는 $T^*$ — 행렬로는 켤레전치. $T^* = T$면 자기수반(대칭/에르미트): 고윳값 실수, 고유벡터 직교.",
    "href": "subjects/linear-algebra/ch06.html#def-adjoint"
  },
  "spectral-theorem": {
    "ko": "스펙트럼 정리",
    "en": "spectral theorem",
    "short": "실대칭행렬 $\\iff$ 직교대각화 가능 ($Q^tAQ = D$, $Q$ 직교) — 대칭이면 고윳값 실수·고유벡터 직교·대각화 보장이 한 번에. 복소에서는 정규 $\\iff$ 유니터리 대각화.",
    "href": "subjects/linear-algebra/ch06.html#def-spectral-theorem"
  },

  /* ---------- 선형대수 7장: 표준형 ---------- */

  "jordan-form": {
    "ko": "조던 표준형",
    "en": "Jordan canonical form",
    "short": "특성다항식이 완전 분해되면 모든 행렬은 조던 블록($\\lambda$ 대각 + 윗대각 1)들의 직합과 닮음이고 구성은 유일 — \"늘이기 + 밀기\"로의 분해. 대각화 가능 $\\iff$ 모든 블록이 $1\\times1$. 블록 개수 $= \\dim E_\\lambda$.",
    "href": "subjects/linear-algebra/ch07.html#def-jordan-form"
  },
  "generalized-eigenvector": {
    "ko": "일반화 고유벡터",
    "en": "generalized eigenvector",
    "short": "$(A - \\lambda I)^p v = 0$인 $v$ — 보통 고유공간이 모자랄 때 일반화 고유공간 $K_\\lambda$가 대수적 중복도만큼 정확히 채운다. 사슬 하나가 조던 블록 하나.",
    "href": "subjects/linear-algebra/ch07.html#def-generalized-eigenvector"
  },
  "minimal-polynomial": {
    "ko": "최소다항식",
    "en": "minimal polynomial",
    "short": "$p(A) = O$인 monic 다항식 중 최저 차수. $m \\mid f$(특성다항식), 근은 고윳값 전체, $(t-\\lambda)$의 지수 = 최대 조던 블록 크기. 중근 없음 $\\iff$ 대각화 가능 — $A^2 = A$ 같은 관계식 문제의 지름길.",
    "href": "subjects/linear-algebra/ch07.html#def-minimal-polynomial"
  },

  /* ---------- 선형대수 1장: 벡터공간 ---------- */

  "vector-space": {
    "ko": "벡터공간",
    "en": "vector space",
    "short": "체 $F$ 위에서 덧셈과 스칼라배가 8개 공리(교환·결합·영벡터·역벡터·$1x=x$·결합·분배 2개)를 만족하는 집합. $F^n$, 행렬, 다항식, 함수 공간이 모두 예다.",
    "href": "subjects/linear-algebra/ch01.html#def-vector-space"
  },
  "subspace": {
    "ko": "부분공간",
    "en": "subspace",
    "short": "그 자체로 벡터공간인 부분집합. 판정은 3가지만: $0$ 포함, 덧셈에 닫힘, 스칼라배에 닫힘 (Friedberg 1.3). 교집합은 항상 부분공간, 합집합은 일반적으로 아니다.",
    "href": "subjects/linear-algebra/ch01.html#def-subspace"
  },
  "linear-combination": {
    "ko": "일차결합",
    "en": "linear combination",
    "short": "$a_1 u_1 + \\cdots + a_n u_n$ 꼴 — \"재료를 늘이고 더해서 만들 수 있는 것\". 유한 개의 벡터와 스칼라만 쓴다.",
    "href": "subjects/linear-algebra/ch01.html#def-linear-combination"
  },
  "span": {
    "ko": "생성공간",
    "en": "span",
    "short": "$S$의 일차결합 전체 $\\operatorname{span}(S)$ — $S$를 포함하는 가장 작은 부분공간 (Friedberg 1.5). $\\operatorname{span}(S) = V$이면 \"$S$가 $V$를 생성한다\".",
    "href": "subjects/linear-algebra/ch01.html#def-span"
  },
  "linear-independence": {
    "ko": "일차독립",
    "en": "linear independence",
    "short": "$0$을 만드는 일차결합이 자명한 것(계수 전부 $0$)뿐인 것 — \"군더더기 없는 재료\". $0$을 포함하면 무조건 종속이고, 독립성은 부분집합에 유전된다.",
    "href": "subjects/linear-algebra/ch01.html#def-linear-independence"
  },
  "basis": {
    "ko": "기저",
    "en": "basis",
    "short": "$V$를 생성하는 일차독립 집합 — 빠짐없고(생성) 군더더기 없는(독립) 재료 목록. 기저가 있으면 모든 벡터가 유일한 좌표를 갖는다 (Friedberg 1.8).",
    "href": "subjects/linear-algebra/ch01.html#def-basis"
  },
  "dimension": {
    "ko": "차원",
    "en": "dimension",
    "short": "기저의 크기 — 대체정리(Friedberg 1.10)가 모든 기저의 크기가 같음을 보증해서 잘 정의된다. $\\dim F^n = n$, $\\dim P_n = n+1$, $\\dim M_{m\\times n} = mn$. 체에 따라 달라질 수 있다 ($\\mathbb{C}$는 $\\mathbb{R}$ 위에서 2차원).",
    "href": "subjects/linear-algebra/ch01.html#def-dimension"
  },

  "fourier-series": {
    "ko": "푸리에 급수",
    "en": "Fourier series",
    "short": "$c_n = \\frac{1}{2\\pi}\\int f e^{-inx}dx$로 계수를 뽑아 $f \\sim \\sum c_n e^{inx}$. 직교성이 근거이고, 파세발 정리 $\\frac{1}{2\\pi}\\int |f|^2 = \\sum |c_n|^2$가 하이라이트 ($\\Rightarrow \\sum 1/n^2 = \\pi^2/6$).",
    "href": "subjects/analysis/ch08.html#def-fourier-series"
  }
});
