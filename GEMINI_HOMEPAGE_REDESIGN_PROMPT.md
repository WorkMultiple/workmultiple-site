# Homepage Redesign Prompt for Gemini

## Your Role

You are redesigning the homepage of WorkMultiple (workmultiple.com), an Astro + Markdoc site deployed to Netlify. The site uses a premium dark theme. Your job is to transform the homepage from its current SaaS/landing page feel into a **media and content site** layout where articles are the primary focus.

## Context Files to Read (in order)

Read these files from the project before making any changes. They contain the brand identity, design tokens, and current implementation:

1. `00 - Context/BRAND.md` — Brand voice, visual direction, color palette, copy rules
2. `src/styles/global.css` — All CSS custom properties (design tokens), button styles, glass-panel utility, animation keyframes
3. `src/pages/index.astro` — Current homepage (this is what you're redesigning)
4. `src/components/Header.astro` — Site header
5. `src/components/Footer.astro` — Site footer
6. `src/components/EmailCapture.astro` — Email signup form component
7. `src/layouts/BaseLayout.astro` — Base HTML layout with meta tags
8. `src/pages/blog/index.astro` — Blog listing page (for reference on how articles are currently rendered)

## What to Preserve (Non-Negotiable)

These elements define the brand and must not change:

- **Color palette:** All CSS custom properties in `global.css` (accent cyan `#00e5ff`, indigo `#6366f1`, deep zinc background `#09090b`, surface `#121214`, text colors, etc.)
- **Font:** Inter (Google Fonts), already loaded in BaseLayout
- **Global CSS:** Do not modify `global.css`. All homepage styles should remain scoped inside `index.astro`'s `<style>` block.
- **Component interfaces:** `<Header />`, `<Footer />`, `<EmailCapture />` are imported as-is. Do not modify these component files.
- **BaseLayout:** Keep the existing `<BaseLayout>` wrapper and its props.
- **Blog data fetching:** Keep the existing Astro `getCollection('blog')` logic in the frontmatter. Published posts are filtered by `post.data.status === 'published'` and sorted by date descending. Each post has: `post.id` (used for URL: `/blog/${post.id}`), `post.data.title`, `post.data.description`, `post.data.date`, `post.data.author`.
- **Astro framework:** This is an Astro site using `.astro` single-file components. All template logic uses Astro's JSX-like syntax (curly braces for expressions, `{posts.map(...)}` for loops, ternary for conditionals). Do not use React, Vue, or other frameworks.
- **Copy rules:** No em dashes anywhere. No jargon.

## What to Change

### 1. Header: Remove "Blog" link

The homepage IS the content hub now. Remove the "Blog" link from the header nav so only "Subscribe" remains. Edit the `<Header />` component to remove `<a href="/blog" class="nav-link">Blog</a>`. The `/blog` route should still exist and work (don't delete the blog page), but it doesn't need to be in the main nav since the homepage serves as the article discovery surface.

### 2. Hero: Shift from SaaS pitch to content site identity

The current hero reads like a SaaS landing page ("Get the free guides" CTA, tagline badge, etc.). Redesign it to feel like a **media brand masthead**. Think: The Verge, TechCrunch, or Stratechery, but with WorkMultiple's dark premium aesthetic.

Guidelines:
- Keep the brand name "WorkMultiple" and tagline "More done. Same team." prominent
- The sub-copy should position the site as a content destination ("Practical AI tool reviews, honest comparisons, and implementation-ready guides") rather than a product pitch
- Remove the "Get the free guides" and "Read latest articles" CTAs. The articles below the hero ARE the call to action. If you want a single subtle CTA, an anchor to the subscribe section is fine, but it should not dominate.
- **The hero should feel smaller and tighter** than the current version. It's an identity banner, not a conversion section.

### 3. Remove the "Credibility" Cards Section

The three value prop cards ("Tested, not theoretical", "Implementation-ready", "Built for non-technical people") read like SaaS marketing. Remove this entire section. The articles themselves demonstrate credibility.

### 4. Articles Section: Make This the Star

This is the core of the redesign. The homepage should be primarily an article feed. Currently it shows 3 articles in a grid. Change this:

- **Show more articles.** Increase from 3 to at least 6 (or all published articles if fewer than ~12 exist). As the content library grows, we can paginate later.
- **Feature the latest article prominently.** The most recent article should get a larger, featured treatment (bigger card, more visual weight). The remaining articles can use a tighter grid or list layout below it.
- **Each article card should display:** date, title, description, and a "Read article" or arrow affordance. Use the existing `post.data` fields.
- **The layout should feel like a content feed**, not a marketing grid. Think editorial, not e-commerce.
- **Keep the existing card styling language** (dark surface cards with borders, hover states with subtle lift and glow) but adapt it for an editorial layout.

### 5. Hide the "Premium Playbooks. Coming Soon." Section

Do not delete the code. Wrap it in a conditional or comment it out so it's easy to re-enable later. We want the homepage to be 100% focused on the article content for now.

### 6. Keep the Email Subscribe Section

The `<EmailCapture />` section at the bottom stays. It's the secondary conversion point. You can adjust the copy slightly to match the content-site framing (e.g., "Get our latest reviews and guides in your inbox" vs. the current "Skip the 20 hours of trial and error"). But keep the section structure and the `id="subscribe"` anchor.

### 7. Brand Character: Keep Some Visual Flair

The current site has visual character that I like:
- The **gradient glow** effect in the hero background (radial gradient with cyan/indigo, blur, pulse animation)
- The **perspective grid** lines in the hero background
- The **glass-panel** utility (backdrop blur with subtle borders)
- The **hover micro-interactions** (card lift, glow effects, arrow movements)

The redesigned homepage should retain some of this visual personality. It doesn't need to be identical, but the page should NOT look like a plain, unstyled blog. It should still feel premium and slightly futuristic while being content-first.

## Technical Constraints

- Output only `src/pages/index.astro` and `src/components/Header.astro` (the two files that change)
- All page-specific styles go in the `<style>` block inside `index.astro` (scoped styles)
- All interactivity goes in a `<script>` block inside `index.astro` (vanilla JS only, no frameworks)
- The site must be responsive. Include mobile breakpoints (`@media (max-width: 768px)`)
- Use CSS custom properties from `global.css` (e.g., `var(--color-surface)`, `var(--color-accent)`) rather than hardcoding hex values
- Keep all existing Astro imports and the `getCollection` frontmatter logic
- Article links must use `/blog/${post.id}` format

## Summary of Page Sections (Top to Bottom)

1. **Header** — WordMark + "Subscribe" link only (no "Blog")
2. **Hero** — Compact brand identity banner with tagline. Gradient glow + grid background retained.
3. **Featured Article** — Latest post with large, prominent treatment
4. **Article Grid/Feed** — Remaining articles in a clean editorial layout
5. **Email Subscribe** — EmailCapture component with content-appropriate copy
6. **Footer** — Unchanged

Do not add any sections beyond these. The page should be clean and focused.
