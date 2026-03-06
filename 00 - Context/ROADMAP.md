# WorkMultiple - Roadmap & Status

> **Living document.** Update this file at the end of every working session. Mark completed steps, add new open items, and note the current focus.

---

## Current Focus

**Phase 0: Context Architecture** — Complete.

**Phase 1: Minimal Site Build** — Complete. Site is live at workmultiple.com with automated GitHub-to-Netlify deploys. Native email capture form is working end-to-end (submissions flow to Beehiiv).

**Phase 2: First Free Content + Organic Engagement** — In progress. Article 1 outline complete (see `03 - Content/Article 1 - Pivot Story/OUTLINE.md`). **Immediate next priorities:** (1) Add Keystatic CMS to the site for a user-friendly writing experience, (2) build share buttons component for blog posts, (3) Emilio writes Article 1 draft from the outline, (4) agent formats, optimizes, and publishes.

---

## Phase 0: Context Architecture & Brand Positioning

| Step | Status | Notes |
|---|---|---|
| 1. Read legacy context files and understand existing assets | COMPLETE | All 8 files in WM_Legacy/00 - Context/ reviewed. |
| 2. Create new 00 - Context/ folder with updated files | COMPLETE | BUSINESS.md, BRAND.md, PRODUCTS.md, CONTENT_STRATEGY.md, ROADMAP.md, DECISIONS.md, WEBSITE_REQUIREMENTS.md. |
| 3. Revise launch strategy and update roadmap phasing | COMPLETE | Shifted to lead with free content and community presence before selling the first playbook. |

## Phase 1: Minimal Site Build (1 to 2 weeks)

Build and deploy a lean site on Astro with Netlify. Three things at launch: homepage, blog, and email capture. Full site pages are deferred to Phase 4.

| Step | Status | Notes |
|---|---|---|
| 4. Select static site generator (Astro or 11ty) | COMPLETE | Astro selected. Built-in content collections, SEO integrations, and component model best fit a growing content site. |
| 5. Select and set up email platform | COMPLETE | Beehiiv selected. Native form component built (EmailCapture.astro) with a Netlify Function (netlify/functions/subscribe.mjs) that proxies to the Beehiiv API. Beehiiv attribution tracking script in BaseLayout head. |
| 6. Build homepage | COMPLETE | Hero with updated positioning, credibility section (3 value cards), latest articles section (auto-populates from blog, empty state when no posts), playbooks teaser, email capture form. Brand restyled to premium dark theme (see BRAND.md Visual Direction). |
| 7. Build blog section | COMPLETE | Blog listing page at /blog with empty state. Individual post template at /blog/[id] with full typography and email capture CTA at bottom. Content collection configured for Markdown posts in src/content/blog/. Clean URLs, meta descriptions, Open Graph tags, Twitter Cards. |
| 7a. Build privacy and terms pages | COMPLETE | Updated content reflecting the playbook/content model (removed agency references). Located at /privacy and /terms. |
| 7b. GA4 tracking | COMPLETE | Google Analytics script (G-N8EBSXFJLE) added to BaseLayout head, runs on all pages. |
| 8. Deploy to Netlify | COMPLETE | Site deployed via GitHub integration (not drag-and-drop). Repo: github.com/WorkMultiple/workmultiple-site. Auto-deploys on push to main. Build command: `npm run build`. Publish directory: `dist`. Functions directory: `netlify/functions`. |
| 8a. Native email form verified end-to-end | COMPLETE | EmailCapture.astro component submits to Netlify Function (subscribe.mjs, v1 handler format) which proxies to Beehiiv API. BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID set as Netlify environment variables (secret, Production + Deploy Previews). Subscribers confirmed flowing into Beehiiv. |
| 8b. 404 page | COMPLETE | Custom 404.astro page added. Styled to match the dark theme. |

## Phase 2: First Free Content + Organic Engagement (3 to 4 weeks)

Write and publish 3 high-quality articles before the playbook goes on sale. Quality over quantity. **All article copy is written by Emilio (not AI).** See CONTENT_STRATEGY.md for the full collaboration model.

**Distribution strategy:** Do NOT distribute to communities (Reddit, Indie Hackers, etc.) immediately upon publication. Publish, measure organic engagement (GA4, upvotes, shares), and iterate on content quality across multiple posts. Community distribution happens only after engagement signals confirm the content is resonating. Brand reception and authority are fragile. Premature exposure to an early-stage content library risks permanent dismissal from the communities we want to build credibility in. See CONTENT_STRATEGY.md for the full distribution philosophy.

### Phase 2A: Article 1 + Share Buttons

| Step | Status | Notes |
|---|---|---|
| 9a. Outline Article 1: The Pivot Story | IN PROGRESS | Collaborate on structure using WM_Legacy materials. Emilio writes the draft including screenshots. Agent helps with SEO optimization, screenshot styling, headline formatting, and Markdown publishing. |
| 9b. Build share buttons component for blog posts | NOT STARTED | Social sharing (Twitter/X, LinkedIn, Reddit), email, and native Web Share API (handles SMS on mobile). Appears on individual blog post pages only. Ships with or before Article 1. |
| 9c. Format, optimize, and publish Article 1 | NOT STARTED | Agent handles: SEO (schema markup, meta description, Open Graph), screenshot styling (drop shadows, on-brand treatment), headline formatting, internal/external linking. Emilio reviews final before publish. |

### Phase 2B: Upvoting System + Articles 2-3

