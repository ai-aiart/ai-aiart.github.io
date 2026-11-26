/* AI-ART — page rendering. Content lives in data.js. */
(function () {
  "use strict";
  var D = window.AIART || {};

  var ICON = {
    paper: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3v5h5M8.5 13h7M8.5 16.5h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    arxiv: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5l5.5 5.5M13.5 13.5 19 19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 1 9.5l4 2.4V17c0 1.1 3.1 3 7 3s7-1.9 7-3v-5.1l2-1.2V16h2V9.5zm0 2.3 7.2 4.2L12 13.7 4.8 9.5z"/></svg>',
    bib: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4H6a1 1 0 0 0-1 1v5l-2 2 2 2v5a1 1 0 0 0 1 1h2M16 4h2a1 1 0 0 1 1 1v5l2 2-2 2v5a1 1 0 0 1-1 1h-2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1.5 7v8h3v-8zm1.5-4.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM10.5 10v8h3v-4.2c0-1.1.4-1.9 1.5-1.9s1.5.9 1.5 2V18h3v-5c0-2.4-1.3-3.2-3-3.2-1.3 0-2.1.6-2.5 1.2V10z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="currentColor" d="M8 10h1.6v7H8zM8.8 6.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM11.3 10h2.6c2.2 0 3.6 1.4 3.6 3.5S16.1 17 13.9 17h-2.6zm1.6 1.4v4.2h1c1.3 0 2-.8 2-2.1s-.7-2.1-2-2.1z"/></svg>',
    web: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  };

  ICON.github = ICON.code;

  var TYPE_LABEL = { journal: "Journal", conference: "Conference", chapter: "Book chapter", preprint: "Preprint", abstract: "Abstract" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }

  function authorsHTML(list) {
    return list.map(esc).join(", ");
  }

  function paperURL(p) {
    if (p.doi) return "https://doi.org/" + p.doi;
    if (p.url) return p.url;
    if (p.arxiv) return "https://arxiv.org/abs/" + p.arxiv;
    return null;
  }

  function bibtex(p) {
    var first = (p.authors[0] || "anon").split(" ").pop().replace(/[^A-Za-z]/g, "");
    var word = (p.title.match(/[A-Za-z]{4,}/) || ["paper"])[0].toLowerCase();
    var key = first.toLowerCase() + p.year + word;
    var kind = p.type === "journal" ? "article" : p.type === "preprint" ? "misc" : "inproceedings";
    var authors = p.authors.filter(function (a) { return a !== "et al."; }).join(" and ");
    if (p.authors.indexOf("et al.") > -1) authors += " and others";
    var f = [["title", "{" + p.title + "}"], ["author", authors], ["year", p.year]];
    if (kind === "article") f.push(["journal", p.venue]);
    else if (kind === "inproceedings") f.push(["booktitle", p.venue]);
    if (p.doi) f.push(["doi", p.doi]);
    if (p.arxiv) { f.push(["eprint", p.arxiv]); f.push(["archivePrefix", "arXiv"]); }
    return "@" + kind + "{" + key + ",\n" + f.map(function (x) { return "  " + x[0] + " = {" + x[1] + "}"; }).join(",\n") + "\n}";
  }

  function pubHTML(p, i, compact) {
    var links = [];
    var main = paperURL(p);
    if (p.doi) links.push('<a class="chip" href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">' + ICON.paper + "Paper</a>");
    else if (p.url) links.push('<a class="chip" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + ICON.paper + "Paper</a>");
    if (p.arxiv) links.push('<a class="chip" href="https://arxiv.org/abs/' + esc(p.arxiv) + '" target="_blank" rel="noopener">' + ICON.arxiv + "arXiv</a>");
    if (p.code) links.push('<a class="chip chip--solid" href="' + esc(p.code) + '" target="_blank" rel="noopener">' + ICON.code + "Code</a>");
    if (!compact) links.push('<button class="chip" type="button" data-bib="' + i + '" aria-expanded="false">' + ICON.bib + "BibTeX</button>");

    var title = main
      ? '<a href="' + esc(main) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>"
      : esc(p.title);

    return (
      '<li class="pub" data-type="' + esc(p.type) + '">' +
        '<div class="pub__meta"><span class="pub__year">' + esc(p.year) + '</span><span class="tag">' + esc(TYPE_LABEL[p.type] || p.type) + "</span></div>" +
        '<div class="pub__body">' +
          '<h3 class="pub__title">' + title + "</h3>" +
          '<p class="pub__authors">' + authorsHTML(p.authors) + "</p>" +
          '<p class="pub__venue">' + esc(p.venue) + "</p>" +
          (links.length ? '<div class="pub__links">' + links.join("") + "</div>" : "") +
          (compact ? "" : '<div class="bib" hidden><pre>' + esc(bibtex(p)) + '</pre><button class="bib__copy" type="button">Copy</button></div>') +
        "</div>" +
      "</li>"
    );
  }

  /* ---------- Home: selected publications + counters ---------- */
  function renderHome() {
    var el = $("#selected-pubs");
    if (!el) return;
    var pubs = D.publications || [];
    el.innerHTML = pubs.filter(function (p) { return p.selected; }).slice(0, 5)
      .map(function (p, i) { return pubHTML(p, i, true); }).join("");
    var n = $("#stat-pubs"); if (n) n.textContent = pubs.length;
    var c = $("#stat-code"); if (c) c.textContent = pubs.filter(function (p) { return p.code; }).length;
    var y = $("#stat-years");
    if (y && pubs.length) {
      var ys = pubs.map(function (p) { return p.year; });
      y.textContent = Math.min.apply(null, ys) + "–" + Math.max.apply(null, ys);
    }
  }

  /* ---------- Publications page ---------- */
  function renderPublications() {
    var root = $("#pub-list");
    if (!root) return;
    var pubs = D.publications || [];
    var state = { type: "all", q: "" };

    var counts = { all: pubs.length };
    pubs.forEach(function (p) { counts[p.type] = (counts[p.type] || 0) + 1; });
    var filterEl = $("#pub-filters");
    filterEl.innerHTML = ["all", "journal", "conference", "chapter", "preprint", "abstract"]
      .filter(function (t) { return counts[t]; })
      .map(function (t) {
        return '<button type="button" class="filter' + (t === "all" ? " is-active" : "") + '" data-type="' + t + '" aria-pressed="' + (t === "all") + '">' +
          (t === "all" ? "All" : TYPE_LABEL[t]) + " <span>" + counts[t] + "</span></button>";
      }).join("");

    function draw() {
      var q = state.q.toLowerCase();
      var shown = pubs.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) {
        var p = o.p;
        if (state.type !== "all" && p.type !== state.type) return false;
        if (!q) return true;
        return (p.title + " " + p.authors.join(" ") + " " + p.venue + " " + p.year).toLowerCase().indexOf(q) > -1;
      });
      var years = [];
      shown.forEach(function (o) { if (years.indexOf(o.p.year) < 0) years.push(o.p.year); });
      years.sort(function (a, b) { return b - a; });
      root.innerHTML = shown.length
        ? years.map(function (y) {
            return '<section class="year-group"><h2 class="year-group__label">' + y + '</h2><ol class="pubs">' +
              shown.filter(function (o) { return o.p.year === y; }).map(function (o) { return pubHTML(o.p, o.i, false); }).join("") +
              "</ol></section>";
          }).join("")
        : '<p class="empty">No publications match “' + esc(state.q) + "”.</p>";
      var count = $("#pub-count");
      if (count) count.textContent = shown.length + " of " + pubs.length;
    }

    filterEl.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-type]");
      if (!b) return;
      state.type = b.getAttribute("data-type");
      filterEl.querySelectorAll("button").forEach(function (x) {
        var on = x === b; x.classList.toggle("is-active", on); x.setAttribute("aria-pressed", on);
      });
      draw();
    });
    $("#pub-search").addEventListener("input", function (e) { state.q = e.target.value.trim(); draw(); });

    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-bib]");
      if (b) {
        var box = b.closest(".pub__body").querySelector(".bib");
        box.hidden = !box.hidden;
        b.setAttribute("aria-expanded", !box.hidden);
        return;
      }
      var c = e.target.closest(".bib__copy");
      if (c) {
        var txt = c.previousElementSibling.textContent;
        var done = function () { c.textContent = "Copied"; setTimeout(function () { c.textContent = "Copy"; }, 1400); };
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, function () {});
      }
    });
    draw();
  }

  /* ---------- Contact page ---------- */
  function renderPeople() {
    var el = $("#people");
    if (!el) return;
    el.innerHTML = (D.people || []).map(function (p) {
      var initials = p.name.split(" ").filter(Boolean).map(function (w) { return w[0]; });
      initials = (initials[0] + (initials.length > 1 ? initials[initials.length - 1] : "")).toUpperCase();
      var links = [];
      if (p.email) links.push('<a class="chip" href="mailto:' + esc(p.email) + '">' + ICON.mail + esc(p.email) + "</a>");
      var L = p.links || {};
      var names = { github: "GitHub", scholar: "Google Scholar", linkedin: "LinkedIn", orcid: "ORCID", web: "Website" };
      Object.keys(L).forEach(function (k) {
        if (L[k]) links.push('<a class="chip" href="' + esc(L[k]) + '" target="_blank" rel="noopener">' + (ICON[k] || ICON.web) + (names[k] || k) + "</a>");
      });
      var avatar = p.photo
        ? '<img class="person__photo" src="' + esc(p.photo) + '" alt="">'
        : '<div class="person__photo person__photo--mono" aria-hidden="true">' + esc(initials) + "</div>";
      return '<article class="person">' + avatar +
        '<div class="person__body"><h3>' + esc(p.name) + '</h3><p class="person__role">' + esc(p.role) + "</p>" +
        (p.bio ? '<p class="person__bio">' + esc(p.bio) + "</p>" : "") +
        '<div class="pub__links">' + links.join("") + "</div></div></article>";
    }).join("");
  }

  /* ---------- Projects page ---------- */
  function renderProjects() {
    var el = $("#projects");
    if (!el) return;
    var list = D.projects || [];
    if (!list.length) { $("#projects-empty").hidden = false; return; }
    el.innerHTML = list.map(function (p) {
      var L = p.links || {};
      var links = [];
      if (L.paper) links.push('<a class="chip" href="' + esc(L.paper) + '" target="_blank" rel="noopener">' + ICON.paper + "Paper</a>");
      if (L.code) links.push('<a class="chip chip--solid" href="' + esc(L.code) + '" target="_blank" rel="noopener">' + ICON.code + "Code</a>");
      return '<article class="project"><div class="project__head"><span class="tag">' + esc(p.status || "") + '</span><span class="project__years">' + esc(p.years || "") + "</span></div>" +
        "<h3>" + esc(p.title) + "</h3><p>" + esc(p.summary || "") + "</p>" +
        (p.tags ? '<p class="project__tags">' + p.tags.map(function (t) { return "#" + esc(t); }).join(" ") + "</p>" : "") +
        (links.length ? '<div class="pub__links">' + links.join("") + "</div>" : "") + "</article>";
    }).join("");
  }

  /* ---------- Shared: links, nav, year ---------- */
  function wireLinks() {
    var L = D.links || {};
    document.querySelectorAll("[data-link]").forEach(function (a) {
      var u = L[a.getAttribute("data-link")];
      if (u) a.href = u;
    });
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
    var toggle = $(".nav__toggle"), nav = $(".nav");
    if (toggle) toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireLinks(); renderHome(); renderPublications(); renderPeople(); renderProjects();
  });
})();
