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
});
