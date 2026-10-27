(function () {
  "use strict";

  const COURSES = [
    {
      code: "E0 227",
      title: "Program Analysis and Verification",
      url: "https://www.csa.iisc.ac.in/~deepakd/pav-2026/",
      desc: "The foundations of reasoning about programs: semantics, abstract interpretation and data-flow analysis, and program verification.",
      offerings: [
        ["2026", "https://www.csa.iisc.ac.in/~deepakd/pav-2026/"],
        ["2025", "https://www.csa.iisc.ac.in/~raghavan/pav2025/"],
        ["2024", "https://www.csa.iisc.ac.in/~raghavan/pav2024/"],
        ["2023", "https://www.csa.iisc.ac.in/~raghavan/pav2023/"],
        ["2022", "https://www.csa.iisc.ac.in/~raghavan/pav2022/"],
        ["2021", ""],
        ["2019", ""],
        ["2018", ""],
        ["2017", ""]
      ]
    },
    {
      code: "E0 211",
      title: "Compilers and Runtime Systems for Modern Languages",
      url: "http://www.csa.iisc.ac.in/~raghavan/cml2026/",
      desc: "CML",
      offerings: [
        ["2026", "https://www.csa.iisc.ac.in/~raghavan/cml2026/"]
      ]
    },
    {
      code: "E0 272",
      title: "Formal Methods in Software Engineering",
      url: "https://www.csa.iisc.ac.in/~deepakd/fmse-2026/",
      desc: "Using formal specification, modelling and verification tools in the design and construction of software systems.",
      offerings: [
        ["2026", "https://www.csa.iisc.ac.in/~deepakd/fmse-2026/"],
        ["2024", "https://www.csa.iisc.ac.in/~deepakd/fmse-2024/"],
        ["2022", "https://www.csa.iisc.ac.in/~deepakd/fmse-2022/"],
        ["2020", "https://www.csa.iisc.ac.in/~deepakd/fmse-2020/"],
        ["2018", "https://www.csa.iisc.ac.in/~deepakd/fmse-2018/"]
      ]
    },
    {
      code: "E0 222",
      title: "Automata Theory and Computability",
      url: "http://www.csa.iisc.ac.in/~deepakd/atc-2026/",
      desc: "Automata Theory and Computability",
      offerings: [
        ["2026", "http://www.csa.iisc.ac.in/~deepakd/atc-2026/"],
        ["2025", "http://www.csa.iisc.ac.in/~deepakd/atc-2025/"],
        ["2024", "http://www.csa.iisc.ac.in/~deepakd/atc-2024/"],
        ["2021", "http://www.csa.iisc.ac.in/~deepakd/atc-2021/"],
        ["2019", "http://www.csa.iisc.ac.in/~deepakd/atc-2019/"],
        ["2018", "http://www.csa.iisc.ac.in/~deepakd/atc-2018/"]
      ]
    },
    {
      code: "E0 209",
      title: "Principles of Distributed Systems",
      url: "http://www.csa.iisc.ac.in/~raghavan/pods2025/",
      desc: "Principles of Distributed Systems",
      offerings: [
        ["2025", "http://www.csa.iisc.ac.in/~raghavan/pods2025/"],
        ["2022", "http://www.csa.iisc.ac.in/~raghavan/pods2022/"]
      ]
    },
    {
      code: "E0 205",
      title: "Mathematical Logic and Theorem Proving",
      url: "http://www.csa.iisc.ac.in/~deepakd/logic-2025/",
      desc: "Mathematical Logic and Theorem Proving",
      offerings: [
        ["2025", "http://www.csa.iisc.ac.in/~deepakd/logic-2025/"],
        ["2023", "http://www.csa.iisc.ac.in/~deepakd/logic-2023/"],
        ["2021", "http://www.csa.iisc.ac.in/~deepakd/logic-2021/"]
      ]
    },
    {
      code: "E0 327",
      title: "Topics in Program Analysis",
      url: "http://www.csa.iisc.ac.in/~deepakd/topics-pav-2021/",
      desc: "Topics in Program Analysis",
      offerings: [
        ["2021", "http://www.csa.iisc.ac.in/~deepakd/topics-pav-2021/"],
        ["2016", "http://www.csa.iisc.ac.in/~deepakd/tpa-2016/"]
      ]
    }
  ];

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  const box = document.getElementById("course-list");
  if (!box) return;
  const compact = box.hasAttribute("data-compact");

  COURSES.forEach(function (c) {
    const art = el("article", "course");
    art.appendChild(el("p", "code", c.code));
    const h = el("h3");
    const a = el("a", null, c.title);
    a.href = c.url;
    h.appendChild(a);
    art.appendChild(h);
    if (!compact) {
      art.appendChild(el("p", null, c.desc));
      const past = el("p", "past", "Offerings: ");
        c.offerings.forEach(function (o) {
        let item;
        if (o[1]) {
          item = el("a", null, o[0]);
          item.href = o[1];
        } else {
          item = el("span", null, o[0]);
        }
        past.appendChild(item);
        past.appendChild(document.createTextNode(" "));
      });
      art.appendChild(past);
    }
    box.appendChild(art);
  });
})();
