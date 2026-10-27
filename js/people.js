(function () {
  "use strict";

  const FACULTY = [
    {
      initials: "DD",
      name: "Deepak D'Souza",
      role: "Professor",
      url: "https://www.csa.iisc.ac.in/~deepakd/",
      area: "Program verification, static analysis, model checking, and models and logics for real-time systems."
    },
    {
      initials: "KVR",
      name: "Komondoor V. Raghavan",
      role: "Associate Professor",
      url: "https://www.csa.iisc.ac.in/~raghavan/",
      area: "Distributed systems, Programming languages, program analysis and software engineering, with a focus on tools that help programmers understand, verify and transform programs."
    }
  ];

  const MEMBERS = [
    { key: "phd", title: "PhD", people: [
      ["Sajiv Kumar J. S.", "", ""],
      ["Raseek C", "https://gecskp.ac.in/faculty/20/raseek-c", ""],
      ["Alvin George", "", ""],
      ["Abhishek Uppar", "", ""],
      ["Alan Jojo", "https://alanjojo.gitlab.io/", ""]
    ]},
    { key: "mtr", title: "M.Tech (Research)", people: [
      ["Vikrant Singh Jaryal", "", ""]
    ]},
    { key: "mtech", title: "M.Tech", people: [
      ["Rahul Jose", "", ""],
      ["Melchizedek T.P.", "https://melchizedektp.github.io/", ""],
      ["Namratha T.", "", ""],
      ["Ancita Lewis", "", ""],
      ["Vivek Kumar", "", ""],
      ["Aditya Dhodade", "", ""],
      ["Adityakumar P", "", ""]
    ]},
    { key: "ra", title: "Research Assistant", people: [
      ["Amrit Mahendra Joseph", "", ""]
    ]}
  ];

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  const fac = document.getElementById("faculty");
  if (fac) {
    FACULTY.forEach(function (f) {
      const a = el("a", "person");
      a.href = f.url;
      const av = el("span", "avatar", f.initials);
      av.setAttribute("aria-hidden", "true");
      a.appendChild(av);
      const d = el("div");
      d.appendChild(el("h4", null, f.name));
      d.appendChild(el("p", "role", f.role));
      d.appendChild(el("p", null, f.area));
      a.appendChild(d);
      fac.appendChild(a);
    });
  }

  const mem = document.getElementById("members");
  if (mem) {
    MEMBERS.forEach(function (g) {
      const box = el("div", "group g-" + g.key);
      box.appendChild(el("h3", "sub", g.title));
      const ul = el("ul", "roster");
      g.people.forEach(function (p) {
        const li = el("li");
        if (p[1]) {
          const a = el("a", null, p[0]);
          a.href = p[1];
          li.appendChild(a);
        } else {
          li.appendChild(document.createTextNode(p[0]));
        }
        if (p[2]) li.appendChild(el("small", null, p[2]));
        ul.appendChild(li);
      });
      box.appendChild(ul);
      mem.appendChild(box);
    });
  }
})();
