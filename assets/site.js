/* ============================================================
 * 여백 — 공통 사이트 스크립트
 *
 * 하는 일:
 *   1. 공통 chrome 주입: 상단 헤더, 푸터
 *   2. toc.js 기반 자동 생성: 홈 과목 카드, 과목별 챕터 목록,
 *      챕터 페이지 사이드바 + 모바일 목차 + 이전/다음 네비
 *   3. terms.js 기반 용어 링크: href 채우기 + 단어장 카드 툴팁
 *   4. KaTeX 수식 렌더링 ($...$, $$...$$)
 *
 * 페이지 쪽 규약 (body 속성):
 *   data-page    = "home" | "subject" | "chapter" | "plain"
 *   data-subject = 과목 slug (subject/chapter 페이지)
 *   data-chapter = 챕터 파일명, 예: "ch01.html" (chapter 페이지)
 * ============================================================ */

(function () {
  "use strict";

  // 사이트 루트 절대 경로: 이 스크립트 src에서 "assets/site.js"를 떼어낸다.
  // 어떤 깊이의 페이지에서 로드해도 루트를 정확히 안다.
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

    /* ---------- 4. 용어 & 수식 ---------- */
    initTerms();
    renderMathIn(main || body);

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

    /* ================= 용어 툴팁 (단어장 카드) ================= */

    function initTerms() {
      var TERMS = window.MATH_TERMS || {};
      var links = document.querySelectorAll("a.term");
      if (!links.length) return;

      var card = null;          // 재사용하는 단일 툴팁 요소
      var hideTimer = null;
      var currentAnchor = null; // 현재 툴팁이 붙어 있는 앵커
      var touchMode = window.matchMedia("(hover: none)").matches;

      function ensureCard() {
        if (card) return card;
        card = el(
          '<div class="term-card hidden" id="term-card" role="tooltip">' +
          '<div class="term-card-title"></div>' +
          '<div class="term-card-body"></div>' +
          '<a class="term-card-go">정의 보기 →</a>' +
          "</div>"
        );
        card.addEventListener("mouseenter", cancelHide);
        card.addEventListener("mouseleave", scheduleHide);
        document.body.appendChild(card);
        return card;
      }

      function show(anchor, term) {
        cancelHide();
        ensureCard();
        if (currentAnchor && currentAnchor !== anchor) {
          currentAnchor.removeAttribute("aria-describedby");
        }
        currentAnchor = anchor;
        anchor.setAttribute("aria-describedby", "term-card");
        card.querySelector(".term-card-title").innerHTML =
          esc(term.ko) + '<span class="term-card-en">' + esc(term.en) + "</span>";
        card.querySelector(".term-card-body").textContent = term.short;
        card.querySelector(".term-card-go").href = ROOT + term.href;
        renderMathIn(card.querySelector(".term-card-body"));

        // 위치: 앵커 아래. 화면을 벗어나면 좌우 클램프, 아래 공간 부족 시 위로.
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

        if (touchMode) {
          // 터치: 첫 탭은 카드 열기, 카드가 열린 상태의 재탭은 링크 이동
          a.addEventListener("click", function (e) {
            if (currentAnchor !== a) {
              e.preventDefault();
              show(a, term);
            }
          });
        } else {
          a.addEventListener("mouseenter", function () { show(a, term); });
          a.addEventListener("mouseleave", scheduleHide);
          a.addEventListener("focus", function () { show(a, term); });
          a.addEventListener("blur", scheduleHide);
        }
      });

      // 바깥 탭/클릭으로 닫기 (터치 모드)
      document.addEventListener("click", function (e) {
        if (!card || card.classList.contains("hidden")) return;
        if (card.contains(e.target)) return;
        if (currentAnchor && currentAnchor.contains(e.target)) return;
        hide();
      });
      // ESC로 닫기
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") hide();
      });
    }
  });
})();
