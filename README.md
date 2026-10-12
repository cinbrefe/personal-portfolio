# cindybrenes.dev

The portfolio of Cindy Brenes, a frontend developer. Built with React and Sass, with a focus on accessibility and a small, token-based design system.

**Live site:** https://www.cindybrenes.dev/

## Features

- One-page home with anchor-linked sections, plus a page for each agency project (`/projects/<slug>`)
- Screenshot carousel with arrow buttons, dot navigation and looping
- Mobile menu that closes on Escape, an outside click, or focus leaving it
- A not-found page for unknown URLs, and an error boundary so a crash never leaves a blank screen

## Accessibility

- Skip link, landmarks, and every section labelled by its own heading
- Focus moves to the page title after client-side navigation, and links to a section (`/#contact`) move focus to that section's heading
- Visible focus styles; decorative icons and shapes are hidden from screen readers
- Respects `prefers-reduced-motion`
- Descriptive alt text for every screenshot, and the carousel announces slide changes to screen readers
- Color contrast checked against WCAG AA for every text and control color (most pairs also pass AAA)
- Accessibility lint rules (`jsx-a11y`) catch issues like missing alt text

## Tech stack

React 19 · Vite · React Router · Sass · Embla Carousel · oxlint · Vercel

## Key decisions

- **JavaScript, not TypeScript.** Less ceremony for a small, single-developer site.
- **Global BEM classes instead of CSS Modules.** Each component imports its own `.scss` file, and every class starts with its block name (`.site-navigation__link`) to avoid collisions.
- **Two-layer design tokens.** Raw palette colors (`$gray-900`, `$teal-400`) feed purpose-named roles (`$color-text`, `$color-surface`). Components only use roles, so changing the theme means editing one file.
- **Content separate from code.** All text and project data lives in `src/content/`, so copy can change without touching components.
- **Client-side routing on a static host.** `vercel.json` sends every URL to `index.html`, so direct links like `/projects/target` work.
- **SEO for a client-rendered app.** A canonical link per page, a sitemap, and Open Graph tags for link previews.
- **Performance basics.** A variable WOFF2 font, lazy-loaded images, and fixed image dimensions so the page doesn't jump while images load.

## Project structure

```
src/
  components/
    layout/     Header, Navigation, Footer
    pages/      HomePage, ProjectPage, NotFoundPage
    sections/   Home page sections (Hero, About, Skills, Projects…)
    ui/         Reusable pieces (Carousel, Icon, SectionHeader, ErrorBoundary…)
  content/      copy.js and projects.js: all site text and project data
  hooks/        useMobileMenu, useFocusOnMount
  styles/       abstracts (tokens, mixins), base, components, layouts
```

## Getting started

Requires Node.js 22 or later.

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # lint with oxlint
```

## How I built it

I built this site with AI as a pair programmer. It gave me a starting boilerplate, reviewed my code and explained options, and I made the design and architecture decisions and built the features step by step.

I also set up a small team of custom Claude Code agents in [`.claude/`](.claude/) to review my work before it ships:
- **accessibility-expert** audits against WCAG 2.2 AA. It verified the contrast of every color pair, and caught that the sticky header could hide focused links when the nav wrapped to two rows, and that carousel slide changes were silent for screen readers.
- **frontend-mentor** reviews React and Sass code and explains how to improve it. It found a CSS cascade bug where a shared class silently overrode a component's padding, and suggested the `useFocusOnMount` hook, which I then wrote.
- **performance-seo-auditor** checks performance, meta tags and link previews. It flagged the missing Open Graph tags and sitemap before launch.
- **portfolio-copywriter** (a skill) helps me write and edit the site's copy.

## License

© Cindy Brenes. The code is here to read and learn from. The written content and project screenshots aren't licensed for reuse; the screenshots show client work and belong to their brands.
