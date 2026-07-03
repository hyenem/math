/* ============================================================
 * 사이트 전체 목차 — 단일 진실 공급원 (single source of truth)
 *
 * 새 챕터 추가 방법:
 *   1. subjects/<과목slug>/chNN.html 파일을 만든다
 *   2. 아래 해당 과목의 chapters 배열에서 ready를 true로 바꾼다
 *      (또는 새 항목을 한 줄 추가한다)
 * 네비게이션(홈 카드, 챕터 목록, 사이드바, 이전/다음)은
 * site.js가 이 데이터로 전부 자동 생성한다.
 * ============================================================ */

window.MATH_SITE = {
  name: "여백",
  tagline: "교과서의 행간을 채우는 대학수학 노트"
};

window.MATH_TOC = [
  {
    slug: "analysis",
    title: "해석학",
    en: "Real Analysis",
    book: "Rudin, Principles of Mathematical Analysis (3rd ed.)",
    desc: "극한, 연속, 수렴을 엄밀하게 — 미적분학을 처음부터 다시 짓는 과목.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "실수와 복소수 체계", ready: true },
      { file: "ch02.html", num: 2, title: "기초 위상", ready: true },
      { file: "ch03.html", num: 3, title: "수열과 급수", ready: true },
      { file: "ch04.html", num: 4, title: "연속", ready: true },
      { file: "ch05.html", num: 5, title: "미분", ready: true },
      { file: "ch06.html", num: 6, title: "리만-스틸체스 적분", ready: true },
      { file: "ch07.html", num: 7, title: "함수열과 함수급수", ready: true },
      { file: "ch08.html", num: 8, title: "특수 함수", ready: true },
      { file: "ch09.html", num: 9, title: "다변수 함수의 미분", ready: true },
      { file: "ch10.html", num: 10, title: "미분형식과 스토크스 정리", ready: true },
      { file: "ch11.html", num: 11, title: "르베그 이론", ready: true }
    ]
  },
  {
    slug: "calculus",
    title: "미적분학",
    en: "Calculus",
    book: "Spivak, Calculus (4th ed.)",
    desc: "증명으로 배우는 미적분 — 해석학으로 가는 가장 좋은 다리.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "수의 기본 성질과 함수", ready: true },
      { file: "ch02.html", num: 2, title: "극한과 연속 — 세 가지 어려운 정리", ready: true },
      { file: "ch03.html", num: 3, title: "도함수와 미분법", ready: true },
      { file: "ch04.html", num: 4, title: "도함수의 응용", ready: true },
      { file: "ch05.html", num: 5, title: "적분과 미적분의 기본정리", ready: true },
      { file: "ch06.html", num: 6, title: "초등초월함수 — 로그·지수·삼각", ready: true },
      { file: "ch07.html", num: 7, title: "무한급수와 테일러 정리", ready: true }
    ]
  },
  {
    slug: "linear-algebra",
    title: "선형대수학",
    en: "Linear Algebra",
    book: "Friedberg, Insel & Spence, Linear Algebra (5th ed.)",
    desc: "벡터공간과 선형사상 — 거의 모든 수학의 공용어.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "벡터공간", ready: true },
      { file: "ch02.html", num: 2, title: "선형변환과 행렬", ready: true },
      { file: "ch03.html", num: 3, title: "기본행렬연산과 연립일차방정식", ready: true },
      { file: "ch04.html", num: 4, title: "행렬식", ready: true },
      { file: "ch05.html", num: 5, title: "대각화", ready: true },
      { file: "ch06.html", num: 6, title: "내적공간", ready: true },
      { file: "ch07.html", num: 7, title: "표준형", ready: true }
    ]
  },
  {
    slug: "abstract-algebra",
    title: "현대대수학",
    en: "Abstract Algebra",
    book: "Fraleigh, A First Course in Abstract Algebra (7th ed.)",
    desc: "군, 환, 체 — 연산의 구조 그 자체를 연구하는 과목.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "군", ready: true },
      { file: "ch02.html", num: 2, title: "순환군과 치환군", ready: true },
      { file: "ch03.html", num: 3, title: "잉여류와 라그랑주 정리", ready: true },
      { file: "ch04.html", num: 4, title: "준동형사상과 잉여군", ready: true },
      { file: "ch05.html", num: 5, title: "환과 체", ready: true },
      { file: "ch06.html", num: 6, title: "아이디얼과 잉여환", ready: true },
      { file: "ch07.html", num: 7, title: "다항식환과 체의 확대", ready: true },
      { file: "ch08.html", num: 8, title: "직접곱과 유한생성 아벨군", ready: true },
      { file: "ch09.html", num: 9, title: "군의 작용과 궤도", ready: true },
      { file: "ch10.html", num: 10, title: "실로우 정리와 유한군의 분류", ready: true },
      { file: "ch11.html", num: 11, title: "대수적 확대와 작도 불가능성", ready: true },
      { file: "ch12.html", num: 12, title: "갈루아 이론 Ⅰ — 분해체·정규·분리확대", ready: true },
      { file: "ch13.html", num: 13, title: "갈루아 이론 Ⅱ — 갈루아 대응과 5차방정식", ready: true }
    ]
  },
  {
    slug: "differential-geometry",
    title: "미분기하학",
    en: "Differential Geometry",
    book: "do Carmo, Differential Geometry of Curves and Surfaces",
    desc: "곡선과 곡면을 미적분으로 — 휘어진 공간의 기하학.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "정칙곡선과 프레네 공식", ready: true },
      { file: "ch02.html", num: 2, title: "곡선의 대역 이론", ready: true },
      { file: "ch03.html", num: 3, title: "정칙곡면과 제1기본형식", ready: true },
      { file: "ch04.html", num: 4, title: "가우스 사상과 제2기본형식", ready: true },
      { file: "ch05.html", num: 5, title: "내재기하와 빼어난 정리", ready: true },
      { file: "ch06.html", num: 6, title: "측지선과 가우스-보네 정리", ready: true }
    ]
  },
  {
    slug: "number-theory",
    title: "정수론",
    en: "Number Theory",
    book: "Burton, Elementary Number Theory (7th ed.)",
    desc: "정수의 성질 — 합동, 소수, 그리고 수의 아름다움.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "나눗셈 정리와 최대공약수", ready: true },
      { file: "ch02.html", num: 2, title: "소수와 산술의 기본정리", ready: true },
      { file: "ch03.html", num: 3, title: "합동과 중국인의 나머지 정리", ready: true },
      { file: "ch04.html", num: 4, title: "페르마·오일러·윌슨 정리", ready: true },
      { file: "ch05.html", num: 5, title: "수론적 함수와 뫼비우스 반전", ready: true },
      { file: "ch06.html", num: 6, title: "원시근과 지수", ready: true },
      { file: "ch07.html", num: 7, title: "이차잉여와 상호법칙", ready: true }
    ]
  },
  {
    slug: "topology",
    title: "위상수학",
    en: "Topology",
    book: "Munkres, Topology (2nd ed.)",
    desc: "연속을 가장 일반적으로 — 공간의 본질적 성질을 다루는 과목.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "위상공간", ready: true },
      { file: "ch02.html", num: 2, title: "연속함수와 곱공간", ready: true },
      { file: "ch03.html", num: 3, title: "연결성", ready: true },
      { file: "ch04.html", num: 4, title: "컴팩트성", ready: true },
      { file: "ch05.html", num: 5, title: "가산공리와 분리공리", ready: true },
      { file: "ch06.html", num: 6, title: "거리화와 완비성", ready: true },
      { file: "ch07.html", num: 7, title: "호모토피와 기본군", ready: true },
      { file: "ch08.html", num: 8, title: "피복공간과 응용", ready: true }
    ]
  },
  {
    slug: "complex-analysis",
    title: "복소해석학",
    en: "Complex Analysis",
    book: "Brown & Churchill, Complex Variables and Applications (9th ed.)",
    desc: "복소수 위의 미적분 — 실수에서는 보이지 않던 구조가 드러난다.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "복소수와 복소평면", ready: true },
      { file: "ch02.html", num: 2, title: "해석함수와 코시-리만 방정식", ready: true },
      { file: "ch03.html", num: 3, title: "초등함수 — 지수·로그·삼각", ready: true },
      { file: "ch04.html", num: 4, title: "복소적분과 코시-구르사 정리", ready: true },
      { file: "ch05.html", num: 5, title: "코시 적분공식과 리우빌 정리", ready: true },
      { file: "ch06.html", num: 6, title: "테일러 급수와 로랑 급수", ready: true },
      { file: "ch07.html", num: 7, title: "유수정리와 극점", ready: true },
      { file: "ch08.html", num: 8, title: "유수의 응용과 등각사상", ready: true }
    ]
  },
  {
    slug: "probability-statistics",
    title: "확률과 통계",
    en: "Probability & Statistics",
    book: "Hogg, McKean & Craig, Introduction to Mathematical Statistics (8th ed.)",
    desc: "불확실성의 수학 — 확률공간부터 추정과 검정까지.",
    status: "active",
    chapters: [
      { file: "ch01.html", num: 1, title: "확률공간과 조건부확률", ready: true },
      { file: "ch02.html", num: 2, title: "확률변수와 분포", ready: true },
      { file: "ch03.html", num: 3, title: "다변수 분포와 상관", ready: true },
      { file: "ch04.html", num: 4, title: "주요 분포족", ready: true },
      { file: "ch05.html", num: 5, title: "표본분포와 극한정리", ready: true },
      { file: "ch06.html", num: 6, title: "점추정 — 충분통계량과 최대가능도", ready: true },
      { file: "ch07.html", num: 7, title: "구간추정과 가설검정", ready: true }
    ]
  }
];
