# Maazeeb Coming Soon Page

A lightweight React + Vite build that mirrors the Maazeeb landing page palette and door hero art. Use it as a temporary placeholder while the main landing experience is under construction.

## Local development

```bash
yarn workspace coming-soon dev
```

## Production build

```bash
yarn workspace coming-soon build
```

The static output lives in `packages/coming-soon/dist` and can be deployed to any static host. The Vite `base` is preconfigured for GitHub Pages under `seerde/coming-soon-page`, so you can:

1. Initialise a new Git repository from `packages/coming-soon` and point it at `https://github.com/seerde/coming-soon-page.git`.
2. Run `yarn workspace coming-soon build`.
3. Push the contents of `dist/` to the `gh-pages` branch (or enable the Pages workflow) for instant hosting.

Only the "Maazeeb" badge, logo, and "Coming Soon" headline are rendered—no additional copy—keeping the message intentionally vague while staying on-brand.
