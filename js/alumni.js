(function () {
  "use strict";

  const GROUPS = [
    { title: "PhD", degrees: ["PhD"] },
    { title: "M.Sc (Engg) / M.Tech (Research)", degrees: ["M.Sc (Engg)", "M.Tech (Research)"] },
    { title: "M.Tech / M.E.", degrees: ["M.Tech", "M.E."], wide: true }
  ];

  const ALUMNI = [
    // PhD
    ["Anshuman Dhuliya (IIT Bombay)", "", "PhD", 2026, "Nvidia"],
    ["Stanly Samuel", "http://stanlysamuel.com", "PhD", 2025, "Collins Aerospace"],
    ["Snigdha Athaiya", "", "PhD", 2020, "Siemens Research"],
    ["Girish M. Rama", "", "PhD", 2018, "Siemens Research"],
    ["K. Vasanta Lakshmi", "https://web.cs.dartmouth.edu/people/vasanta-lakshmi-kommineni", "PhD", 2018, "Dartmouth College"],
    ["M. Raveendra Kumar", "", "PhD", 2018, "TCS Innovation Labs"],
    ["Arnab De", "", "PhD", null, ""],
    ["Inzemamul Haq", "", "PhD", null, ""],
    ["K. R. Raghavendra", "", "PhD", null, ""],
    ["Madhu Gopinathan", "", "PhD", null, ""],
    ["P. Ezudheen", "", "PhD", null, ""],
    ["P. Habeeb", "", "PhD", null, ""],
    ["Raj Mohan M.", "", "PhD", null, ""],
    ["Sumanth Prabhu", "", "PhD", null, ""],
    ["Sumesh Divakaran", "", "PhD", null, ""],
    ["Suvam Mukherjee", "", "PhD", null, ""],

    // M.Sc (Engg) / M.Tech (Research)
    ["Kuchi Sai Teja", "", "M.Tech (Research)", 2025, "Fujitsu"],
    ["Geetam Chawla", "", "M.Tech (Research)", 2021, "Microsoft"],
    ["Himanshu Arora", "", "M.Sc (Engg)", 2018, "PhD student, Bar-Ilan University"],
    ["Pallavi Chugh", "", "M.Sc (Engg)", 2016, "Nolimit City"],
    ["Tejas Patil", "", "M.Sc (Engg)", 2015, "PayPal"],
    ["Aravind Acharya", "", "M.Sc (Engg)", 2014, "Nvidia"],
    ["Amogh Margoor", "", "M.Sc (Engg)", 2013, "Apple"],
    ["Deepak Bhardwaj", "", "M.Sc (Engg)", null, ""],
    ["Joy Chakraborty", "", "M.Sc (Engg)", null, ""],
    ["Nikita Chopra", "", "M.Sc (Engg)", null, ""],
    ["Pavithra Prabhakar", "", "M.Sc (Engg)", null, ""],
    ["Sampath Jayaram", "", "M.Sc (Engg)", null, ""],

    // M.Tech / M.E.
    ["Annu", "", "M.Tech", 2026, "Chevron"],
    ["Archie Gaur", "", "M.Tech", 2026, "Capital One"],
    ["Ikshita Pathak", "", "M.Tech", 2026, "Capital One"],
    ["Karishma Kuriya", "", "M.Tech", 2026, ""],
    ["Paul Khai Lun Hao Lhungdim", "", "M.Tech", 2026, ""],
    ["R. Sreechand", "", "M.Tech", 2025, "Wells Fargo"],
    ["Anurag Kumar", "", "M.Tech", 2024, ""],
    ["Rahul Singh", "", "M.Tech", 2024, "Qualcomm"],
    ["Rajanya Dasgupta", "", "M.Tech", 2024, "MathWorks"],
    ["Akash Mondal", "", "M.Tech", 2023, ""],
    ["Jayesh Malviya", "", "M.Tech", 2023, ""],
    ["Ashish Bokil", "", "M.Tech", 2022, ""],
    ["Ashish Kankal", "", "M.Tech", 2022, "Jovian"],
    ["Nilesh Kharat", "", "M.Tech", 2022, "Jupiter Money"],
    ["Navneet Aman", "", "M.Tech", 2021, ""],
    ["Abhishek Uppar", "", "M.Tech", 2019, "Pluribus Networks"],
    ["Shubham Waghmare", "", "M.Tech", 2019, "SAP Labs"],
    ["Parixit Prasad", "", "M.E.", 2015, "Nvidia"],
    ["Suvita Phulia", "", "M.E.", 2015, "Citrix R&D"],
    ["Dilesh Verma", "", "M.E.", 2014, "Amazon"],
    ["S. Narendran", "", "M.E.", 2013, "Groupon"],
    ["Gurpreet Kaur", "", "M.E.", 2012, "Microsoft"],
    ["Srimanta Singh", "", "M.E.", 2012, "Accolite"],
    ["Sachin P. Kale", "", "M.E.", 2011, "Nvidia"],
    ["Arshad Naveed", "", "M.E.", 2010, "School teacher"],
    ["Hari S. Gupta", "", "M.E.", 2010, "Co-founder and CTO, Cogmac Technologies"],
    ["K. M. Ravichandhran", "", "M.E.", 2010, "Apple"],
    ["Sudha Balodia", "", "M.E.", 2010, "Brocade"],
    ["Aastha Garg", "", "M.E.", null, ""],
    ["Anirudh Kushwah", "", "M.E.", null, ""],
    ["Deepak Lukose", "", "M.E.", null, ""],
    ["Deepak Vankadaru", "", "M.E.", null, ""],
    ["Rakesh Kumar", "", "M.E.", null, ""],
    ["Raveendra Holla", "", "M.E.", null, ""],
    ["Ravi Raja", "", "M.Tech", null, ""],
    ["Remish Minz", "", "M.E.", null, ""],
    ["Satadru Pan", "", "M.E.", null, ""],
    ["Subhasree M.", "", "M.E.", null, ""],
    ["Sumesh Divakaran", "", "M.E.", null, ""]
  ];

  function byYear(a, b) {
    const ya = a[3] || 0, yb = b[3] || 0;
    if (ya !== yb) return yb - ya;
    return a[0].localeCompare(b[0]);
  }

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  const box = document.getElementById("alumni");
  if (!box) return;

  GROUPS.forEach(function (g) {
    const people = ALUMNI.filter(function (p) { return g.degrees.indexOf(p[2]) !== -1; }).sort(byYear);
    if (!people.length) return;

    const div = el("div", g.wide ? "wide" : null);
    div.appendChild(el("h2", "sub", g.title));
    const ul = el("ul", g.wide ? "roster cols" : "roster");

    people.forEach(function (p) {
      const li = el("li");
      if (p[1]) {
        const a = el("a", null, p[0]);
        a.href = p[1];
        li.appendChild(a);
      } else {
        li.appendChild(document.createTextNode(p[0]));
      }
      const details = [p[2], p[3], p[4]].filter(Boolean).join(" · ");
      li.appendChild(el("small", null, details));
      ul.appendChild(li);
    });

    div.appendChild(ul);
    box.appendChild(div);
  });
})();
