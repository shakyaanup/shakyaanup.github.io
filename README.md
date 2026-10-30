# Personal Website

Static portfolio site built with **HTML5**, **Tailwind CSS v4** and **vanilla JavaScript**.

## Getting started

```bash
npm install
npm run dev     # watch Tailwind + live server at http://localhost:5500
npm run build   # minified production CSS
```

## Structure

```
├── index.html          # main page
├── assets/
│   ├── css/style.css   # compiled Tailwind output (generated — don't edit)
│   ├── js/main.js      # site scripts
│   ├── images/         # photos, project screenshots
│   ├── icons/          # svg icons, favicon
│   ├── fonts/          # self-hosted fonts (optional)
│   └── docs/           # resume / CV PDF
└── src/css/input.css   # Tailwind source: theme tokens & custom styles
```

## Deployment

Hosted on GitHub Pages from the repository root. Run `npm run build` and commit `assets/css/style.css` before pushing.
