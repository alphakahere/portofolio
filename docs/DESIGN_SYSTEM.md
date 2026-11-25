# AlphaKahere — Design System

> Version 1.0  
> Project: `alphakahere.dev`  
> Brand: AlphaKahere  
> Design direction: Minimalist Editorial & Modern Technology  
> Audience: Clients, recruiters, companies and technology partners.

---

## 1. Project Identity

### Brand positioning

AlphaKahere is the personal professional brand of Alpha Amadou Diallo, a Fullstack Developer and Technical Lead.

The portfolio must communicate three things:

1. The ability to design and build digital products.
2. Strong software engineering and technical leadership capabilities.
3. The ability to transform business challenges into reliable digital solutions.

### Brand statement

**Building digital products that solve real problems.**

Supporting message:

> From ideas to production, I help turn complex challenges into reliable digital experiences.

### Professional title

`Fullstack Developer & Technical Lead`

### Brand personality

- Professional
- Minimalist
- Thoughtful
- Technical
- Confident
- Approachable
- International

### Design philosophy

Less noise. More substance.

The interface should prioritize content, typography, readability and real project work over decorative effects.

---

## 2. Visual Direction

### Design style

Minimalist editorial design combined with subtle technological elements.

Visual references:

- Editorial magazine layouts
- Modern personal portfolios
- Premium digital product websites
- Contemporary typography-driven interfaces

### Core principles

1. Generous whitespace.
2. Strong typographic hierarchy.
3. Clear visual rhythm.
4. Subtle borders instead of excessive shadows.
5. Real project screenshots instead of generic illustrations.
6. Restrained use of accent colors.
7. Consistent spacing and alignment.
8. Responsive layouts designed for mobile and desktop.

Avoid:

- Excessive gradients.
- Excessive glassmorphism.
- Overly rounded cards.
- Unnecessary animations.
- Generic developer illustrations.
- Excessive technology badges.
- Decorative elements that compete with content.

---

## 3. Color System

The website supports two complete themes: Light and Dark.

Use semantic CSS variables. Never hardcode theme-specific colors directly into components.

### Light Theme

| Token | Value | Usage |
|---|---|---|
| `--background` | `#F7F7F4` | Main background |
| `--foreground` | `#171816` | Primary text |
| `--surface` | `#FFFFFF` | Cards and panels |
| `--surface-secondary` | `#E8E9E5` | Secondary surfaces |
| `--muted` | `#777A75` | Secondary text |
| `--border` | `#E2E3DE` | Borders and dividers |
| `--primary` | `#315CDB` | Primary actions |
| `--primary-hover` | `#244BC1` | Primary hover |
| `--primary-foreground` | `#FFFFFF` | Text on primary |
| `--accent` | `#315CDB` | Highlights and links |
| `--success` | `#299D66` | Availability status |

### Dark Theme

| Token | Value | Usage |
|---|---|---|
| `--background` | `#111311` | Main background |
| `--foreground` | `#F3F3EF` | Primary text |
| `--surface` | `#191C19` | Cards and panels |
| `--surface-secondary` | `#20231F` | Secondary surfaces |
| `--muted` | `#A1A59E` | Secondary text |
| `--border` | `#2C302B` | Borders and dividers |
| `--primary` | `#91A8FF` | Primary actions |
| `--primary-hover` | `#A8B9FF` | Primary hover |
| `--primary-foreground` | `#111311` | Text on primary |
| `--accent` | `#91A8FF` | Highlights and links |
| `--success` | `#55C58B` | Availability status |

### Color usage rules

- Blue is the primary accent color.
- Use blue selectively for links, buttons, highlights and active states.
- Main text must maintain sufficient contrast.
- Muted text must remain readable.
- Borders should be subtle.
- Avoid introducing additional accent colors without a clear functional reason.

---

## 4. Typography

Use two main font families and one optional monospace font.

### Primary typography

**Instrument Serif**

Usage:
- Hero headings.
- Section titles.
- Editorial statements.
- Large project titles.
- Important quotations.

### Secondary typography

**Inter**

Usage:
- Navigation.
- Paragraphs.
- Buttons.
- Labels.
- Cards.
- Forms.
- Interface elements.

