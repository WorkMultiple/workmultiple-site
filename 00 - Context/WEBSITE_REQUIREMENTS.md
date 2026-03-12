# WorkMultiple - Website Requirements

> **Detailed requirements for the new website build.** The current site (WM_Legacy/02 - Website/index.html) is a single-page agency landing page. It needs to become a content-driven site with multiple pages.

---

## Launch Strategy: Minimal Site First

The site launches in two stages. The initial launch is a minimal version with only the pages needed to publish content and capture email subscribers. The full page set described in this file is the target state, not the launch state.

### Minimal Launch (Phase 1)

The following pages are needed at launch:

1. **Homepage** — Hero with updated positioning, brief credibility section, email capture form, "Playbooks coming soon" teaser section that captures high-intent interest.
2. **Blog section** — Capable of hosting articles with clean URLs, proper heading hierarchy, meta descriptions, and Open Graph tags. All SEO foundations apply from day one.
3. **Email capture** — Integrated with Beehiiv. Automated welcome sequence live at launch.

### Deferred to Phase 4 (After First Playbook Launches)

The following pages are built after the first playbook is live and selling:

- Playbooks listing page
- Individual playbook sales pages (the first one is built during Phase 3 as part of the playbook launch)
- About page
- Updated Privacy Policy and Terms of Service

---

## Current State (Phase 1 Complete)

The site is live at workmultiple.com, built with Astro and deployed via GitHub integration to Netlify (auto-deploys on push to main). The Astro project lives at `02 - Website/workmultiple-site/`. GitHub repo: `github.com/WorkMultiple/workmultiple-site`.

**What's live:**
- Homepage: hero with updated positioning, credibility section (3 value cards), latest articles section (auto-populates from blog content collection, empty state when no posts), playbooks teaser, native email capture form with gradient button
- Blog section: listing page at /blog, individual post template at /blog/[id], content collection configured for Markdown posts in `src/content/blog/`
- Privacy page (/privacy) and Terms page (/terms)
- Custom 404 page
- GA4 tracking (G-N8EBSXFJLE) on all pages
- Sitemap, robots.txt, Open Graph/Twitter Card meta tags, favicon
- Native email capture form: custom EmailCapture.astro component submits to a Netlify Function (`netlify/functions/subscribe.mjs`, v1 handler format) that proxies to the Beehiiv API. BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID are set as Netlify environment variables. Subscribers confirmed flowing into Beehiiv.
- Premium dark theme (see BRAND.md Visual Direction)
- Keystatic CMS: local git-based CMS with rich editor at /keystatic (dev only). Blog posts authored as Markdoc (.mdoc) files in `src/content/blog/[slug]/`. Supports draft/published status, tags, drag-and-drop image uploads, custom Prompt Block (copyable AI prompts), and Video Embed (autoplay-on-scroll) components. Images stored in `public/blog-images/` with unique filenames. Videos stored in `public/blog-videos/[slug]/` as WebM.
- Share buttons on blog posts: X/Twitter, LinkedIn, Reddit, email, and native Web Share API (mobile). Positioned below post content, above email CTA.

---

## Site Architecture

### Pages Needed

**Homepage**
- Positions WorkMultiple as the authority on practical AI automation for business owners.
- Hero section with updated H1/H2 (see BRAND.md for messaging).
- Featured playbooks section (highlights available playbooks with brief descriptions and buy/learn-more links).
- Latest articles section (pulls from the blog; shows 3 to 5 most recent posts).
- Email capture section (newsletter signup with a compelling reason to subscribe).
- Brief credibility section (what makes WorkMultiple different: tested, practical, implementation-ready).

**Playbooks Page**
- Product listing page for all premium playbooks.
- Each playbook shown as a card with: title, one-line description, price, and a link to its individual sales page.
- Filterable or categorizable as the library grows (not needed for v1 with 1 to 2 playbooks).

**Individual Playbook Sales Pages (one per playbook)**
- What the playbook covers (detailed but scannable).
- Who it's for.
- What's included (table of contents or feature list).
- Price and buy button.
- Social proof when available (testimonials, number of buyers).
- FAQ section addressing common objections.

