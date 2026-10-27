(function () {
  "use strict";

  const body = document.body;
  const root = body.dataset.root || "";
  const page = body.dataset.page || "";
  const onHome = page === "home";
  const home = onHome ? "" : root + "index.html";

  const NAV = [
    ["research",     "Research",     home + "#research"],
    ["courses",      "Courses",      root + "html/courses.html"],
    ["publications", "Publications", root + "html/publications.html"],
    ["people",       "People",       home + "#people"]
  ];

  const nav = NAV.map(function (n) {
    const current = n[0] === page ? ' aria-current="page"' : "";
    return '<a href="' + n[2] + '"' + current + ">" + n[1] + "</a>";
  }).join("\n      ");

  const HEADER =
    '<div class="wrap topbar-inner">' +
    '  <a class="brand" href="' + (onHome ? "#top" : home) + '">' +
    '    <img src="' + root + 'images/logo-mark.png" alt="" width="34" height="34">' +
    '    <span class="brand-name">PL Lab</span><span class="brand-inst">IISc</span>' +
    "  </a>" +
    '  <nav aria-label="Sections">' + nav + "</nav>" +
    "</div>";

  const FOOTER =
    '<div class="wrap footer-inner">' +
    '  <div class="footer-brand">' +
    '    <img src="' + root + 'images/logo-mark.png" alt="" width="44" height="44">' +
    "    <address>" +
    "      Programming Languages Lab<br>" +
    "      Department of Computer Science and Automation<br>" +
    "      Indian Institute of Science, Bengaluru 560 012" +
    "    </address>" +
    "  </div>" +
    '  <div class="footer-links">' +
    '    <a href="https://www.csa.iisc.ac.in/"><img src="' + root + 'images/csa-logo.png" alt="" height="40">CSA</a>' +
    '    <a href="https://iisc.ac.in/"><img src="' + root + 'images/iisc-logo.png" alt="" height="40">IISc</a>'
    "  </div>" +
    "</div>";

  const header = document.getElementById("site-header");
  if (header) header.innerHTML = HEADER;

  function fillFooter() {
    const footer = document.getElementById("site-footer");
    if (footer) footer.innerHTML = FOOTER;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fillFooter);
  } else {
    fillFooter();
  }
})();