### Monospace typography

**JetBrains Mono**

Usage:
- Technical labels.
- Code snippets.
- Technology metadata.
- Small technical annotations.

### Typography scale

| Token | Size | Usage |
|---|---|---|
| `text-xs` | 12px | Labels and metadata |
| `text-sm` | 14px | Secondary text |
| `text-base` | 16px | Body text |
| `text-lg` | 18px | Introductory paragraphs |
| `text-xl` | 20px | Small headings |
| `text-2xl` | 28px | Section headings |
| `text-3xl` | 36px | Large section titles |
| `text-4xl` | 48px | Hero headings |
| `text-5xl` | 64px | Large desktop hero |

Use fluid typography with `clamp()` where appropriate.

### Typography rules

- Use Instrument Serif for expressive headings.
- Use Inter for readability and interface consistency.
- Avoid too many font weights.
- Maintain comfortable line heights.
- Limit paragraph width for readability.
- Use italic serif text selectively for editorial emphasis.

---

## 5. Layout and Spacing

### Main container

- Maximum width: `1440px`.
- Desktop content width: `1200px` to `1320px`.
- Center content horizontally.
- Use consistent horizontal padding.

### Spacing scale

Use a consistent 4px-based spacing system.

| Token | Value |
|---|---|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |

### Section spacing

- Desktop: 96px to 128px vertical spacing.
- Tablet: 72px to 88px.
- Mobile: 56px to 72px.

### Grid

- Desktop: 12-column grid.
- Tablet: 8-column grid.
- Mobile: 4-column grid.
- Use CSS Grid for project layouts.
- Use Flexbox for navigation and simple alignments.

---

## 6. Border Radius and Shadows

### Border radius

| Token | Value |
|---|---|
| `radius-sm` | 4px |
| `radius-md` | 8px |
| `radius-lg` | 12px |
| `radius-xl` | 16px |
| `radius-full` | 9999px |

Use small to medium radii by default.

Buttons may use pill-shaped styling only when consistent with the design.

### Shadows

Use shadows sparingly.

The interface should rely primarily on surface contrast and subtle borders.

Avoid large, dark shadows, especially in dark mode.

---

## 7. Iconography

Use Lucide icons.

Guidelines:

- Consistent stroke width.
- Prefer 16px, 18px, 20px and 24px sizes.
- Icons must have a functional purpose.
- Do not mix icon libraries.
- Avoid decorative icon overload.

---

## 8. Navigation

### Desktop navigation

The desktop header contains:

- AlphaKahere logo/wordmark.
- About.
- Projects.
- Experience.
- Insights.
- Contact.
- Language selector: FR / EN.
- Theme selector: Light / Dark.

### Mobile navigation

- Compact header.
- Wordmark on the left.
- Language and theme controls.
- Accessible menu button.
- Mobile navigation panel.

### Navigation behavior

- Sticky navigation is optional.
- Use subtle background transitions.
- Clearly indicate the active page.
- All interactive elements must be keyboard accessible.

---

## 9. Hero Section

The Hero is the most important section of the homepage.

### Layout

Editorial typographic layout.

Desktop:
- Main headline on the left.
- Portrait on the right.
- Subtle abstract circular lines behind the portrait.
- Large whitespace.
- Clear primary and secondary actions.

Mobile:
- Headline first.
- Supporting paragraph.
- CTA buttons.
- Availability/location information.
- Portrait below the introductory content.

### Content

Eyebrow:

`FULLSTACK DEVELOPER · TECHNICAL LEAD`

Main headline:

**I build digital products that solve real problems.**

Supporting text:

`From ideas to production, I help turn complex challenges into reliable digital experiences.`

Primary CTA:

`Explore my work`

Secondary CTA:

`Let's talk`

Location:

`Based in West Africa · Working worldwide`

### Hero rules

- Never let the portrait compete with the headline.
- Keep the heading readable at all viewport sizes.
- Use the blue accent selectively in the headline.
- The portrait must be an authentic professional photo supplied by the owner.
- Never use AI-generated portraits as a replacement for the owner's actual identity.

---

## 10. Homepage Sections