| Step | Status | Notes |
|---|---|---|
| 10a. Build ranked upvoting system | NOT STARTED | Backend: Netlify Functions + lightweight database (Supabase, Upstash, or similar). Anti-spam mechanism required. Vote counts determine post ranking and future hero carousel ordering. |
| 11. Write and publish Article 2: Tool comparison or workflow breakdown | NOT STARTED | Same collaboration model as Article 1. Drawn from agency build research. Tested, opinionated, practical. Targets SEO. Include affiliate links where appropriate. |
| 13. Write and publish Article 3: Second tool comparison or tutorial | NOT STARTED | Same collaboration model. Derived from existing knowledge. Natural connection to the upcoming playbook. |
| 15. Sign up for relevant affiliate programs | NOT STARTED | As tools are reviewed in articles. |

### Phase 2C: Community Distribution (when ready)

| Step | Status | Notes |
|---|---|---|
| 16a. Evaluate organic engagement signals | NOT STARTED | Review GA4 data, upvote counts, and share activity across published posts. Identify which post has the strongest engagement. |
| 16b. Distribute highest-performing post to communities | NOT STARTED | Reddit (r/entrepreneur, r/SideProject, etc.), Indie Hackers, Twitter/X (@WorkMultipleAI), LinkedIn. Lead with the post that has proven engagement, not necessarily the first post published. |
| 16c. Continue selective distribution | NOT STARTED | Distribute additional posts to communities based on performance. Not every post gets distributed. Only posts with strong engagement signals. |

## Phase 3: Assemble and Launch the First Playbook (runs in parallel with Phase 2)

The first playbook ("How to Build a Done-for-You AI Automation Agency") is assembled concurrently with the free content phase. Source material already exists in WM_Legacy. This is organizing and writing up what was already built, not net-new research. The playbook does not go on sale until at least 2 to 3 free articles are published and the site has visible content and early email subscribers.

| Step | Status | Notes |
|---|---|---|
| 16. Outline the agency automation playbook | NOT STARTED | Use all WM_Legacy materials as source content. |
| 17. Write the playbook (draft) | NOT STARTED | Implementation-ready quality bar. Exact steps, screenshots, prompts, troubleshooting. |
| 18. Review, edit, and finalize the playbook | NOT STARTED | |
| 19. Build playbook sales page | NOT STARTED | Built once the playbook draft is finalized. |
| 20. Select and integrate payment platform | NOT STARTED | Gumroad, LemonSqueezy, or Stripe. Ease of setup wins. |
| 21. Launch to email list first | NOT STARTED | Founding pricing or early access offer for subscribers. |
| 22. Launch to communities | NOT STARTED | Distribute to the same channels used in Phase 2. |

## Phase 4: Expand Content + Build Playbook Library + Content Site Architecture

Once the first playbook is live and selling. This phase completes the full site build and transforms the blog into a proper content discovery experience. The content site architecture features make sense once there are 5+ published posts.

| Step | Status | Notes |
|---|---|---|
| 23. Continue publishing 1 to 2 free articles per week | NOT STARTED | Maintain content velocity. |
| 24. Conduct keyword research to validate next playbook topics | NOT STARTED | |
| 25. Build deferred site pages: about page | NOT STARTED | |
| 26. Build deferred site pages: playbooks listing page | NOT STARTED | |
| 27. Update privacy/terms for digital products and email collection | NOT STARTED | Existing pages in WM_Legacy may serve as starting points. |
| 27a. Build hero carousel of top-voted posts | NOT STARTED | Homepage hero section shows highest-voted posts in a rotating carousel. Powered by the upvoting system built in Phase 2B. |
| 27b. Build post grid layout | NOT STARTED | Replace or augment the current blog listing with a visual grid of post cards below the hero. |
| 27c. Implement tagging system | NOT STARTED | Tags defined in blog post frontmatter. Tag index pages at /blog/tag/[tag]. Tags displayed on post cards and individual posts. |
| 27d. Build topic filtering on blog listing | NOT STARTED | Filter posts by tag on the /blog page. Client-side filtering or tag-based routes. |
| 28. Select and outline playbook #2 | NOT STARTED | Topic validated by keyword research and demand signals. |
| 29. Build and launch playbook #2 | NOT STARTED | |
| 30. Select and outline playbook #3 | NOT STARTED | |
| 31. Build and launch playbook #3 | NOT STARTED | |

## Phase 5: Evaluate Membership Model

This happens when the playbook library reaches 5 to 10 titles.

| Step | Status | Notes |
|---|---|---|
| 32. Assess playbook library size (target: 5 to 10) | NOT STARTED | |
| 33. Evaluate traffic and demand signals | NOT STARTED | |
| 34. Design membership offering and pricing | NOT STARTED | Target: $49/month. |
| 35. Build membership infrastructure | NOT STARTED | |

---

## Open Items

- [x] Select static site generator — Astro
- [x] Select email platform — Beehiiv
- [x] Build and style site (premium dark theme)
- [x] GA4 tracking added
- [x] Push workmultiple-site to GitHub and connect to Netlify for automated deploys
- [x] Set Netlify environment variables (BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID)
- [x] Native email capture form verified end-to-end (subscribers flowing into Beehiiv)
- [x] Custom 404 page added
- [ ] Decide on payment platform (Gumroad vs LemonSqueezy vs Stripe) — deferred to Phase 3
- [ ] Logo / icon mark (carried forward from agency era; recommended before public launch)
- [ ] Repurpose or remove Google Calendar booking link
- [ ] Finalize first playbook outline
- [ ] Select database for upvoting system (Supabase vs Upstash vs other) — Phase 2B
- [ ] Design anti-spam mechanism for upvoting — Phase 2B
- [ ] Define tagging taxonomy for blog posts — Phase 4
- [ ] Add Keystatic CMS to the site — Phase 2A (immediate next step)
