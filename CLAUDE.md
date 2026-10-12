# personal-portfolio

Personal portfolio site. Single developer (Cindy) plus specialized review subagents (`.claude/agents/`) and a copywriting skill (`.claude/skills/`).

## Stack

- **React 19** + **Vite** (JavaScript, not TypeScript — chosen for less ceremony on a small site).
- **Sass** with global, BEM-named classes (`.block__element--modifier`). Each component imports its own colocated `<Name>.scss`; shared styles live in `src/styles/`. No CSS Modules.
- **React Router** (`react-router`): `/` is the one-page home (anchor-linked sections), `/projects/:slug` is a page per agency project. Nav links use `/#section` so they work from any page.
- **Embla Carousel** (`embla-carousel-react` + `embla-carousel-class-names` plugin) powers the screenshot carousel on project pages.
- Deployed on **Vercel**: `vercel.json` rewrites every non-file URL to `index.html` so direct visits to `/projects/<slug>` work.
- Linting: `oxlint` (`npm run lint`).

## Structure

```
src/
	App.jsx                                             # shared frame (skip link, Header, <main>, Footer) + <Routes>
	components/                                         # a component gets its own folder (<Name>/<Name>.jsx + <Name>.scss) when it has styles
		pages/                                          # one component per route: HomePage (sections), ProjectPage/, NotFoundPage (any unknown URL)
		layout/                                         # site frame on every page: Header, Navigation, Footer
		sections/                                       # home page content, one per nav anchor: Hero, About, Skills, Projects…
		ui/                                             # small reusable pieces: SectionHeader, InspectTip, Carousel, Icon, ErrorBoundary, StatusMessage
	hooks/                                              # reusable custom hooks (e.g. useMobileMenu.js)
	content/                                            # copy.js (site text, a11y labels), projects.js (project data + project page text)
	styles/
		abstracts/      # _variables.scss, _mixins.scss — no CSS output, imported via @use
		base/           # _reset.scss, _base.scss, _typography.scss, _accessibility.scss — global element styles
		components/     # shared UI classes used across components (buttons, icon links)
		layouts/        # container and section wrappers
		main.scss       # @uses base/, components/, layouts/; imported once in main.jsx
public/                 # served as-is from the site root: images/projects/<project>/, documents/ (resume), favicons
```

Conventions:
- Colors, spacing, typography, and breakpoints are all Sass variables in `styles/abstracts/_variables.scss` — never hardcode a color/spacing value in a component's `.scss`, reference the variable (use `sass:color` functions for alpha variants).
- Colors have two layers: a palette (`$gray-900`, `$teal-400` …) and roles (`$color-text`, `$color-surface` …). Components use only `$color-*` roles; roles point at palette colors, never at other roles.
- Component styles `@use` the abstracts layer directly. Classes are global, so prefix every class with its BEM block name (e.g. `.site-navigation__link`) to avoid collisions.
- Import order in every file, with no blank lines between imports: React/external packages → content (`src/content/`) → hooks → components → the file's own `.scss` last. Within a group, `react` comes first, then sort alphabetically by path (so components group by folder: layout → pages → sections → ui → local `./` files). Names inside `{ }` are alphabetical too. Use file extensions (`.js`, `.jsx`) in relative imports.
- JSX attribute order: `key`/`ref` → `id` → `className` → other attributes → `aria-*` → event handlers (`onClick`, …). No blank lines inside a component's JSX.
- All user-facing text and project data lives in `src/content/` (`copy.js`, `projects.js`), not inline in JSX — this is what the `portfolio-copywriter` skill edits, and it should never need to touch component logic.
- Placeholder text in `src/content/` is wrapped in `[brackets]` — anything still bracketed is not real content yet.
- Icons: use `<Icon name="…" />` from `components/ui/Icon.jsx` (one list of icon shapes + a shared `<svg>` wrapper with `aria-hidden` and `currentColor`). Add new icons there, not as separate components.
- Shared looks are Sass mixins in `_mixins.scss` (e.g. `label-text`, `meta-text`, `dot-list`, `inline-dot-list`, `sidebar-rows`); reuse them before writing a new pattern.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — oxlint

## The agent team

Custom subagents in `.claude/agents/` — invoke by name or ask in plain language. All are read-only and report findings:
- **frontend-mentor** — senior React + Sass mentor: reviews components and stylesheets against the conventions above and explains how to level them up.
- **accessibility-expert** — WCAG 2.2 AA audit (semantics, ARIA, keyboard, contrast, forms, motion).
- **performance-seo-auditor** — Core Web Vitals, bundle size, images, fonts, meta tags, social previews, sitemap.

Skill in `.claude/skills/`:
- **portfolio-copywriter** — writes/edits copy (hero/about, project case studies, READMEs, microcopy, SEO titles/descriptions) in `src/content/copy.js` and `src/content/projects.js`. Does not touch components or styles.

Default workflow after building or changing a section: run `frontend-mentor` and `accessibility-expert` on it before considering it done. Run `performance-seo-auditor` before a deploy. Use `portfolio-copywriter` whenever `[bracketed]` placeholder content needs to become real copy.