The homepage must follow this order.

### 01. Header

Brand, navigation, language and theme selectors.

### 02. Hero

Professional positioning, headline, portrait and CTAs.

### 03. Selected Work

Display three primary projects:

- Wekomkom
- VisitGuinea
- ENDAM 360

Each project card should contain:

- Project image.
- Project name.
- Short description.
- Category.
- Relevant technologies.
- Link to the detailed case study.

Use real screenshots whenever possible.

### 04. Expertise

Display five main areas:

1. Fullstack Development
2. Mobile Development
3. AI Integration
4. Software Architecture
5. Technical Leadership

Do not present skills as an excessively long list of technology logos.

Focus on capabilities and the problems they solve.

### 05. About

Introduce Alpha Amadou Diallo.

Include:

- Professional background.
- Engineering philosophy.
- Approach to problem solving.
- Personal portrait.
- Link to the About page.

### 06. Testimonials

Display authentic testimonials from collaborators, clients or managers.

Each testimonial may include:

- Quote.
- Person's name.
- Role.
- Organization.
- Profile image, when authorized.

Never fabricate testimonials.

### 07. Insights

Display selected articles and technical reflections.

Prioritize:

- Software engineering.
- AI integration.
- Product development.
- Technical architecture.
- Lessons learned from real projects.

### 08. Contact CTA

Headline:

**Have something meaningful to build?**

Supporting text:

`Let's discuss your project, your team or a potential collaboration.`

CTA:

`Get in touch`

### 09. Footer

Include:

- Brand wordmark.
- Navigation links.
- LinkedIn.
- GitHub.
- Email.
- Copyright.

---

## 11. Project Cards

Project cards must feel editorial and visual.

### Structure

1. Image or screenshot.
2. Project title.
3. Short project description.
4. Project category.
5. Technology metadata.
6. View case study link.

### Behavior

- Subtle hover transition.
- Image scale must remain restrained.
- Clear clickable area.
- Visible focus state.
- Consistent aspect ratio.

Avoid excessive card decorations.

---

## 12. Case Study Pages

Every project must have a dedicated page.

Recommended structure:

1. Project introduction.
2. Project context.
3. Business problem.
4. Objectives.
5. My role and responsibilities.
6. Challenges.
7. Technical approach.
8. Architecture and technologies.
9. Key features.
10. Results and outcomes.
11. Screenshots.
12. Lessons learned.
13. Related projects.

Important:

Clearly distinguish personal contributions from team contributions.

Never invent metrics, business results or technical achievements.

Only publish information that is authorized for public presentation.

---

## 13. Buttons and Interactions

### Primary button

- Background: primary color.
- Foreground: primary foreground.
- Clear label.
- Subtle hover state.
- Visible focus ring.

### Secondary button

- Transparent background.
- Border.
- Foreground text.
- Subtle hover background.

### Links

- Use the accent color when appropriate.
- Underline on hover or use a subtle directional arrow.
- Always maintain sufficient contrast.

### Animation

Use restrained transitions.

Recommended duration:
- Hover: 150ms.
- UI transitions: 200ms.
- Section reveal: 300ms to 500ms.

Respect `prefers-reduced-motion`.

Do not introduce animations that interfere with reading or navigation.

---

## 14. Responsive Design

The site must be mobile-first.

Suggested breakpoints:

| Breakpoint | Width |
|---|---|
| Mobile | 0–639px |
| Small tablet | 640–767px |
| Tablet | 768–1023px |
| Desktop | 1024–1279px |
| Large desktop | 1280px+ |

### Mobile rules

- Single-column content.
- Readable typography.
- Full-width or naturally sized CTAs.
- Simplified navigation.
- No horizontal overflow.
- Optimized images.
- Comfortable touch targets.
- Preserve the editorial character of desktop.

Never simply shrink the desktop layout.

---

## 15. Light and Dark Theme Behavior

Both themes must be first-class design experiences.

Requirements:

- Theme toggle accessible from the header.
- Persist the selected theme.
- Respect system preference on first visit.
- Avoid flashes during initial rendering.
- Maintain accessible contrast in both themes.
- Ensure images, borders, buttons and hover states are adapted.
- Test every page in both themes.