**Blog / Articles**
- Where free content lives: tool comparisons, tutorials, workflow breakdowns.
- Each article is its own page with: title, date, content, author (WorkMultiple, not Emilio), related articles, and a CTA to relevant playbooks.
- SEO-optimized: clean URLs, proper heading hierarchy, meta descriptions, Open Graph tags.
- Pagination or infinite scroll as the library grows.

**About Page**
- Brief story of WorkMultiple.
- What the brand stands for (practical, tested, tool-agnostic AI guidance).
- Not a founder bio page. Establishes the brand's credibility, not Emilio's personal brand.
- Can mention that the founder has hands-on experience building AI automation systems for real businesses (references the agency work without positioning as an agency).

**Privacy Policy**
- Existing page needs updating for: digital product sales (payment processing), email collection (newsletter), affiliate links (disclosure), and any analytics used.

**Terms of Service**
- Existing page needs updating for: digital product sales, refund policy for playbooks, intellectual property (playbook content is copyrighted), and limitation of liability.

---

## Design Direction

**Keep everything from the existing visual identity:**
- Light theme
- Inter font
- Coral accent (#e9594a)
- Clean, minimal aesthetic (Stripe/Linear/Vercel reference)
- No stock photography
- No gradients or heavy decoration
- Whitespace-forward

**New considerations:**
- Blog layout needs good typography for long-form reading (comfortable line length, generous line height).
- Playbook sales pages need clear visual hierarchy: problem, solution, what's included, price, CTA.
- Mobile-first. The audience is busy business owners who may be reading on their phones.

---

## Payment Integration

**Requirements:**
- Accept credit/debit card payments for digital products ($197 to $497 range).
- Instant delivery of playbook files after purchase (PDF or similar).
- No login or account creation required for buyers.
- Basic sales analytics (number sold, revenue).

**Options under evaluation:**
- **Gumroad:** Simplest. Embeddable buy buttons. Handles payment and delivery. Takes a percentage.
- **LemonSqueezy:** Similar to Gumroad with better international tax handling.
- **Stripe Checkout + custom delivery:** More control. Requires more setup. Better for membership model later.

**Decision:** Deferred to Phase 3 (playbook launch). Ease of setup wins for the first playbook. Not needed at minimal site launch.

---

## Email Capture

**Requirements:**
- Signup form on homepage and at the end of blog articles.
- Compelling reason to subscribe (lead magnet, early access, or valuable newsletter).
- Double opt-in for compliance.
- Basic automation: welcome email after signup.

**Platform:** Beehiiv.

**Decision:** Live at minimal site launch (Phase 1). Automated welcome sequence required from day one.

---

## SEO Considerations

- Clean, descriptive URLs (workmultiple.com/blog/tool-comparison-follow-up-automation, not workmultiple.com/post/12345).
- Proper heading hierarchy (one H1 per page, logical H2/H3 structure).
- Meta descriptions on every page.
- Open Graph and Twitter Card meta tags for social sharing.
- Sitemap.xml and robots.txt.
- Fast page load (static site on Netlify handles this well).
- Image optimization (lazy loading, appropriate formats).
- Internal linking strategy between related articles and playbook pages.

---

## Technical Approach

**Options:**
- **Static HTML (like the current site):** Full control, no dependencies, fast. But hard to maintain a blog with growing content.
- **Static site generator (Hugo, Astro, 11ty):** Good for blogs. Markdown-based content. Deploys to Netlify easily.
- **Lightweight CMS (Ghost, WordPress):** Easier content management but more overhead.

**Decision:** Static site generator (Astro or 11ty). Keeps the speed and simplicity of static hosting while making it manageable to publish articles regularly. Both deploy cleanly to Netlify. Specific tool to be selected at the start of Phase 1.

---

## What Can Be Reused from the Current Site

- **Favicon** (W in coral SVG): Keep as-is.
- **Color palette and typography:** Keep as-is.
- **Privacy and Terms pages:** Update content, keep design approach.
- **Netlify hosting setup:** Keep as-is.
- **Google Workspace email:** Keep as-is.

**What gets removed:**
- Agency hero messaging
- Service descriptions
- Contractor-focused content
- Discovery call CTA and booking link (may be repurposed for newsletter or consultation later)
- Trust section with Anthropic badge (internal platform, not a selling point for content consumers)
