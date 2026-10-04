# personal-portfolio

Personal portfolio site. Single developer (Cindy) plus a set of specialized review/writing subagents (see `.claude/agents/`).

## Stack

- **React 19** + **Vite** (JavaScript, not TypeScript — chosen for less ceremony on a small site).
- **Sass** with global, BEM-named classes (`.block__element--modifier`). Each component imports its own colocated `<Name>.scss`; shared styles live in `src/styles/`. No CSS Modules.
- Single-page scrolling site (Hero, Projects, About, Contact as anchor-linked sections within one page) — no router.
- Linting: `oxlint` (`npm run lint`).

## Structure

```
src/
	components/                                         # a component gets its own folder (<Name>/<Name>.jsx + <Name>.scss) when it has styles
		layout/                                         # site frame on every page: Header, Navigation, Footer
		sections/                                       # page content, one per nav anchor: Hero, About, Skills, Projects…
		ui/                                             # small reusable pieces used inside sections: InspectTip, icons
	hooks/                                              # reusable custom hooks (e.g. useMobileMenu.js)
	content/                                            # copy.js, projects.js — all site text/data lives here
	styles/
		abstracts/      # _variables.scss, _mixins.scss — no CSS output, imported via @use
		base/           # _reset.scss, _base.scss, _typography.scss, _accessibility.scss — global element styles
		components/     # shared UI classes used across components (buttons, icon links)
		layouts/        # container, main, section wrappers
		main.scss       # @uses base/, components/, layouts/; imported once in main.jsx
```

Conventions:
- Colors, spacing, typography, and breakpoints are all Sass variables in `styles/abstracts/_variables.scss` — never hardcode a color/spacing value in a component's `.scss`, reference the variable (use `sass:color` functions for alpha variants).
- Colors have two layers: a palette (`$gray-900`, `$teal-400` …) and roles (`$color-text`, `$color-surface` …). Components use only `$color-*` roles; roles point at palette colors, never at other roles.
- Component styles `@use` the abstracts layer directly. Classes are global, so prefix every class with its BEM block name (e.g. `.site-navigation__link`) to avoid collisions.
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
