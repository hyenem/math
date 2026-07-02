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
      { file: "ch08.html", num: 8, title: "특수 함수", ready: true }
    ]
  },
  {
    slug: "calculus",
    title: "미적분학",
    en: "Calculus",
    book: "Spivak, Calculus (4th ed.)",
    desc: "증명으로 배우는 미적분 — 해석학으로 가는 가장 좋은 다리.",
    status: "planned",
    chapters: []
  },
  {
    slug: "linear-algebra",
    title: "선형대수학",
    en: "Linear Algebra",
    book: "Friedberg, Insel & Spence, Linear Algebra (5th ed.)",
    desc: "벡터공간과 선형사상 — 거의 모든 수학의 공용어.",
    status: "planned",
    chapters: []
  },
  {
    slug: "abstract-algebra",
    title: "현대대수학",
    en: "Abstract Algebra",
    book: "Fraleigh, A First Course in Abstract Algebra (7th ed.)",
    desc: "군, 환, 체 — 연산의 구조 그 자체를 연구하는 과목.",
    status: "planned",
    chapters: []
  },
  {
    slug: "differential-geometry",
    title: "미분기하학",
    en: "Differential Geometry",
    book: "do Carmo, Differential Geometry of Curves and Surfaces",
    desc: "곡선과 곡면을 미적분으로 — 휘어진 공간의 기하학.",
    status: "planned",
    chapters: []
  },
  {
    slug: "number-theory",
    title: "정수론",
    en: "Number Theory",
    book: "Burton, Elementary Number Theory (7th ed.)",
    desc: "정수의 성질 — 합동, 소수, 그리고 수의 아름다움.",
    status: "planned",
    chapters: []
  },
  {
    slug: "topology",
    title: "위상수학",
    en: "Topology",
    book: "Munkres, Topology (2nd ed.)",
    desc: "연속을 가장 일반적으로 — 공간의 본질적 성질을 다루는 과목.",
    status: "planned",
    chapters: []
  },
  {
    slug: "complex-analysis",
    title: "복소해석학",
    en: "Complex Analysis",
    book: "Brown & Churchill, Complex Variables and Applications (9th ed.)",
    desc: "복소수 위의 미적분 — 실수에서는 보이지 않던 구조가 드러난다.",
    status: "planned",
    chapters: []
  },
  {
    slug: "probability-statistics",
    title: "확률과 통계",
    en: "Probability & Statistics",
    book: "Hogg, McKean & Craig, Introduction to Mathematical Statistics (8th ed.)",
    desc: "불확실성의 수학 — 확률공간부터 추정과 검정까지.",
    status: "planned",
    chapters: []
  }
];
