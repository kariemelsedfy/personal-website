# karim elsedfy — personal website

Recruiter-facing portfolio, live at **[kariemelsedfy.github.io/personal-website](https://kariemelsedfy.github.io/personal-website/)**.

Full-stack & AI engineer · CS + Math @ Bowdoin '28 · SWE Intern @ Dropbox.

## Stack

- **Vite + React + TypeScript** — pure frontend, static build
- **Tailwind CSS** — dark design system (`#0a0a0f` base, indigo → violet → cyan accent gradient)
- **Framer Motion** — scroll reveals, staggered entrances, hover-tilt cards
- **three.js / @react-three/fiber** — mouse-reactive domain-warped fbm shader in the hero, with
  `prefers-reduced-motion` and mobile fallbacks to a static CSS gradient

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build
npm run preview   # serve the production build
```

All content lives in `src/data/` (profile, experience, projects, skills) — edit those files to
update the site; components render whatever's there.

## Deploy

Pushes to `main` build and deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`)
to GitHub Pages.
