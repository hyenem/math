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
  /* ---------- 위상수학 1장: 위상공간 ---------- */

  "topology": {
    "ko": "위상 / 위상공간",
    "en": "topology, topological space",
    "short": "\"열린집합 목록\"의 공리화: $\\varnothing, X$ 포함 + 임의 합 + 유한 교에 닫힘. 거리 없이 연속·수렴·컴팩트를 말하게 해 준다. 예: 이산·밀착·여유한·거리위상.",
    "href": "subjects/topology/ch01.html#def-topology"
  },
  "basis-topology": {
    "ko": "기저 (위상)",
    "en": "basis for a topology",
    "short": "합집합으로 위상 전체를 생성하는 \"벽돌 목록\". 조건: 덮음 + 두 벽돌의 교집합 속 벽돌 존재. 예: 열린구간들 → $\\mathbb{R}$ 표준위상, $[a,b)$들 → 하한위상 $\\mathbb{R}_\\ell$.",
    "href": "subjects/topology/ch01.html#def-basis-topology"
  },
  "topology-closure": {
    "ko": "폐포·내부 (위상)",
    "en": "closure, interior",
    "short": "폐포 = 포함하는 닫힌집합들의 교집합(최소 닫힌 포장), 내부 = 담긴 열린집합들의 합(최대 열린 속). $x \\in \\bar{A} \\iff$ 모든 열린 근방이 $A$와 만남. 위상에 따라 달라진다!",
    "href": "subjects/topology/ch01.html#def-topology-closure"
  },
  "hausdorff": {
    "ko": "하우스도르프 공간",
    "en": "Hausdorff space, T₂",
    "short": "서로 다른 두 점을 서로소 열린집합으로 가를 수 있는 공간 — 극한의 유일성을 보증. 거리공간은 자동 만족, 여유한위상(무한집합)은 $T_1$이지만 $T_2$가 아니다.",
    "href": "subjects/topology/ch01.html#def-hausdorff"
  },
  "subspace-topology": {
    "ko": "부분공간 위상",
    "en": "subspace topology",
    "short": "$\\mathcal{T}_Y = \\{Y \\cap U : U \\in \\mathcal{T}\\}$ — 큰 공간의 열린집합을 잘라 물려주기. \"$Y$에서 열림\"과 \"$X$에서 열림\"은 다르다 (해석학의 상대적 열림).",
    "href": "subjects/topology/ch01.html#def-subspace-topology"
  },

  "limit-point-top": {
    "ko": "집적점 (위상)",
    "en": "limit point",
    "short": "$x$의 모든 열린 근방이 $A \\setminus \\{x\\}$와 만나는 점 — 거리공간 정의에서 \"근방\"을 \"열린집합\"으로 바꾼 것. $\\bar{A} = A \\cup A'$이 그대로 성립한다.",
    "href": "subjects/topology/ch01.html#def-limit-point-top"
  },

  "continuous-top": {
    "ko": "연속 (위상)",
    "en": "continuous function",
    "short": "열린집합의 원상이 열림 — 해석학에서 정리였던 것이 위상수학의 정의. 기저원소만 검사해도 충분하고, 양쪽 위상에 의존한다 (정의역이 섬세할수록 연속이 쉽다).",
    "href": "subjects/topology/ch02.html#def-continuous-top"
  },
  "pasting-lemma": {
    "ko": "붙임 보조정리",
    "en": "pasting lemma",
    "short": "닫힌(또는 열린) 조각 $A, B$ 위의 연속함수가 교집합에서 일치하면 이어 붙인 함수도 연속 — 조각별 정의 함수의 연속성 보증서.",
    "href": "subjects/topology/ch02.html#def-pasting-lemma"
  },
  "homeomorphism": {
    "ko": "위상동형사상",
    "en": "homeomorphism",
    "short": "전단사 + 양방향 연속 — 열린집합 구조의 완전한 대응. 역함수 연속은 공짜가 아니다 ($[0,2\\pi) \\to S^1$이 반례; 컴팩트+하우스도르프면 공짜가 된다).",
    "href": "subjects/topology/ch02.html#def-homeomorphism"
  },
  "product-topology": {
    "ko": "곱위상",
    "en": "product topology",
    "short": "열린 직사각형 $U \\times V$를 기저로. 좌표별 연속 $=$ 연속. 무한 곱에서는 \"유한 개 좌표만 제한\"이 옳은 정의 (상자위상이 아니라).",
    "href": "subjects/topology/ch02.html#def-product-topology"
  },

  "path-connected": {
    "ko": "경로연결",
    "en": "path connected",
    "short": "임의의 두 점을 연속 경로 $\\gamma : [0,1] \\to X$로 이을 수 있는 것. 경로연결 $\\Rightarrow$ 연결이지만 역은 거짓 — 위상수학자의 사인 곡선이 반례.",
    "href": "subjects/topology/ch03.html#def-path-connected"
  },
  "connected-component": {
    "ko": "연결성분",
    "en": "connected component",
    "short": "최대 연결 조각 (동치류). 각 성분은 닫혀 있고, 성분의 개수는 위상 불변량 — \"점 빼기\" 논증으로 $[0,1) \\not\\approx (0,1)$, $\\mathbb{R} \\not\\approx \\mathbb{R}^2$를 가른다.",
    "href": "subjects/topology/ch03.html#def-connected-component"
  },

  "separation": {
    "ko": "분리 (위상)",
    "en": "separation",
    "short": "공집합 아닌 서로소 열린집합 $U, V$로 $X = U \\cup V$가 되는 것. 분리가 없으면 연결 — 동치: clopen 부분집합이 $\\varnothing, X$뿐.",
    "href": "subjects/topology/ch03.html#def-separation"
  },
  "compact-hausdorff": {
    "ko": "컴팩트→하우스도르프 자동 위상동형",
    "en": "compact-to-Hausdorff homeomorphism",
    "short": "연속 전단사 $f : X \\to Y$에서 $X$ 컴팩트, $Y$ 하우스도르프이면 $f^{-1}$ 연속이 공짜 — 닫힌 것이 컴팩트로, 컴팩트가 닫힘으로 릴레이되기 때문. $[0,2\\pi) \\to S^1$은 컴팩트성 결여로 탈락.",
    "href": "subjects/topology/ch04.html#def-compact-hausdorff"
  },
  "compactness-variants": {
    "ko": "컴팩트의 세 얼굴",
    "en": "limit point / sequential compactness",
    "short": "덮개 컴팩트, 집적점 컴팩트(무한집합마다 집적점), 점열 컴팩트(수렴 부분수열) — 일반 위상공간에선 서로 다르지만 거리공간에서는 동치 (르베그 수 보조정리가 다리).",
    "href": "subjects/topology/ch04.html#def-compactness-variants"
  },

  "countability-axioms": {
    "ko": "가산공리",
    "en": "countability axioms",
    "short": "제1가산(각 점에 가산 국소기저), 제2가산(위상 전체에 가산 기저) — 제2가산 $\\Rightarrow$ 가분·린델뢰프. 거리공간에선 가분 $=$ 제2가산이라, 가분인데 제2가산 아닌 $\\mathbb{R}_\\ell$은 거리화 불가.",
    "href": "subjects/topology/ch05.html#def-countability-axioms"
  },
  "separation-axioms": {
    "ko": "분리공리 (T 사다리)",
    "en": "separation axioms",
    "short": "$T_1$(점 닫힘) ⊂ $T_2$(하우스도르프) ⊂ $T_3$(정칙: 점 vs 닫힌집합) ⊂ $T_4$(정규: 닫힌집합 vs 닫힌집합). 거리공간·컴팩트 하우스도르프는 $T_4$. 정규성만 부분공간·곱 유전이 안 된다.",
    "href": "subjects/topology/ch05.html#def-separation-axioms"
  },
  "urysohn-lemma": {
    "ko": "우리손 보조정리",
    "en": "Urysohn lemma",
    "short": "정규공간의 서로소 닫힌집합 $A, B$에 대해 $A$에서 $0$, $B$에서 $1$인 연속함수가 존재 — 위상 조건에서 연속함수를 창조하는 정리. 이진 유리수 층 쌓기로 증명하며, 거리화 정리의 엔진이다.",
    "href": "subjects/topology/ch05.html#def-urysohn-lemma"
  },

  "metrizable": {
    "ko": "거리화 가능 / 우리손 거리화 정리",
    "en": "metrizable, Urysohn metrization",
    "short": "위상을 만들어내는 거리가 존재하는 것. 우리손 정리: 정칙 + 제2가산 $\\Rightarrow$ 거리화 가능 (우리손 함수족으로 힐베르트 큐브에 묻기). 1차 필터는 분리공리, 2차 필터는 가산공리($\\mathbb{R}_\\ell$).",
    "href": "subjects/topology/ch06.html#def-metrizable"
  },
  "baire-category": {
    "ko": "베어 범주 정리",
    "en": "Baire category theorem",
    "short": "완비 거리공간은 내부가 빈 닫힌집합 가산 개로 덮을 수 없다 (조밀 열린집합 가산 교집합은 조밀). 열매: $\\mathbb{Q}$ 완비화 불가, $\\mathbb{R}$ 비가산, 전형적 연속함수는 처처 미분불능.",
    "href": "subjects/topology/ch06.html#def-baire-category"
  },
  "complete-revisit": {
    "ko": "완비성 (위상의 눈으로)",
    "en": "completeness revisited",
    "short": "완비성은 위상 불변량이 아니다 — $(0,1) \\approx \\mathbb{R}$인데 표준 거리로는 한쪽만 완비. 거리의 성질이지 위상의 성질이 아니며, 컴팩트 거리공간은 항상 완비다.",
    "href": "subjects/topology/ch06.html#def-complete-revisit"
  },

  /* ---------- 현대대수 ---------- */

  "binary-operation": {
    "ko": "이항연산",
    "en": "binary operation",
    "short": "$* : S \\times S \\to S$ — 닫혀 있음이 정의에 내장. 결합성과 교환성은 서로 독립인 추가 성질이다 (행렬 곱: 결합○ 교환×).",
    "href": "subjects/abstract-algebra/ch01.html#def-binary-operation"
  },
  "group": {
    "ko": "군",
    "en": "group",
    "short": "결합법칙 + 항등원 + 역원의 구조. 항등원·역원은 유일하고 소거법칙이 성립하며 $(ab)^{-1} = b^{-1}a^{-1}$. 교환까지 되면 아벨군. 예: $\\mathbb{Z}$, $\\mathbb{Z}_n$, $GL_n$, 대칭군.",
    "href": "subjects/abstract-algebra/ch01.html#def-group"
  },
  "subgroup": {
    "ko": "부분군",
    "en": "subgroup",
    "short": "그 자체로 군인 부분집합 ($H \\le G$). 판정: 닫힘 + $e$ 포함 + 역원 포함 — 유한이면 닫힘 하나로 충분 (거듭제곱의 순환). 합집합은 일반적으로 부분군이 아니다.",
    "href": "subjects/abstract-algebra/ch01.html#def-subgroup"
  },
  "element-order": {
    "ko": "원소의 위수",
    "en": "order of an element",
    "short": "$a^n = e$인 최소 양의 정수 $n = |a|$. $a^k = e \\iff n \\mid k$ (나눗셈 정리 + 최소성). 생성 부분군 $\\langle a \\rangle$의 크기와 같다.",
    "href": "subjects/abstract-algebra/ch01.html#def-element-order"
  },

  "cyclic-group": {
    "ko": "순환군",
    "en": "cyclic group",
    "short": "원소 하나가 전부 생성: $G = \\langle a \\rangle$. 전부 아벨이고 부분군도 순환이며, 분류 완결 — $\\mathbb{Z}$ 또는 $\\mathbb{Z}_n$뿐. $\\mathbb{Z}_n$에서 $|\\langle k \\rangle| = n/\\gcd(k,n)$.",
    "href": "subjects/abstract-algebra/ch02.html#def-cyclic-group"
  },
  "permutation-group": {
    "ko": "치환과 대칭군",
    "en": "permutation, symmetric group",
    "short": "집합의 전단사들이 합성으로 이루는 군 $S_n$ ($n!$개, $n \\ge 3$ 비아벨). 모든 치환은 서로소 순환들의 곱으로 유일 분해되고, 위수는 순환 길이들의 lcm.",
    "href": "subjects/abstract-algebra/ch02.html#def-permutation-group"
  },
  "alternating-group": {
    "ko": "교대군",
    "en": "alternating group",
    "short": "짝치환 전체 $A_n$ ($n!/2$개). 호환 분해의 개수는 유일하지 않지만 홀짝은 불변 — 치환행렬의 행렬식이 그 부호다. $A_5$는 최소 비아벨 단순군.",
    "href": "subjects/abstract-algebra/ch02.html#def-alternating-group"
  },
  "cayley-theorem": {
    "ko": "케일리 정리",
    "en": "Cayley's theorem",
    "short": "모든 군은 치환군의 부분군과 동형 — $g \\mapsto$ (왼쪽 곱하기 $\\lambda_g$)가 다리. 케일리 표의 각 행이 치환이라는 스도쿠 성질의 정리화.",
    "href": "subjects/abstract-algebra/ch02.html#def-cayley-theorem"
  },

  "coset": {
    "ko": "잉여류",
    "en": "coset",
    "short": "$aH = \\{ah : h \\in H\\}$ — 부분군의 평행이동 복사본. 같은 방 판정: $aH = bH \\iff a^{-1}b \\in H$. 서로 같거나 서로소(분할)이고 크기가 전부 $|H|$ — 라그랑주의 재료.",
    "href": "subjects/abstract-algebra/ch03.html#def-coset"
  },
  "lagrange-theorem": {
    "ko": "라그랑주 정리",
    "en": "Lagrange's theorem",
    "short": "유한군에서 $|H| \\mid |G|$ — 잉여류 타일 깔기. 열매: 원소 위수 $\\mid$ 군 위수, $a^{|G|} = e$, 소수 위수 군은 순환군, 페르마·오일러 정리. 역은 거짓 ($A_4$에 위수 6 부분군 없음).",
    "href": "subjects/abstract-algebra/ch03.html#def-lagrange-theorem"
  },

  "group-homomorphism": {
    "ko": "준동형사상 (군)",
    "en": "group homomorphism",
    "short": "$\\phi(ab) = \\phi(a)\\phi(b)$ — 연산 보존 함수. $\\det$, 치환의 부호, $\\exp$가 대표 예. 핵 $\\ker\\phi$는 항상 정규부분군이고, 단사 $\\iff$ 핵이 자명. 위수를 나눈다: $|\\phi(a)| \\mid |a|$.",
    "href": "subjects/abstract-algebra/ch04.html#def-group-homomorphism"
  },
  "normal-subgroup": {
    "ko": "정규부분군",
    "en": "normal subgroup",
    "short": "$gH = Hg$ (모든 $g$) — 잉여류 곱셈 $(aH)(bH) = abH$가 잘 정의되는 정확한 조건. 아벨군의 모든 부분군, 지수 2 부분군, 모든 준동형의 핵은 자동 정규.",
    "href": "subjects/abstract-algebra/ch04.html#def-normal-subgroup"
  },
  "factor-group": {
    "ko": "잉여군 (몫군)",
    "en": "factor group",
    "short": "$G/H$ = 잉여류들의 군 — \"$H$의 차이를 무시한 세계\". $\\mathbb{Z}/n\\mathbb{Z} \\cong \\mathbb{Z}_n$, $\\mathbb{R}/\\mathbb{Z} \\cong S^1$. 원소는 잉여류(집합)이지 $G$의 원소가 아니다.",
    "href": "subjects/abstract-algebra/ch04.html#def-factor-group"
  },
  "first-isomorphism": {
    "ko": "제1동형정리",
    "en": "first isomorphism theorem",
    "short": "$G/\\ker\\phi \\cong \\phi(G)$ — 몫군 계산의 만능 도구: 핵이 $H$인 준동형을 설계하면 $G/H$가 그 상이다. $GL_n/SL_n \\cong \\mathbb{R}^*$, $S_n/A_n \\cong \\mathbb{Z}_2$. 선형대수 차원정리의 군론 쌍둥이.",
    "href": "subjects/abstract-algebra/ch04.html#def-first-isomorphism"
  },
  "second-isomorphism": {
    "ko": "제2동형정리",
    "en": "second isomorphism theorem",
    "short": "$H \\le G$, $N \\trianglelefteq G$이면 $HN/N \\cong H/(H \\cap N)$ — 격자에서 마름모 모양이라 다이아몬드 정리. 겹치는 부분 $H\\cap N$만큼이 뭉개진다. $N$이 정규여야 $HN$이 부분군.",
    "href": "subjects/abstract-algebra/ch04.html#def-second-isomorphism"
  },
  "third-isomorphism": {
    "ko": "제3동형정리",
    "en": "third isomorphism theorem",
    "short": "$K \\le H$, $H, K \\trianglelefteq G$이면 $(G/K)/(H/K) \\cong G/H$ — 몫의 몫을 분수처럼 약분. 두 번 뭉갠 것은 한 번에 크게 뭉갠 것과 같다.",
    "href": "subjects/abstract-algebra/ch04.html#def-third-isomorphism"
  },
  "correspondence-theorem": {
    "ko": "대응정리 (격자 동형정리)",
    "en": "correspondence theorem",
    "short": "$N \\trianglelefteq G$이면 $G/N$의 부분군 전체 $= \\{H/N : N \\le H \\le G\\}$ — 몫군의 부분군을 원본에서 직접 읽는다(포함·지수·정규성 보존). $\\mathbb{Z}_n$의 부분군이 약수와 대응하는 이유.",
    "href": "subjects/abstract-algebra/ch04.html#def-correspondence-theorem"
  },

  "ring": {
    "ko": "환",
    "en": "ring",
    "short": "덧셈 아벨군 + 결합 곱셈 + 분배법칙. 가환/단위원은 추가 옵션. $\\mathbb{Z}$, $\\mathbb{Z}_n$, 행렬환 $M_n$(비가환), 다항식환 $F[x]$, 연속함수환이 대표.",
    "href": "subjects/abstract-algebra/ch05.html#def-ring"
  },
  "integral-domain": {
    "ko": "정역 / 영인자",
    "en": "integral domain, zero divisor",
    "short": "영인자($a, b \\neq 0$인데 $ab = 0$)가 없는 단위원 있는 가환환 — 곱셈 소거가 되는 세계. $\\mathbb{Z}_n$ 정역 $\\iff n$ 소수. 유한 정역은 체다 (비둘기집).",
    "href": "subjects/abstract-algebra/ch05.html#def-integral-domain"
  },
  "characteristic": {
    "ko": "표수",
    "en": "characteristic",
    "short": "$n \\cdot 1 = 0$인 최소 양의 정수 (없으면 0). 정역·체의 표수는 0 또는 소수. 표수 $p$에서는 $(a+b)^p = a^p + b^p$ (신입생의 꿈) — 프로베니우스 사상의 근거.",
    "href": "subjects/abstract-algebra/ch05.html#def-characteristic"
  },

  "ideal": {
    "ko": "아이디얼",
    "en": "ideal",
    "short": "덧셈 부분군 + 흡수 성질($r \\in R, a \\in N \\Rightarrow ra \\in N$) — 몫환 곱셈이 잘 정의되는 조건. 환 준동형의 핵은 항상 아이디얼. $\\mathbb{Z}$와 $F[x]$에서는 전부 주 아이디얼.",
    "href": "subjects/abstract-algebra/ch06.html#def-ideal"
  },
  "factor-ring": {
    "ko": "잉여환",
    "en": "factor ring",
    "short": "$R/N$ — 아이디얼로 나눈 몫. 환 제1동형정리 $R/\\ker\\phi \\cong \\phi(R)$. \"대입 = 몫\": $F[x]/\\langle x \\rangle \\cong F$, $\\mathbb{R}[x]/\\langle x^2+1 \\rangle \\cong \\mathbb{C}$.",
    "href": "subjects/abstract-algebra/ch06.html#def-factor-ring"
  },
  "prime-maximal": {
    "ko": "소 / 극대 아이디얼",
    "en": "prime, maximal ideal",
    "short": "소: $ab \\in N \\Rightarrow a \\in N$ 또는 $b \\in N$. 극대: 더 키울 수 없음. 몫이 정역 $\\iff$ 소, 몫이 체 $\\iff$ 극대 — 극대 ⇒ 소이고 역은 거짓 ($\\mathbb{Z}[x]$의 $\\langle x \\rangle$).",
    "href": "subjects/abstract-algebra/ch06.html#def-prime-maximal"
  },
  "field-hierarchy": {
    "ko": "체 (환의 위계에서)",
    "en": "field in the ring hierarchy",
    "short": "체 ⇒ 정역 ⇒ 가환환 (역은 각각 거짓). 유한 정역은 체 — $\\mathbb{Z}_p$가 체인 이유. 체의 아이디얼은 자명한 둘뿐.",
    "href": "subjects/abstract-algebra/ch05.html#def-field-hierarchy"
  },

  "polynomial-ring": {
    "ko": "다항식환",
    "en": "polynomial ring",
    "short": "체 위의 $F[x]$ — 제2의 $\\mathbb{Z}$: 나눗셈 정리, 인수정리, 근 ≤ 차수, 주 아이디얼, 유일 인수분해가 전부 성립. 기약다항식이 소수의 역할.",
    "href": "subjects/abstract-algebra/ch07.html#def-polynomial-ring"
  },
  "irreducible-polynomial": {
    "ko": "기약다항식",
    "en": "irreducible polynomial",
    "short": "더 낮은 차수의 곱으로 안 쪼개지는 다항식 — 반드시 \"어느 체 위에서\"와 함께. 판정: 2·3차는 근 검사, 아이젠슈타인, mod p. 기약 $\\iff \\langle p \\rangle$ 극대 $\\iff$ 몫이 체.",
    "href": "subjects/abstract-algebra/ch07.html#def-irreducible-polynomial"
  },
  "kronecker": {
    "ko": "크로네커의 정리",
    "en": "Kronecker's theorem",
    "short": "$p$ 기약이면 $F[x]/\\langle p \\rangle$는 $p$의 근 $\\alpha = x + \\langle p \\rangle$를 담은 확대체 — 근은 발견이 아니라 제조. $\\mathbb{C}$와 유한체 $\\mathbb{F}_{p^n}$이 이 공장의 생산품.",
    "href": "subjects/abstract-algebra/ch07.html#def-kronecker"
  },
  "extension-field": {
    "ko": "체의 확대와 차수",
    "en": "field extension, degree",
    "short": "$E \\supset F$는 $F$-벡터공간이고 $[E:F] = \\dim_F E$. $[F(\\alpha):F] = \\deg \\operatorname{irr}(\\alpha, F)$, 탑 법칙 $[K:F] = [K:E][E:F]$ — 차수의 라그랑주. 작도 불가능성 증명의 엔진.",
    "href": "subjects/abstract-algebra/ch07.html#def-extension-field"
  },

  /* ---------- 현대대수 8–13장 (심화) ---------- */

  "direct-product": {
    "ko": "직접곱",
    "en": "direct product",
    "short": "군들의 데카르트 곱에 성분별 연산을 준 것. $|G\\times H|=|G||H|$이고 원소 위수는 $|(a,b)|=\\operatorname{lcm}(|a|,|b|)$. 내적 조건: $G=HK$, $H\\cap K=\\{e\\}$, 둘 다 정규이면 $G\\cong H\\times K$.",
    "href": "subjects/abstract-algebra/ch08.html#def-direct-product"
  },
  "finitely-generated-abelian": {
    "ko": "유한생성 아벨군의 기본정리",
    "en": "fundamental theorem of finitely generated abelian groups",
    "short": "모든 유한생성 아벨군은 $\\mathbb{Z}^r\\times\\mathbb{Z}_{p_1^{k_1}}\\times\\cdots$ (기본인자 꼴), 동치로 $d_1\\mid\\cdots\\mid d_s$인 불변인자 꼴로 유일 분해. 위수 $n=\\prod p_i^{a_i}$ 아벨군의 개수는 $\\prod P(a_i)$ (분할 수).",
    "href": "subjects/abstract-algebra/ch08.html#def-finitely-generated-abelian"
  },
  "group-action": {
    "ko": "군의 작용",
    "en": "group action",
    "short": "군 $G$가 집합 $X$를 뒤섞는 방식 — 공리 $e\\cdot x=x$, $(gh)\\cdot x=g\\cdot(h\\cdot x)$. 준동형 $G\\to\\operatorname{Sym}(X)$를 주는 것과 동치. 왼쪽 곱·켤레·잉여류 작용이 대표.",
    "href": "subjects/abstract-algebra/ch09.html#def-group-action"
  },
  "orbit-stabilizer": {
    "ko": "궤도-안정자 정리",
    "en": "orbit-stabilizer theorem",
    "short": "궤도 $Gx$($X$의 부분집합)와 안정자 $G_x$($G$의 부분군)를 잇는 $|Gx|=[G:G_x]$. 궤도가 $X$를 분할하고 그 크기는 $|G|$의 약수 — 라그랑주 정리의 일반화.",
    "href": "subjects/abstract-algebra/ch09.html#def-orbit-stabilizer"
  },
  "class-equation": {
    "ko": "류방정식",
    "en": "class equation",
    "short": "켤레작용에 궤도-안정자를 적용한 회계 장부 $|G|=|Z(G)|+\\sum[G:C(a_i)]$. 각 항이 $|G|$의 약수라는 제약으로 $p$-군의 중심 비자명, 위수 $p^2$ 군의 아벨성을 증명.",
    "href": "subjects/abstract-algebra/ch09.html#def-class-equation"
  },
  "burnside-counting": {
    "ko": "번사이드 계수정리",
    "en": "Burnside's counting theorem",
    "short": "궤도의 수 $=\\frac{1}{|G|}\\sum_{g}|X^g|$ (고정점의 평균). 대칭을 무시한 ‘본질적으로 다른’ 색칠·목걸이를 세는 도구 — 정육각형 2색 회전 색칠은 14가지.",
    "href": "subjects/abstract-algebra/ch09.html#def-burnside-counting"
  },
  "cauchy-theorem-group": {
    "ko": "코시 정리 (군론)",
    "en": "Cauchy's theorem",
    "short": "$p\\mid|G|$ ($p$ 소수)이면 위수 $p$인 원소가 존재 — 라그랑주의 최소한의 역. 비아벨에서도 성립. McKay의 $p$-튜플에 $\\mathbb{Z}_p$ 회전을 걸어 고정점을 세는 증명. 위수 $p^i$ 부분군 존재의 씨앗.",
    "href": "subjects/abstract-algebra/ch10.html#def-cauchy-theorem-group"
  },
  "sylow-theorems": {
    "ko": "실로우 정리",
    "en": "Sylow theorems",
    "short": "$|G|=p^k m$ ($p\\nmid m$)에서 (1) 위수 $p^k$ 부분군(실로우 $p$-부분군) 존재, (2) 모두 서로 켤레, (3) 개수 $n_p\\equiv1\\pmod p$이고 $n_p\\mid m$. $n_p=1\\iff$ 정규 — 유한군 분류의 주력 엔진.",
    "href": "subjects/abstract-algebra/ch10.html#def-sylow-theorems"
  },
  "simple-group": {
    "ko": "단순군",
    "en": "simple group",
    "short": "자명하지 않은 정규부분군이 없는 군 — 군의 ‘소수/원자’. 아벨 단순군은 $\\mathbb{Z}_p$뿐, 최소 비아벨 단순군은 $A_5$(위수 60). $A_5$의 단순성이 5차방정식 불가해의 심장.",
    "href": "subjects/abstract-algebra/ch10.html#def-simple-group"
  },
  "algebraic-extension": {
    "ko": "대수적 확대",
    "en": "algebraic extension",
    "short": "모든 원소가 $F$ 위에서 대수적인 확대 $E/F$. 유한이면 자동으로 대수적이지만 역은 거짓 — $\\overline{\\mathbb{Q}}/\\mathbb{Q}$는 무한 대수확대. 대수적 원소는 중간체를 이루고, 대수적 위의 대수적은 다시 대수적이다.",
    "href": "subjects/abstract-algebra/ch11.html#def-algebraic-extension"
  },
  "algebraically-closed": {
    "ko": "대수적으로 닫힌 체",
    "en": "algebraically closed field",
    "short": "상수 아닌 다항식이 모두 근을 갖는(일차식으로 완전분해되는) 체. 대수적 폐포 $\\overline{F}$는 존재(선택공리)·유일(동형까지). $\\mathbb{C}$는 닫혀 있고(대수학의 기본정리), $\\overline{\\mathbb{Q}}\\subsetneq\\mathbb{C}$ (가산 vs 비가산).",
    "href": "subjects/abstract-algebra/ch11.html#def-algebraically-closed"
  },
  "constructible-number": {
    "ko": "작도 가능수",
    "en": "constructible number",
    "short": "자와 컴퍼스로 얻는 길이. 전체가 체이고 양수의 제곱근에 닫혀 있다. 작도 가능 $\\Rightarrow [\\mathbb{Q}(\\gamma):\\mathbb{Q}]=2^k$ (필요조건, 역은 거짓). 배적·각의 3등분·원적 불가능성의 대수적 근거.",
    "href": "subjects/abstract-algebra/ch11.html#def-constructible-number"
  },
  "field-automorphism": {
    "ko": "체의 자기동형",
    "en": "field automorphism",
    "short": "체 $E$에서 자신으로 가는 전단사 환동형 $\\sigma$ — 소체(prime field)는 항상 고정하고, $F$-계수 다항식의 근을 근으로 옮긴다. 전체가 합성으로 군 $\\operatorname{Aut}(E)$를 이룬다.",
    "href": "subjects/abstract-algebra/ch12.html#def-field-automorphism"
  },
  "galois-group": {
    "ko": "갈루아 군",
    "en": "Galois group",
    "short": "$F$를 점별 고정하는 $E$의 자기동형들 $\\operatorname{Gal}(E/F) \\le \\operatorname{Aut}(E)$. 근을 켤레근으로 치환하므로 유한군. 갈루아 확대에서는 $|\\operatorname{Gal}(E/F)| = [E:F]$이고 고정체가 $F$.",
    "href": "subjects/abstract-algebra/ch12.html#def-galois-group"
  },
  "splitting-field": {
    "ko": "분해체",
    "en": "splitting field",
    "short": "$f \\in F[x]$가 1차식들로 완전분해되는 최소 확대 $E = F(\\alpha_1,\\dots,\\alpha_n)$. 크로네커 반복으로 존재, 동형 확장 정리로 (동형까지) 유일. $x^3-2$의 분해체는 $\\mathbb{Q}(\\sqrt[3]2,\\omega)$, 차수 6.",
    "href": "subjects/abstract-algebra/ch12.html#def-splitting-field"
  },
  "separable-extension": {
    "ko": "분리확대",
    "en": "separable extension",
    "short": "중근 없는(분리) 기약다항식만 최소다항식으로 갖는 확대. 판정은 $\\gcd(f,f')=1$. 표수 0·완전체(유한체)에선 자동, 비분리는 $\\mathbb{F}_p(t)$ 위 $x^p-t$처럼 완전하지 않은 체에서만 생긴다.",
    "href": "subjects/abstract-algebra/ch12.html#def-separable-extension"
  },
  "normal-extension": {
    "ko": "정규확대",
    "en": "normal extension",
    "short": "어떤 다항식족의 분해체인 대수적 확대 — 동치로, $F$ 위 기약다항식이 $E$ 안에 근 하나를 가지면 $E$ 안에서 완전분해. 정규+분리 = 갈루아. $\\mathbb{Q}(\\sqrt[3]2)/\\mathbb{Q}$은 비정규 반례($|\\operatorname{Gal}|=1\\lt3$).",
    "href": "subjects/abstract-algebra/ch12.html#def-normal-extension"
  },
  "galois-correspondence": {
    "ko": "갈루아 기본정리",
    "en": "fundamental theorem of Galois theory",
    "short": "유한 갈루아 확대 $E/F$에서 {중간체 $K$}와 {부분군 $H\\le G$} 사이의 포함 역순 전단사 $K\\mapsto\\operatorname{Gal}(E/K)$, $H\\mapsto E^H$. $[E:K]=|H|$, $[K:F]=(G:H)$; $K/F$ 정규 $\\iff H\\trianglelefteq G$이고 $\\operatorname{Gal}(K/F)\\cong G/H$.",
    "href": "subjects/abstract-algebra/ch13.html#def-galois-correspondence"
  },
  "cyclotomic-extension": {
    "ko": "원분확대",
    "en": "cyclotomic extension",
    "short": "$1$의 원시 $n$제곱근을 이어 붙인 체 $\\mathbb{Q}(\\zeta_n)$ — $x^n-1$의 분해체. $\\operatorname{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q})\\cong(\\mathbb{Z}/n\\mathbb{Z})^\\times$(아벨), 차수 $\\varphi(n)$. 정 $n$각형 작도 $\\iff\\varphi(n)$이 2의 거듭제곱(페르마 소수).",
    "href": "subjects/abstract-algebra/ch13.html#def-cyclotomic-extension"
  },
  "solvable-group": {
    "ko": "가해군",
    "en": "solvable group",
    "short": "정규열 $\\{e\\}\\trianglelefteq H_1\\trianglelefteq\\cdots\\trianglelefteq G$의 몫이 전부 아벨인 군. 아벨·$p$-군·$S_3$·$S_4$는 가해, $A_5$(단순비아벨)부터 비가해. 방정식의 근호 가해성과 대응.",
    "href": "subjects/abstract-algebra/ch13.html#def-solvable-group"
  },
  "radical-solvability": {
    "ko": "근호에 의한 가해성",
    "en": "solvability by radicals",
    "short": "다항식 $f$의 근이 계수의 사칙연산과 거듭제곱근만으로 표현됨 = 근호탑 존재. 갈루아 대정리: $f$ 근호로 풀림 $\\iff\\operatorname{Gal}(E/F)$가 가해군. $S_5$ 비가해 → 일반 5차는 근의 공식 없음.",
    "href": "subjects/abstract-algebra/ch13.html#def-radical-solvability"
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

  "elementary-operation": {
    "ko": "기본행연산",
    "en": "elementary row operations",
    "short": "행 교환·$0$ 아닌 스칼라 곱·다른 행의 배수 더하기 — 각각 가역인 기본행렬을 곱하는 것과 같아서 해집합과 rank를 보존한다. 소거법의 정체.",
    "href": "subjects/linear-algebra/ch03.html#def-elementary-operation"
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
  },

  /* ---------- 정수론 (Burton) ---------- */

  "division-algorithm": {
    "ko": "나눗셈 정리",
    "en": "division algorithm",
    "short": "임의의 정수 $a$와 $b \\gt 0$에 대해 $a = qb + r$, $0 \\le r \\lt b$인 몫 $q$와 나머지 $r$이 유일하게 존재. 나머지가 $0$인 경우가 $b \\mid a$이고, 증명 핵심은 가장 작은 비음 나머지를 고르는 정렬성(well-ordering)이다.",
    "href": "subjects/number-theory/ch01.html#def-division-algorithm"
  },
  "gcd-bezout": {
    "ko": "최대공약수와 베주 항등식",
    "en": "gcd, Bézout's identity",
    "short": "$\\gcd(a,b)=d$는 공약수 중 최대이자 $\\{ax+by\\}$ 중 가장 작은 양의 정수(베주)이며, $ax+by$ 꼴은 정확히 $d$의 배수 전체. 따름: 유클리드 보조정리 $\\gcd(a,b)=1,\\ a\\mid bc\\Rightarrow a\\mid c$와 $p\\mid ab\\Rightarrow p\\mid a$ 또는 $p\\mid b$.",
    "href": "subjects/number-theory/ch01.html#def-gcd-bezout"
  },
  "euclidean-algorithm": {
    "ko": "유클리드 호제법",
    "en": "Euclidean algorithm",
    "short": "$a=qb+r$이면 $\\gcd(a,b)=\\gcd(b,r)$임을 반복 — 마지막 $0$ 아닌 나머지가 $\\gcd$. 각 등식을 역대입하면 베주 계수 $x,y$까지 얻는다. 예: $\\gcd(803,154)=11$.",
    "href": "subjects/number-theory/ch01.html#def-euclidean-algorithm"
  },
  "prime-number": {
    "ko": "소수와 합성수",
    "en": "prime number",
    "short": "$1$보다 큰 정수 중 $1$과 자신만을 양의 약수로 갖는 수 — 정수의 원자. $1$은 소수가 아니다(유일 인수분해 보존). 유클리드가 증명했듯 무한히 많고, 합성수는 $\\le\\sqrt n$인 소인수를 반드시 가진다.",
    "href": "subjects/number-theory/ch02.html#def-prime-number"
  },
  "fundamental-theorem-arithmetic": {
    "ko": "산술의 기본정리",
    "en": "fundamental theorem of arithmetic",
    "short": "$2$ 이상의 모든 정수는 소수들의 곱으로, 순서를 무시하면 유일하게 분해된다. 존재는 강귀납, 유일성은 유클리드 보조정리($p\\mid ab\\Rightarrow p\\mid a$ 또는 $p\\mid b$). 표준형 $n=p_1^{a_1}\\cdots p_r^{a_r}$이 약수·$\\gcd$·$\\tau$를 지배.",
    "href": "subjects/number-theory/ch02.html#def-fundamental-theorem-arithmetic"
  },
  "congruence": {
    "ko": "합동",
    "en": "congruence",
    "short": "$a\\equiv b\\pmod n \\iff n\\mid a-b$ — 나머지가 같음. 동치관계이자 덧셈·곱셈·거듭제곱을 보존하는 합동 산술의 무대이고, 잉여류가 $\\mathbb{Z}_n$을 이룬다. 소거는 $\\gcd(c,n)=1$일 때만 법이 유지된다.",
    "href": "subjects/number-theory/ch03.html#def-congruence"
  },
  "linear-congruence": {
    "ko": "일차 합동방정식",
    "en": "linear congruence",
    "short": "$ax\\equiv b\\pmod n$. $d=\\gcd(a,n)$일 때 $d\\mid b$이면 해가 정확히 $d$개(mod $n$), 아니면 무해. $\\gcd(a,n)=1$이면 역원 $a^{-1}$(유클리드 호제법)로 유일하게 풀린다.",
    "href": "subjects/number-theory/ch03.html#def-linear-congruence"
  },
  "chinese-remainder": {
    "ko": "중국인의 나머지 정리",
    "en": "Chinese remainder theorem",
    "short": "쌍마다 서로소인 $n_i$에 대한 연립합동 $x\\equiv a_i\\pmod{n_i}$은 mod $N=\\prod n_i$에서 유일해($N_iM_i\\equiv1$로 구성). 환 동형 $\\mathbb{Z}_N\\cong\\prod\\mathbb{Z}_{n_i}$의 정수론 판본.",
    "href": "subjects/number-theory/ch03.html#def-chinese-remainder"
  },
  "fermat-little": {
    "ko": "페르마 소정리",
    "en": "Fermat's little theorem",
    "short": "$p$가 소수이고 $p\\nmid a$이면 $a^{p-1}\\equiv1\\pmod p$; 일반형 $a^p\\equiv a$(모든 $a$). 증명은 나머지 재배열 또는 이항정리 귀납. 큰 거듭제곱을 지수 $\\bmod(p-1)$로 접는 도구이자 라그랑주 정리의 정수 버전.",
    "href": "subjects/number-theory/ch04.html#def-fermat-little"
  },
  "euler-phi": {
    "ko": "오일러 파이 함수",
    "en": "Euler's totient function",
    "short": "$\\varphi(n)$ = $1\\le k\\le n$이면서 $\\gcd(k,n)=1$인 $k$의 개수. $\\varphi(p)=p-1$, $\\varphi(p^k)=p^k-p^{k-1}$이고 서로소인 두 수에서 곱셈적. $(\\mathbb{Z}/n\\mathbb{Z})^\\times$의 위수이자 오일러 정리의 지수.",
    "href": "subjects/number-theory/ch04.html#def-euler-phi"
  },
  "euler-theorem": {
    "ko": "오일러 정리",
    "en": "Euler's theorem",
    "short": "$\\gcd(a,n)=1$이면 $a^{\\varphi(n)}\\equiv1\\pmod n$ — 페르마 소정리를 임의의 법으로 일반화. 증명은 기약잉여계 재배열이며 $(\\mathbb{Z}/n\\mathbb{Z})^\\times$에 라그랑주 정리를 적용한 따름. RSA 암호의 심장.",
    "href": "subjects/number-theory/ch04.html#def-euler-theorem"
  },
  "wilson-theorem": {
    "ko": "윌슨 정리",
    "en": "Wilson's theorem",
    "short": "$p$가 소수 $\\iff (p-1)!\\equiv-1\\pmod p$. 증명은 $2,\\dots,p-2$를 역원끼리 짝지어 소거(자기역원은 $\\pm1$뿐). 소수의 필요충분조건이지만 계산 비용 때문에 실용 판정법은 못 된다.",
    "href": "subjects/number-theory/ch04.html#def-wilson-theorem"
  },
  "multiplicative-function": {
    "ko": "곱셈적 함수",
    "en": "multiplicative function",
    "short": "$\\gcd(m,n)=1$이면 $f(mn)=f(m)f(n)$인 수론적 함수 — 소수 거듭제곱 값이 전체를 결정. 서로소 조건 없이 성립하면 완전곱셈적($\\varphi,\\tau,\\sigma,\\mu$는 곱셈적이나 완전곱셈적 아님). 두 곱셈적 함수의 디리클레 합성곱도 곱셈적.",
    "href": "subjects/number-theory/ch05.html#def-multiplicative-function"
  },
  "divisor-functions": {
    "ko": "약수 함수와 완전수",
    "en": "divisor functions, perfect numbers",
    "short": "약수의 개수 $\\tau(n)=\\prod(a_i+1)$와 약수의 합 $\\sigma(n)=\\prod\\frac{p_i^{a_i+1}-1}{p_i-1}$ — 둘 다 곱셈적. 완전수는 $\\sigma(n)=2n$; 짝수 완전수는 유클리드-오일러로 $2^{p-1}(2^p-1)$($2^p-1$ 메르센 소수)와 일대일, 홀수 완전수는 미해결.",
    "href": "subjects/number-theory/ch05.html#def-divisor-functions"
  },
  "mobius-inversion": {
    "ko": "뫼비우스 함수와 반전공식",
    "en": "Möbius function and inversion",
    "short": "$\\mu(1)=1$, 제곱인수가 있으면 $0$, 서로 다른 소수 $k$개면 $(-1)^k$. 초석 $\\sum_{d\\mid n}\\mu(d)=[n{=}1]$에서 반전공식 $F(n)=\\sum_{d\\mid n}f(d)\\iff f(n)=\\sum_{d\\mid n}\\mu(d)F(n/d)$. 응용: $\\varphi=\\mu*\\operatorname{id}$.",
    "href": "subjects/number-theory/ch05.html#def-mobius-inversion"
  },
  "order-mod-n": {
    "ko": "법 n에 대한 위수",
    "en": "order modulo n",
    "short": "$\\gcd(a,n)=1$일 때 $a^k\\equiv 1\\pmod n$을 만족하는 최소 양의 정수 $\\operatorname{ord}_n(a)$. $a^k\\equiv 1\\iff\\operatorname{ord}_n(a)\\mid k$이고 $\\operatorname{ord}_n(a)\\mid\\varphi(n)$. 군 $(\\mathbb{Z}/n\\mathbb{Z})^\\times$에서 원소의 위수와 같은 개념.",
    "href": "subjects/number-theory/ch06.html#def-order-mod-n"
  },
  "primitive-root": {
    "ko": "원시근",
    "en": "primitive root",
    "short": "$\\operatorname{ord}_n(g)=\\varphi(n)$인 $g$ — $(\\mathbb{Z}/n\\mathbb{Z})^\\times$를 순환군으로 생성. 존재 $\\iff n=1,2,4,p^k,2p^k$(홀수 소수 $p$)이며 모든 소수는 원시근을 가진다. 있으면 서로 합동 아닌 원시근이 정확히 $\\varphi(\\varphi(n))$개.",
    "href": "subjects/number-theory/ch06.html#def-primitive-root"
  },
  "quadratic-residue": {
    "ko": "이차잉여",
    "en": "quadratic residue",
    "short": "$\\gcd(a,p)=1$인 홀소수 $p$에서 $x^2\\equiv a\\pmod p$가 풀리면 이차잉여(QR), 아니면 비잉여(QNR). $\\{1,\\dots,p-1\\}$에 각각 정확히 $\\frac{p-1}{2}$개. 오일러 판정법 $a^{(p-1)/2}\\equiv\\pm1$로 판정.",
    "href": "subjects/number-theory/ch07.html#def-quadratic-residue"
  },
  "legendre-symbol": {
    "ko": "르장드르 기호",
    "en": "Legendre symbol",
    "short": "홀소수 $p$에 대해 $\\left(\\frac a p\\right)\\in\\{1,-1,0\\}$ — 이차잉여/비잉여/$p\\mid a$. 완전 곱셈적이고 $\\left(\\frac a p\\right)\\equiv a^{(p-1)/2}\\pmod p$(오일러 판정법).",
    "href": "subjects/number-theory/ch07.html#def-legendre-symbol"
  },
  "quadratic-reciprocity": {
    "ko": "이차상호법칙",
    "en": "quadratic reciprocity",
    "short": "서로 다른 홀소수에서 $\\left(\\frac p q\\right)\\left(\\frac q p\\right)=(-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$ — 둘 다 $\\equiv3\\pmod4$면 부호 반대, 아니면 같음. 보충법칙 $\\left(\\frac{-1}p\\right)=(-1)^{(p-1)/2}$, $\\left(\\frac2p\\right)=(-1)^{(p^2-1)/8}$. 가우스의 황금정리.",
    "href": "subjects/number-theory/ch07.html#def-quadratic-reciprocity"
  }
});
