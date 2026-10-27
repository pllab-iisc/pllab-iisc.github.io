(function () {
  "use strict";

  const DD = "https://www.csa.iisc.ac.in/~deepakd/papers/";
  const KR = "https://www.csa.iisc.ac.in/~raghavan/ReadingMaterial/";
  const KH = "https://www.csa.iisc.ac.in/~raghavan/";

  const TOPICS = {
    SA:  "Static analysis",
    VER: "Formal verification",
    SYN: "Synthesis",
    LOG: "Logics and automata",
    SEC: "Security and information flow",
    SE:  "Software engineering",
    OTH: "Other"
  };

  const PUBS = [
    [2026, "VER", "Verification Modulo Tested Library Contracts", "Abhishek Uppar, Omar Muhammad, Sumanth Prabhu, Deepak D'Souza, P. Madhusudan, Adithya Murali", "PLDI 2026", ""],

    [2024, "VER", "Interval Image Abstraction for Verification of Camera-Based Autonomous Systems", "P. Habeeb, Deepak D'Souza, Kamal Lodaya, Pavithra Prabhakar", "EMSOFT 2024 (IEEE TCAD 43(11))", ""],
    [2024, "SE",  "Kondo: Efficient Provenance-Driven Data Debloating", "Aniket Modi, Rohan Tikmany, Tanu Malik, Raghavan Komondoor, Ashish Gehani, Deepak D'Souza", "ICDE 2024", KR + "icde2024.pdf"],
    [2024, "SYN", "Weakest Precondition Inference for Non-Deterministic Linear Array Programs", "Sumanth Prabhu, Deepak D'Souza, Supratik Chakraborty, Venkatesh R, Grigory Fedyukovich", "TACAS 2024", ""],
    [2024, "SYN", "Maximal Quantified Precondition Synthesis for Linear Array Loops", "Sumanth Prabhu, Grigory Fedyukovich, Deepak D'Souza", "ESOP 2024", ""],

    [2023, "SYN", "Symbolic Fixpoint Algorithms for Logical LTL Games", "Stanly Samuel, Deepak D'Souza, Raghavan Komondoor", "ASE 2023", KR + "ase2023.pdf"],
    [2023, "SYN", "Controller Synthesis for Reactive Systems with Communication Delay by Formula Translation", "Sajiv Kumar J. S., Raghavan Komondoor", "ATVA 2023", KR + "atva2023.pdf"],
    [2023, "VER", "Data-Driven Learning of Strong Conjunctive Invariants", "Arkesh Thakkar, Deepak D'Souza", "FMCAD 2023", ""],
    [2023, "VER", "Verification of Camera-Based Autonomous Systems", "P. Habeeb, Nabarun Deka, Deepak D'Souza, Kamal Lodaya, Pavithra Prabhakar", "IEEE TCAD, 2023", "https://doi.org/10.1109/TCAD.2023.3240131"],
    [2023, "SE",  "Multi-Layer Observability for Fault Localization in Microservices Based Systems", "Rupashree Rangaiyengar, Raghavan Komondoor, Raveendra Kumar Medicherla", "SANER 2023, Tool Demonstrations", KR + "saner2023.pdf"],

    [2022, "SA",  "Static Executes-Before Analysis for Event Driven Programs", "Rekha Pai, Abhishek Uppar, Akshatha Shenoy, Pranshul Kushwaha, Deepak D'Souza", "ESEC/FSE 2022", DD + "executes-before-fse-2022.pdf"],
    [2022, "SA",  "Static Race Detection for Periodic Programs", "Varsha P. Suresh, Rekha Pai, Sujit Kumar Chakrabarti, Deepak D'Souza, Meenakshi D'Souza", "ESOP 2022", ""],
    [2022, "VER", "Verification of ORM-based Controllers by Summary Inference", "Geetam Chawla, Navneet Aman, Raghavan Komondoor, Ashish Bokil, Nilesh Kharat", "ICSE 2022", KR + "icse2022.pdf"],
    [2022, "SE",  "Handling Memory Pointers in Communication between Microservices", "Vini Kanvar, Srikanth Tamilselvam, Raghavan Komondoor", "ICWS 2022", KR + "icws2022.pdf"],

    [2021, "LOG", "On the Expressiveness of TPTL in the Pointwise and Continuous Semantics", "Raveendra Holla, Nabarun Deka, Deepak D'Souza", "FSTTCS 2021", "https://doi.org/10.4230/LIPIcs.FSTTCS.2021.45"],
    [2021, "SYN", "GenSys: A Scalable Fixed-point Engine for Maximal Controller Synthesis over Infinite State Spaces", "Stanly Samuel, Deepak D'Souza, Raghavan Komondoor", "ESEC/FSE 2021, Demonstrations", KR + "fse2021-tool.pdf"],
    [2021, "SYN", "Specification Synthesis with Constrained Horn Clauses", "Sumanth Prabhu, Grigory Fedyukovich, Kumar Madhukar, Deepak D'Souza", "PLDI 2021 (Distinguished Paper Award)", ""],
    [2021, "SA",  "Static Analysis for Detecting High-Level Races in RTOS Kernels", "Rekha Pai, Abhishek Singh, Deepak D'Souza, Meenakshi D'Souza, Prathibha Prakash", "Formal Methods in System Design 58(1–2), 2021", ""],
    [2021, "SA",  "Data Flow Analysis of Asynchronous Systems using Infinite Abstract Domains", "Snigdha Athaiya, Raghavan Komondoor, K. Narayan Kumar", "ESOP 2021", KR + "esop2021.pdf"],

    [2020, "SA",  "Static Race Detection for RTOS Applications", "Rishi Tulsyan, Rekha Pai, Deepak D'Souza", "FSTTCS 2020", "https://drops.dagstuhl.de/opus/volltexte/2020/13298/pdf/LIPIcs-FSTTCS-2020-57.pdf"],
    [2020, "VER", "Verification of a Generative Separation Kernel", "Inzemamul Haque, Deepak D'Souza, P. Habeeb, Arnab Kundu, Ganesh Babu", "ATVA 2020", ""],
    [2020, "VER", "Verifying Band Convergence for Sampled Control Systems", "P. Ezudheen, Zahra Afzal, Pavithra Prabhakar, Deepak D'Souza, Meenakshi D'Souza", "NFM 2020", ""],
    [2020, "SE",  "Fitness Guided Vulnerability Detection with Greybox Fuzzing", "Raveendra Kumar Medicherla, Raghavan Komondoor, Abhik Roychoudhury", "SBST 2020", KR + "sbst20.pdf"],

    [2019, "SA",  "Static Analysis for Detecting High-Level Races in RTOS Kernels", "Abhishek Singh, Rekha Pai, Deepak D'Souza, Meenakshi D'Souza", "FM 2019", ""],
    [2019, "SA",  "Data Races and Static Analysis for Interrupt-Driven Kernels", "Nikita Chopra, Rekha Pai, Deepak D'Souza", "ESOP 2019", ""],
    [2019, "SA",  "Checking Observational Purity of Procedures", "Himanshu Arora, Raghavan Komondoor, G. Ramalingam", "FASE 2019", KR + "fase19.pdf"],

    [2018, "SYN", "Horn-ICE Learning for Synthesizing Invariants and Contracts", "P. Ezudheen, Daniel Neider, Deepak D'Souza, Pranav Garg, P. Madhusudan", "OOPSLA 2018", ""],
    [2018, "SA",  "Refinement in Object-Sensitivity Points-To Analysis via Slicing", "Girish M. Rama, Raghavan Komondoor, Himanshu Sharma", "OOPSLA 2018", KR + "oopsla18.pdf"],

    [2017, "SA",  "A Thread-Local Semantics and its Efficient Sequential Abstractions for Race-Free Programs", "Suvam Mukherjee, Oded Padon, Sharon Shoham, Deepak D'Souza, Noam Rinetzky", "SAS 2017", ""],
    [2017, "SA",  "Detecting All High-Level Dataraces in an RTOS Kernel", "Suvam Mukherjee, S. Arun Kumar, Deepak D'Souza", "VMCAI 2017", ""],
    [2017, "SE",  "Detecting Full Initialization Points of Objects to Support Code Refactorings", "Girish M. Rama, Raghavan Komondoor", "APSEC 2017", KR + "apsec2017-paper.pdf"],
    [2017, "SE",  "Testing and Analysis of Web Applications using Page Models", "Snigdha Athaiya, Raghavan Komondoor", "ISSTA 2017", KR + "issta2017-paper.pdf"],

    [2016, "SE",  "An Optimization Approach for Matching Textual Domain Models with Existing Code", "Tejas Patil, Raghavan Komondoor, Deepak D'Souza, Indrajit Bhattacharya", "ICSME 2016", KR + "icsme2016.pdf"],
    [2016, "SEC", "Model-Checking Trace-Based Information Flow Properties for Infinite-State Systems", "Deepak D'Souza, K. R. Raghavendra", "Journal of Computer Security 24(5), 2016", ""],

    [2015, "VER", "Refinement-Based Verification of the FreeRTOS Scheduler in VCC", "Sumesh Divakaran, Deepak D'Souza, Anirudh Kushwah, Prahladavaradan Sampath, Nigamanth Sridhar, Jim Woodcock", "ICFEM 2015", ""],
    [2015, "VER", "Using Formal Reasoning on a Model of Tasks for FreeRTOS", "Shu Cheng, Jim Woodcock, Deepak D'Souza", "Formal Aspects of Computing 27(1), 2015", "http://link.springer.com/article/10.1007/s00165-014-0308-9"],
    [2015, "SA",  "Program Specialization and Verification using File Format Specifications", "Raveendra Kumar Medicherla, Raghavan Komondoor, S. Narendran", "ICSME 2015", KR + "icsme2015.pdf"],
    [2015, "SA",  "Two Techniques to Improve the Precision of a Demand-Driven Null-Dereference Verification Approach", "Amogh Margoor, Raghavan Komondoor", "Science of Computer Programming 98, 2015", KR + "scp-2014.pdf"],
    [2015, "SA",  "Precision vs. Scalability: Context Sensitive Analysis with Prefix Approximation", "Raveendra Kumar Medicherla, Raghavan Komondoor", "SANER 2015", KR + "wcre15.pdf"],

    [2014, "VER", "A Multi-Core Version of FreeRTOS Verified for Datarace and Deadlock Freedom", "Prakash Chandrasekaran, Shibu Kumar K. B., Remish L. Minz, Deepak D'Souza, Lomesh Meshram", "MEMOCODE 2014", DD + "memcode-2014.pdf"],
    [2014, "VER", "Efficient Refinement Checking in VCC", "Sumesh Divakaran, Deepak D'Souza, Nigamanth Sridhar", "VSTTE 2014", DD + "vstte-2014.pdf"],
    [2014, "SE",  "A Dynamic Analysis to Support Object-Sharing Code Refactorings", "Girish M. Rama, Raghavan Komondoor", "ASE 2014", KR + "ase2014.pdf"],
    [2014, "VER", "Checking Liveness Properties of Presburger Counter Systems using Reachability Analysis", "K. Vasanta Lakshmi, Aravind Acharya, Raghavan Komondoor", "FM 2014", KR + "fm2014.pdf"],

    [2013, "SE",  "Using Relationships for Matching Textual Domain Models with Existing Code", "Raghavan Komondoor, Indrajit Bhattacharya, Deepak D'Souza, Sachin Kale", "WCRE 2013", KR + "wcre13.pdf"],
    [2013, "SA",  "Precise Slicing in Imperative Programs via Term-Rewriting and Abstract Interpretation", "Raghavan Komondoor", "SAS 2013", KR + "sas13.final.pdf"],
    [2013, "LOG", "Conflict-Tolerant Specifications for Hybrid Systems", "Deepak D'Souza, Madhu Gopinathan, S. Ramesh, Prahladavaradan Sampath", "Journal of the IISc 93(3), 2013", DD + "iisc.pdf"],

    [2012, "LOG", "A Compositional Hierarchical Monitoring Automaton Construction for LTL", "Deepak D'Souza, Raj Mohan M.", "ICTAC 2012", DD + "ictac.pdf"],
    [2012, "LOG", "Temporal Logics of Repeating Values", "Stéphane Demri, Deepak D'Souza, Régis Gascon", "Journal of Logic and Computation 22(5), 2012", "http://logcom.oxfordjournals.org/content/22/5/1059.full.pdf+html"],
    [2012, "SEC", "Model-Checking Bisimulation-Based Information Flow Properties for Infinite State Systems", "Deepak D'Souza, K. R. Raghavendra", "ESORICS 2012", DD + "bisim.pdf"],
    [2012, "SA",  "Scalable Flow-Sensitive Pointer Analysis for Java with Strong Updates", "Arnab De, Deepak D'Souza", "ECOOP 2012", DD + "fspa.pdf"],
    [2012, "SE",  "Identifying Services from Legacy Batch Applications", "Raghavan Komondoor, V. Krishna Nandivada, Saurabh Sinha, John Field", "ISEC 2012", KH + "isec12-services.pdf"],
    [2012, "SA",  "Packet Flow Analysis in IP Networks using Data-Flow Analysis", "Raghavan Komondoor, K. Vasanta Lakshmi, Deva Seetharam, Sudha Balodia", "ISEC 2012", KH + "isec12-IP.pdf"],

    [2011, "SA",  "Dataflow Analysis for Datarace-Free Programs", "Arnab De, Deepak D'Souza, Rupesh Nasre", "ESOP 2011", DD + "dfadrf.pdf"],
    [2011, "SEC", "Model-Checking Trace-Based Information Flow Properties", "Deepak D'Souza, Raveendra Holla, K. R. Raghavendra, Barbara Sprick", "Journal of Computer Security 19(1), 2011", ""],
    [2011, "SA",  "Null Dereference Verification via Over-Approximated Weakest Pre-conditions Analysis", "Ravichandhran Madhavan, Raghavan Komondoor", "OOPSLA 2011", KR + "oopsla168-madhavan-corrected.pdf"],

    [2010, "SE",  "A Case Study in Matching Service Descriptions to Implementations in an Existing System", "Hari S. Gupta, Deepak D'Souza, Raghavan Komondoor, Girish M. Rama", "ICSM 2010", KR + "GuptaCaseStudy-CameraReady.pdf"],
    [2010, "VER", "Analysing Message Sequence Graph Specifications", "Joy Chakraborty, Deepak D'Souza, K. Narayan Kumar", "ISoLA 2010", DD + "msg-isola-lncs6415.pdf"],
    [2010, "VER", "WOMM: A Weak Operational Memory Model", "Arnab De, Abhik Roychoudhury, Deepak D'Souza", "ISoLA 2010", DD + "isola-lncsa6415.pdf"],
    [2010, "LOG", "Conflict-Tolerant Real-Time Specifications in Metric Temporal Logic", "Sumesh Divakaran, Deepak D'Souza, Raj Mohan M.", "TIME 2010", DD + "ct-mitl-tr.pdf"],
    [2010, "LOG", "Conflict-Tolerant Specifications in Temporal Logic", "Sumesh Divakaran, Deepak D'Souza, Raj Mohan M.", "ISEC 2010", DD + "isec.pdf"],

    [2009, "SYN", "Supervisory Control for Real-Time Systems Based on Conflict-Tolerant Controllers", "Deepak D'Souza, Madhu Gopinathan, S. Ramesh, Prahladavaradan Sampath", "IEEE CASE 2009", DD + "case.pdf"],
    [2009, "LOG", "Automata and Logics for Finitely Varying Functions", "Fabrice Chevalier, Deepak D'Souza, Raj Mohan M., Pavithra Prabhakar", "Annals of Pure and Applied Logic 161(3), 2009", "http://dx.doi.org/10.1016/j.apal.2009.07.007"],

    [2008, "SEC", "On the Decidability of Model-Checking Information Flow Properties", "Deepak D'Souza, Raveendra Holla, Janardhan Kulkarni, Raghavendra K. Ramesh, Barbara Sprick", "ICISS 2008", DD + "iciss.pdf"],
    [2008, "LOG", "Conflict-Tolerant Real-Time Features", "Deepak D'Souza, Madhu Gopinathan, S. Ramesh, Prahladavaradan Sampath", "QEST 2008", DD + "ConflictToleranceRT.pdf"],
    [2008, "LOG", "Eliminating Past Operators in Metric Temporal Logic", "Deepak D'Souza, Raj Mohan M., Pavithra Prabhakar", "Perspectives in Concurrency, Universities Press, 2008", ""],
    [2008, "VER", "Java Memory Model Aware Software Validation", "Arnab De, Abhik Roychoudhury, Deepak D'Souza", "PASTE 2008", DD + "opmm.pdf"],
    [2008, "VER", "Conflict-Tolerant Features", "Deepak D'Souza, Madhu Gopinathan", "CAV 2008", DD + "conflict-tolerance.pdf"],

    [2007, "LOG", "Counter-Free Input-Determined Timed Automata", "Fabrice Chevalier, Deepak D'Souza, Pavithra Prabhakar", "FORMATS 2007", DD + "cfcida.ps"],
    [2007, "LOG", "A Decidable Temporal Logic of Repeating Values", "Stéphane Demri, Deepak D'Souza, Régis Gascon", "LFCS 2007", DD + "TR-ddg-lfcs07.pdf"],
    [2007, "LOG", "On the Expressiveness of MTL in the Pointwise and Continuous Semantics", "Deepak D'Souza, Pavithra Prabhakar", "STTT 9(1), 2007", DD + "mtl.ps"],
    [2007, "SE",  "Recovering Data Models via Guarded Dependences", "Raghavan Komondoor, G. Ramalingam", "WCRE 2007", KH + "wcre07-data.pdf"],
    [2007, "SE",  "Parametric Process Model Inference", "Saurabh Sinha, G. Ramalingam, Raghavan Komondoor", "WCRE 2007", KH + "wcre07-process.pdf"],

    [2006, "LOG", "On Continuous Timed Automata with Input-Determined Guards", "Fabrice Chevalier, Deepak D'Souza, Pavithra Prabhakar", "FSTTCS 2006", DD + "fsttcs06.ps"],
    [2006, "SEC", "Checking Unwinding Conditions for Finite State Systems", "Deepak D'Souza, K. R. Raghavendra", "VERIFY 2006", DD + "verify06.pdf"],
    [2006, "LOG", "On the Expressiveness of MTL with Past Operators", "Deepak D'Souza, Pavithra Prabhakar", "FORMATS 2006", DD + "formats06.ps"],
    [2006, "SE",  "Computing Complete Test Graphs for Hierarchical Systems", "Deepak D'Souza, Madhu Gopinathan", "IEEE SEFM 2006", DD + "TestGraph.ps"],
    [2006, "SEC", "A Unification-Based Decision Procedure for Cryptographic Protocol Analysis", "Deepak Bhardwaj, Deepak D'Souza", "WITS 2006", DD + "wits2006.ps"],
    [2006, "SE",  "Semantics-Based Reverse Engineering of Object-Oriented Data Models", "G. Ramalingam, Raghavan Komondoor, John Field, Saurabh Sinha", "ICSE 2006", KH + "icse06.pdf"],
    [2006, "SE",  "Using Logical Data Models for Understanding and Transforming Legacy Business Applications", "S. Chandra, J. de Vries, J. Field, H. Hess, M. Kalidasan, K. V. Raghavan, F. Nieuwerth, G. Ramalingam, J. Xue", "IBM Systems Journal 45(3), 2006", ""],

    [2005, "LOG", "Eventual Timed Automata", "Deepak D'Souza, M. Raj Mohan", "FSTTCS 2005", DD + "eta.ps"],
    [2005, "SEC", "An Automata-Based Approach to Verifying Information Flow Properties", "Deepak D'Souza, K. R. Raghavendra, Barbara Sprick", "ARSPA 2005", DD + "ARSPA05-DSouzaRaghavendraSprick.ps"],
    [2005, "LOG", "Fault Diagnosis using Timed Automata", "Patricia Bouyer, Fabrice Chevalier, Deepak D'Souza", "FoSSaCS 2005", DD + "fossacs05-075.ps"],
    [2005, "SA",  "Dependent Types for Program Understanding", "Raghavan Komondoor, G. Ramalingam, Satish Chandra, John Field", "TACAS 2005", KH + "tacas05.pdf"],

    [2004, "LOG", "On Timed Automata with Input-Determined Guards", "Deepak D'Souza, Nicolas Tabareau", "FORMATS–FTRTFT 2004", DD + "idta.ps"],

    [2003, "SYN", "Timed Control with Partial Observability", "Patricia Bouyer, Deepak D'Souza, P. Madhusudan, Antoine Petit", "CAV 2003", DD + "cav129.ps"],
    [2003, "VER", "Checking Consistency of SDL+MSC Specifications", "Deepak D'Souza, Madhavan Mukund", "SPIN 2003", DD + "spin.ps"],
    [2003, "LOG", "A Logical Characterisation of Event Clock Automata", "Deepak D'Souza", "International Journal of Foundations of Computer Science 14(4), 2003", DD + "eca.ps"],
    [2003, "SE",  "Effective, Automatic Procedure Extraction", "Raghavan Komondoor, Susan Horwitz", "IWPC 2003", KH + "iwpc03-paper.pdf"],

    [2002, "LOG", "An Automata-Theoretic Approach to Constraint LTL", "Stéphane Demri, Deepak D'Souza", "FSTTCS 2002; journal version in Information and Computation 205(3), 2007", DD + "cltl.ps"],
    [2002, "SYN", "Timed Control Synthesis for External Specifications", "Deepak D'Souza, P. Madhusudan", "STACS 2002", DD + "control.html"],
    [2002, "LOG", "Product Interval Automata", "Deepak D'Souza, P. S. Thiagarajan", "Sādhanā 27(2), 2002", DD + "sadhana.ps"],

    [2001, "SA",  "Using Slicing to Identify Duplication in Source Code", "Raghavan Komondoor, Susan Horwitz", "SAS 2001", KH + "sas01.pdf"],
    [2001, "SA",  "Tool Demonstration: Finding Duplicated Code using Program Dependences", "Raghavan Komondoor, Susan Horwitz", "ESOP 2001", KH + "esop01-demo.pdf"],

    [2000, "LOG", "A Logical Characterisation of Event Recording Automata", "Deepak D'Souza", "FTRTFT 2000", DD + "era.html"],
    [2000, "SE",  "Semantics-Preserving Procedure Extraction", "Raghavan Komondoor, Susan Horwitz", "POPL 2000", KH + "popl00.pdf"],

    [1999, "LOG", "Product Interval Automata: A Subclass of Timed Automata", "Deepak D'Souza, P. S. Thiagarajan", "FSTTCS 1999", DD + "fst19.html"],
    [1999, "OTH", "Update Propagation Protocols for Replicated Databases", "Yuri Breitbart, Raghavan Komondoor, Rajeev Rastogi, S. Seshadri, Avi Silberschatz", "SIGMOD 1999", ""],

    [1997, "VER", "On-the-fly Verification for Product-LTL", "Deepak D'Souza, P. Madhusudan", "National Seminar on Theoretical Computer Science, 1997", DD + "pltl.html"]
  ];

  const sorted = PUBS.slice().sort(function (a, b) { return b[0] - a[0]; });

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function item(p, showYear) {
    const [year, , title, authors, venue, url] = p;
    const li = el("li");
    li.appendChild(el("span", "year", showYear ? String(year) : ""));
    const body = el("div");
    body.appendChild(el("cite", null, title));
    body.appendChild(el("span", "authors", authors));
    const v = el("span", "venue", venue);
    if (url) {
      const a = el("a", null, /\.pdf$/i.test(url) ? "PDF" : "Link");
      a.href = url;
      v.appendChild(a);
    }
    body.appendChild(v);
    li.appendChild(body);
    return li;
  }

  function fillByYear(list, pubs) {
    let last = null;
    pubs.forEach(function (p) {
      list.appendChild(item(p, p[0] !== last));
      last = p[0];
    });
  }

  const recent = document.getElementById("recent-pubs");
  if (recent) {
    const n = parseInt(recent.dataset.limit, 10) || 10;
    fillByYear(recent, sorted.slice(0, n));
  }

  const byYear = document.getElementById("by-year");
  if (byYear) fillByYear(byYear, sorted);

  const byTopic = document.getElementById("by-topic");
  if (byTopic) {
    Object.keys(TOPICS).forEach(function (key) {
      const group = sorted.filter(function (p) { return p[1] === key; });
      if (!group.length) return;
      byTopic.appendChild(el("h2", "sub", TOPICS[key] + " (" + group.length + ")"));
      const ol = el("ol", "papers");
      group.forEach(function (p) { ol.appendChild(item(p, true)); });
      byTopic.appendChild(ol);
    });
  }

  const tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  if (tabs.length) {
    const select = function (tab, focus) {
      tabs.forEach(function (t) {
        const on = t === tab;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
      history.replaceState(null, "", tab.id === "tab-topic" ? "#topic" : location.pathname);
    };
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t, false); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          const step = e.key === "ArrowRight" ? 1 : -1;
          select(tabs[(i + step + tabs.length) % tabs.length], true);
          e.preventDefault();
        }
      });
    });
    if (location.hash === "#topic") select(document.getElementById("tab-topic"), false);
  }
})();
