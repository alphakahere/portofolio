# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Design system

**Read `docs/DESIGN_SYSTEM.md` before creating or modifying any UI.** It is the source of truth for colors, typography, spacing, section order, content rules (no invented testimonials/metrics, real portrait only) and the definition of done (both themes, both languages, responsive, accessible).

## Commands

- `npm run dev` — dev server at http://localhost:3000 (`/` redirects to `/fr`)
- `npm run build` — production build (also the main type-check, since there is no separate `tsc` script)
- `npm run lint` — ESLint via `next lint` (`next/core-web-vitals`)

There is no test suite. Don't run `npm run build` while a `next dev` server is running in the same folder: both write to `.next` and the dev server breaks.

## Architecture

Single-page personal portfolio (alphakahere.dev) on Next.js 14 App Router, TypeScript, Tailwind and `next-intl` v3. Deployed on Vercel.

### Routing and i18n

- Pages live under `src/app/[locale]/`. Locales `en` and `fr` (default `fr`) are defined once in `src/data/site.ts` and used by `src/middleware.ts`, `src/i18n.ts` and `generateStaticParams` in the layout.
- The layout and page call `unstable_setRequestLocale(locale)` for static rendering; keep this in any new `[locale]` route. Metadata is translated through `generateMetadata` (`meta.*` keys).
- `src/app/[locale]/page.tsx` stacks the homepage sections in the order required by the design system. Navbar and Footer are rendered by the layout.

### Content

- **Translated text** is in `messages/en.json` and `messages/fr.json`, which must have identical keys. Inline markup uses next-intl rich text (`t.rich`) with tags like `<em>`, `<b>`, `<accent>` and `<br></br>` (rendered with `lineBreak` from `SectionHeading`).
- **Non-translated data** is typed in `src/data/`: `site.ts` (URLs, email, nav items), `projects.ts` (slug, image, tech, link) and `testimonials.ts`. Components join the two by key, e.g. `t(\`items.${project.slug}.category\`)`.
- Projects with `image: null` render a neutral placeholder card. Cards only become links when `href` is set.
- `testimonials.ts` currently holds a **placeholder** testimonial that must be replaced with a real one before deploying.

### Components

- `components/layout/`: Navbar (sticky; desktop links plus `MobileMenu`), Footer.
- `components/sections/`: one component per homepage section.
- `components/ui/`: shared primitives. `Button.tsx` (`ButtonLink`, primary/secondary) is the only button style. Also `SectionHeading` (eyebrow + serif `h2`), `ThemeToggle`, `LanguageSwitcher`, `Wordmark`, `Arcs` (decorative circles).
- Everything is a server component except `ThemeToggle`, `MobileMenu` and `TestimonialCarousel`. Those receive translated strings as props, so no `NextIntlClientProvider` is needed.

### Theming and styling

- Colors are semantic tokens: CSS variables in `src/app/globals.css` (`:root` = light, `.dark` = dark) mapped to Tailwind colors in `tailwind.config.ts` (`background`, `foreground`, `surface`, `muted`, `border`, `primary`, `accent`, `success`). Never hardcode theme colors.
- Dark mode is class-based (`darkMode: "class"`). An inline script in the layout `<head>` applies the stored theme or the system preference before first paint; `ThemeToggle` flips the class and saves it to `localStorage`. To force dark tokens on one block, add `className="dark"` to it (the Testimonials band does this).
- Tailwind's `fontSize` and `borderRadius` scales are overridden to match the design system. Fonts come from `next/font`: Instrument Serif (`font-serif`, headings), Inter (`font-sans`, UI) and JetBrains Mono (`font-mono`).
- Shared component classes in `globals.css`: `.page-container` (max width plus padding), `.section` (vertical rhythm), `.eyebrow` (dot + uppercase label) and `.link-arrow`.
- Remote images are allowed only from `picsum.photos` and `i.imgur.com` (`next.config.js`); local images are in `public/images/`. Path alias `@/*` → `src/*`.