Use semantic design tokens rather than duplicated component styles.

---

## 16. Accessibility

Accessibility is a requirement, not an optional enhancement.

Requirements:

- Semantic HTML.
- Correct heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Accessible labels for controls.
- Alternative text for meaningful images.
- Sufficient text contrast.
- Reduced-motion support.
- Correct form validation messages.
- Avoid communicating information through color alone.

Target WCAG 2.2 AA where applicable.

---

## 17. Content and Language

The website supports:

- French (`fr`)
- English (`en`)

Requirements:

- Every important page must have both language versions.
- Use natural translations rather than literal word-for-word translations.
- Preserve the same visual hierarchy in both languages.
- Translate metadata and SEO descriptions.
- Provide language-aware navigation.
- Use consistent URL structures.

Suggested routes:

- `/fr`
- `/fr/about`
- `/fr/projects`
- `/fr/experience`
- `/fr/insights`
- `/fr/contact`
- `/en`
- `/en/about`
- `/en/projects`
- `/en/experience`
- `/en/insights`
- `/en/contact`

---

## 18. Technical Implementation Guidelines

Recommended stack:

- Next.js
- TypeScript
- Tailwind CSS
- Lucide icons
- Zod for validation
- Sanity for content management, if required

### Architecture principles

- Prefer reusable components.
- Keep components focused and maintainable.
- Separate content from presentation.
- Use typed data structures.
- Avoid unnecessary abstractions.
- Use semantic HTML.
- Keep the dependency list lean.
- Optimize images and fonts.
- Follow existing project conventions before introducing new architecture.

### Suggested component structure

```text
components/
  layout/
    Navbar.tsx
    Footer.tsx
    MobileMenu.tsx
  sections/
    Hero.tsx
    SelectedProjects.tsx
    Expertise.tsx
    AboutPreview.tsx
    Testimonials.tsx
    InsightsPreview.tsx
    ContactCTA.tsx
  projects/
    ProjectCard.tsx
    ProjectGrid.tsx
  ui/
    Button.tsx
    ThemeToggle.tsx
    LanguageSwitcher.tsx
    SectionHeading.tsx
```

---

## 19. SEO and Performance

Requirements:

- Unique metadata for every page.
- Open Graph metadata.
- Sitemap.
- Robots.txt.
- Canonical URLs.
- Correct language alternates.
- Descriptive image alt text.
- Optimized images.
- Optimized fonts.
- Good Core Web Vitals.
- Accessible navigation and forms.

The site must be fast, especially on mobile networks.

---

## 20. Rules for Claude Code

These rules must be followed throughout development.

1. Read this document before creating or modifying UI components.
2. Treat this file as the source of truth for visual decisions.
3. Do not introduce new colors without updating the design tokens.
4. Do not create arbitrary spacing values when an existing spacing token works.
5. Do not create a new button style for every section.
6. Do not use generic placeholder content in the final implementation.
7. Do not invent testimonials, metrics or project achievements.
8. Do not replace the owner's real portrait with an AI-generated person.
9. Ensure all components work in both themes.
10. Ensure all pages work in French and English.
11. Prioritize responsive behavior.
12. Test accessibility and keyboard navigation.
13. Preserve consistency across all pages.
14. Avoid unnecessary dependencies.
15. Do not redesign established components without a clear reason.

### Before implementing a new section

Verify:

- Does it follow the visual identity?
- Does it use the existing design tokens?
- Does it work in both themes?
- Does it work in both languages?
- Is it responsive?
- Is it accessible?
- Does it serve a clear user objective?

---

## 21. Definition of Done

A section is considered complete when:

- It follows the approved visual direction.
- It works on desktop, tablet and mobile.
- It works in light and dark themes.
- It supports French and English.
- It uses the correct typography and spacing.
- It has accessible interactions.
- It contains accurate content.
- It has no horizontal overflow.
- It has been tested in the browser.

---

**Final design principle**

AlphaKahere should not look like a generic developer portfolio.

It should feel like the professional digital presence of an engineer who understands technology, products, business challenges and the importance of delivering quality work.

**Less noise. More substance.**
