# Homepage Redesign v2: Carousel + Image Cards

## Your Role

You are iterating on the WorkMultiple homepage (workmultiple.com). The previous revision moved it from a SaaS landing page to a content-first layout. This revision takes it further: replacing the hero masthead with a featured article carousel and adding auto-generated card images to every article.

## Context Files to Read (in order)

1. `00 - Context/BRAND.md` -- Brand voice, visual direction, color palette, copy rules
2. `src/styles/global.css` -- CSS custom properties, button styles, glass-panel, animations
3. `src/pages/index.astro` -- Current homepage (this is what you're modifying)
4. `src/components/Header.astro` -- Site header (do NOT modify)
5. `src/components/Footer.astro` -- Site footer (do NOT modify)
6. `src/components/EmailCapture.astro` -- Email signup component (do NOT modify)
7. `src/layouts/BaseLayout.astro` -- Base HTML layout (do NOT modify)

## What Has Changed Since Last Time

We now have auto-generated card images for every blog post. These images are:
- Located at `/images/cards/{post.id}.png` (e.g., `/images/cards/zapier-vs-make.png`)
- 1200x630px (OG-image compatible)
- Branded with the WorkMultiple dark theme (dark zinc background, subtle grid texture, gradient glow)
- Each has a colored badge indicating type (Comparison, Review, Guide, Behind the Build)
- Comparison articles show "Tool vs Tool" layout with a styled "vs" element
- Review articles show the tool name prominently with description
- The image path can be derived from `post.id`: `` `/images/cards/${post.id}.png` ``

## What to Preserve (Non-Negotiable)

- **All CSS custom properties** from global.css (colors, gradients, shadows, etc.)
- **Font:** Inter (already loaded)
- **Do NOT modify** global.css, Header.astro, Footer.astro, EmailCapture.astro, or BaseLayout.astro
- **BaseLayout wrapper** and its props stay as-is
- **Blog data fetching** in the frontmatter stays as-is (getCollection, filter, sort, slice to 12)
- **Astro framework** syntax (.astro files, JSX-like expressions, {posts.map(...)})
- **Copy rules:** No em dashes. No jargon.
- **Playbooks section** stays hidden with `{false && (...)}` -- do not remove
- **Subscribe section** stays with `id="subscribe"` anchor
- **Article links** use `/blog/${post.id}` format

## Changes to Make

### 1. Replace the Hero Masthead with a Featured Article Carousel

Remove the current hero section entirely (the "More done. Same team." masthead, the badge, and the sub-copy). Replace it with a **featured article carousel** that showcases the 3 most recent articles.

Carousel requirements:
- Takes the first 3 posts from the `posts` array
- Each slide shows: the card image (full-width or left/right split), the article title, the description, and a "Read article" link
- The card image for each slide is at `/images/cards/${post.id}.png`
- Auto-advances every 6 seconds
- Has dot indicators or minimal navigation arrows
- Smooth CSS transitions between slides
- The carousel should feel premium and on-brand (dark cards, subtle borders, glow effects)
- Mobile responsive: on small screens, the carousel should stack into a simpler vertical layout or single visible slide with swipe
- **All interactivity must be vanilla JavaScript** in a `<script>` block (no frameworks)

The carousel replaces the hero as the first thing users see. It makes the homepage feel dynamic and content-driven.

### 2. Replace the Article Feed with a Uniform Image Card Grid

Below the carousel, show the remaining articles (posts after the first 3) in a uniform grid. Every card gets the same size treatment. No more featured/small split.

Card layout:
- **Image on top**: `<img src={/images/cards/${post.id}.png} alt={post.data.title} />` -- takes roughly 50% of card height, with `object-fit: cover` and `border-radius` on top corners
- **Content below**: date, title (truncated to 2-3 lines if needed), and a "Read article" arrow affordance
- Do NOT include the description in the grid cards (the image and title are enough; the carousel already shows descriptions for featured articles)
- Grid: 3 columns on desktop, 2 on tablet (max-width: 1024px), 1 on mobile (max-width: 768px)
- Cards should maintain the existing hover effects (lift, glow, border color change)
- All cards are the same height within a row (use `aspect-ratio` or fixed heights on the image container)

If there are no remaining posts after the carousel (fewer than 4 total), skip the grid section entirely.

### 3. Keep the Background Effects

The gradient glow and perspective grid from the hero background should persist behind the carousel area. Adjust the `.hero-bg-wrapper` height as needed to cover the carousel, but keep the visual texture. The site should not feel flat.

### 4. Add a Subtle Section Divider

Between the carousel and the article grid, add a small "More articles" or "All articles" text heading, left-aligned, with the same typography treatment as the existing section headers. Keep it minimal.

### 5. Subscribe Section

Unchanged. Keep as-is.

## Technical Notes

- Output ONLY `src/pages/index.astro` (this is the only file that changes)
- All styles go in the `<style>` block (scoped)
- All JavaScript goes in a `<script>` block (vanilla JS, no frameworks)
- The carousel auto-advance timer should pause when the tab is not visible (use `document.hidden` or `visibilitychange` event)
- Images should have `loading="lazy"` on the grid cards (not the carousel)
- Images should have meaningful `alt` text (use the article title)
- Use CSS custom properties from global.css everywhere (e.g., `var(--color-surface)`, `var(--color-accent)`) -- do not hardcode hex values
- Must be responsive with breakpoints at 1024px and 768px

## Page Structure (Top to Bottom)

1. **Header** -- Unchanged (WordMark + Subscribe)
2. **Background effects** -- Grid + glow behind carousel area
3. **Featured Carousel** -- 3 latest articles, auto-advancing, with card images
4. **Section divider** -- "More articles" heading
5. **Article Grid** -- Uniform image cards for remaining articles (3-col)
6. **Playbooks section** -- Hidden (keep the `{false && (...)}` wrapper)
7. **Email Subscribe** -- EmailCapture component
8. **Footer** -- Unchanged

Keep the page clean, content-focused, and on-brand. The card images provide all the visual variety the page needs.
