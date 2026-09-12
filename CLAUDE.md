# personal-portfolio

Personal portfolio site. Single developer (Cindy) plus a set of specialized review/writing subagents (see `.claude/agents/`).

## Stack

- **React 19** + **Vite** (JavaScript, not TypeScript — chosen for less ceremony on a small site).
- **Sass** with **CSS Modules** per component (`Component.module.scss`), plus a shared `src/styles/` layer for tokens, reset, and typography.
- Single-page scrolling site (Hero, Projects, About, Contact as anchor-linked sections within one page) — no router.
- Linting: `oxlint` (`npm run lint`).

## Structure

```
src/
  components/<Name>/<Name>.jsx + <Name>.module.scss   # one folder per component, styles colocated
  content/                                            # copy.js, projects.js — all site text/data lives here
  styles/
    abstracts/   # _variables.scss, _mixins.scss — no CSS output, imported via @use
    base/        # _reset.scss, _typography.scss — global element styles
    main.scss    # forwards base/*, imported once in main.jsx
```

Conventions:
- Colors, spacing, typography, and breakpoints are all Sass variables in `styles/abstracts/_variables.scss` — never hardcode a color/spacing value in a component's `.module.scss`, reference the variable.
- Component styles `@use` the abstracts layer directly (no global class leakage; CSS Modules scope everything else).
- All user-facing text and project data lives in `src/content/` (`copy.js`, `projects.js`), not inline in JSX — this is what the `copywriter` agent edits, and it should never need to touch component logic.
- Placeholder text in `src/content/` is wrapped in `[brackets]` — anything still bracketed is not real content yet.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — oxlint

## The agent team

Custom subagents in `.claude/agents/` — invoke by name or ask in plain language:
- **accessibility-tester** — WCAG audit (semantics, ARIA, keyboard, contrast, forms, motion). Read-only, reports findings.
- **copywriter** — writes/edits `src/content/copy.js` and `src/content/projects.js`. Does not touch components or styles.
- **react-sass-reviewer** — reviews component structure and Sass architecture against the conventions above. Read-only, reports findings.
- **performance-seo-auditor** — bundle size, image optimization, meta tags, Core Web Vitals concerns. Read-only, reports findings.

Default workflow after building or changing a section: run `react-sass-reviewer` and `accessibility-tester` on it before considering it done. Run `performance-seo-auditor` before a deploy. Run `copywriter` whenever `[bracketed]` placeholder content needs to become real copy.
