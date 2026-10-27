# Programming Languages Lab, IISc Bangalore

Website of the Programming Languages Lab, Department of Computer Science and Automation, IISc Bangalore.

It has plain HTML, CSS and JavaScript with no build step. GitHub Pages serves `index.html` from the `main` branch.

Most content (people, courses, publications, alumni) and the shared header and footer live in small JavaScript data files under `js/`. To add or change an entry, you usually edit one line in one file; the HTML pages do not need to change.

## Files

```
index.html            Home page: hero, News, Research, Courses, Recent publications, People, Joining the lab
html/
  courses.html        All courses with past offerings
  publications.html   All publications, by year or by topic
  people.html         Faculty and current members
  alumni.html         Former students
css/
  base.css            Shared by every page: colours, fonts, header, headings, name and paper lists, footer
  home.css            Home page only: hero, news, research, joining
  courses.css         Course cards (home page and courses page)
  people.css          Faculty cards and member lists (home page and people page)
  publications.css    Year / topic tabs
  alumni.css          Alumni layout
js/
  layout.js           Header (nav) and footer for every page
  people.js           Faculty and current members
  courses.js          Courses and their offerings
  pubs.js             Publications
  alumni.js           Former students
images/
  favicon.ico, favicon-32.png, favicon-48.png, apple-touch-icon.png   Tab and home-screen icons
  logo-mark.png       Lab logo mark, used in the header and footer
  logo.png            Full logo, used as the link-preview image
  csa-logo.png, iisc-logo.png   Logos in the footer
.nojekyll             Tells GitHub Pages to serve the files as they are
```

## How to add or change content

### News
In `index.html`, add a new `<li>` at the top of the list under `<!-- News -->`:
```html
<li><time datetime="2026-11">Nov 2026</time><p>What happened, with <a href="...">links</a> if needed.</p></li>
```

### Current students and staff (`js/people.js`)
Add a line to the right group in `MEMBERS`. Keep each list in order of joining.
```js
["Name", "https://personal-site.example", "Optional note, e.g. co-advisor"],
```
Groups are `phd`, `mtr` (M.Tech Research), `mtech` and `ra` (Research Assistant). Faculty are in `FACULTY` at the top of the same file.

### When a student graduates
Remove them from `js/people.js` and add them to `ALUMNI` in `js/alumni.js`:
```js
["Name", "https://personal-site.example", "PhD", 2026, "Current affiliation"],
```
The degree must be one of `PhD`, `M.Sc (Engg)`, `M.Tech (Research)`, `M.Tech` or `M.E.`. The order doesn't matter: each group is sorted by graduation year, newest first. Use `null` if the year is unknown; those entries go last.

### Courses (`js/courses.js`)
When a new offering starts:
1. Point the course's `url` at the new course page (the card links there).
2. Add the new year at the top of its `offerings`: `["2027", "https://..."]`.

If an old offering has no page any more, keep the year with an empty link, `["2019", ""]`. It is still shown, but not as a link.

To add a new course, copy an existing `{ ... }` block and edit it. The home page shows only the code and title; the courses page also shows the description and offerings.

### Publications (`js/pubs.js`)
Add a line to `PUBS`, at the top of its year:
```js
[2026, "VER", "Paper Title", "Author One, Author Two", "Venue 2026", "https://link-to-pdf-or-doi"],
```
The second field is the topic, used by the "By topic" tab. It must be one of the keys in `TOPICS` (`SA`, `VER`, `SYN`, `LOG`, `SEC`, `SE`, `OTH`). The home page shows the 10 most recent automatically. Links ending in `.pdf` show as "PDF", others as "Link".

### Header, nav and footer (`js/layout.js`)
Edit the nav links in `NAV`, and the address and footer links in `FOOTER`. The change applies to every page.

## Adding a new page

1. Copy an existing page in `html/` (for example `courses.html`) and rename it.
2. Change the `<title>`, the `data-page` value on `<body>`, and the content inside `<main>`.
3. Keep `data-root="../"` on `<body>`, and keep the `site-header`, `layout.js` and `site-footer` lines as they are.
4. To show it in the nav, add a line to `NAV` in `js/layout.js`, using the same key as `data-page`:
   ```js
   ["newpage", "New page", root + "html/newpage.html"],
   ```
5. If the page needs its own styles, add `css/newpage.css` and link it after `base.css`.

Pages in `html/` refer to other folders with `../` (for example `../css/base.css`, `../images/...`). `index.html` uses them without `../`.

## Previewing

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

The lists, header and footer are filled in by JavaScript, so a blank section usually means a typo in one of the `js/` data files (often a missing comma or quote). The browser's developer console (F12) shows the line with the error.
