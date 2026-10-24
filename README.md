# Programming Languages Lab, IISc Bangalore

Website of the Programming Languages Lab, Department of Computer Science and Automation, IISc Bangalore.

It is plain HTML and CSS with no build step. GitHub Pages serves `index.html` from the `main` branch.

## Files
- `index.html`: all content, one section per part of the page
- `style.css`: layout and colours
- `images/`: all images
  - `favicon.ico`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png`: tab and home-screen icons, made from the lab logo
  - `logo-mark.png`: the logo mark used in the header, footer and join banner
  - `logo.png`: full logo, used as the link-preview image
- `.nojekyll`: To tell GitHub Pages to serve the files as they are

## How to add entries
- **Students:** Edit the lists under `<!-- People -->`. Keep each list in order of joining. Tag the advisor with `<span class="dd">DD</span>` or `<span class="kvr">KVR</span>`, and put any co-advisor note in `<small>`.
- **News:** Add a new `<li>` at the top of the list under `<!-- News -->`.
- **Courses:** When a new offering starts, point the course title at the new page and move the old link into "Earlier offerings".
- **Joint papers:** Add new entries at the top of the list under `<!-- Joint papers -->`.

To preview locally, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
