# WorkMultiple - Roadmap & Status

> **Living document.** Update this file at the end of every working session. Mark completed steps, add new open items, and note the current focus.

---

## Current Focus

**Phase 0: Context Architecture** — Complete.

**Phase 1: Minimal Site Build** — Complete. Site is live at workmultiple.com with automated GitHub-to-Netlify deploys. Native email capture form is working end-to-end (submissions flow to Beehiiv).

**Phase 2A: Article 1 + Share Buttons** — Complete. Article 1 is published and live.

**Phase 2B: Content Engine Build** — In progress. First content engine batch produced (2026-03-09): 5 articles drafted totaling ~14,200 words. All 5 articles reviewed and approved by Emilio. All 5 batch 1 articles are now published to production (published early on 2026-03-11 during homepage redesign work, ahead of the original Tue-Fri staggered schedule). Remaining scheduled publish tasks (Reclaim AI 3/12, Beehiiv 3/13, Jasper vs Copy.ai 3/14) disabled since articles are already live. Preview system built using Netlify branch deploys (`content-preview` branch). Comparison table CSS styled on-brand. Placeholder affiliate links replaced with real product URLs across all articles. Sources sections standardized across all articles. Weekly Content Batch scheduled task active (Mondays 8 AM). Homepage redesigned with featured article carousel and image card grid (v2). Satori card image pipeline updated to fetch and embed tool logos. Immediate next priorities: (1) Emilio runs `npm run generate-cards:force` locally to regenerate card images with logos, (2) Emilio signs up for affiliate programs, (3) retrofit real affiliate links once programs approve, (4) build Publish Prep Skill for future batches.

---

## Phase 0: Context Architecture & Brand Positioning

| Step | Status | Notes |
|---|---|---|
| 1. Read legacy context files and understand existing assets | COMPLETE | All 8 files in WM_Legacy/00 - Context/ reviewed. |
| 2. Create new 00 - Context/ folder with updated files | COMPLETE | BUSINESS.md, BRAND.md, PRODUCTS.md, CONTENT_STRATEGY.md, ROADMAP.md, DECISIONS.md, WEBSITE_REQUIREMENTS.md. |
| 3. Revise launch strategy and update roadmap phasing | COMPLETE | Shifted to lead with free content and community presence before selling the first playbook. |

## Phase 1: Minimal Site Build (1 to 2 weeks)

Build and deploy a lean site on Astro with Netlify. Three things at launch: homepage, blog, and email capture. Full site pages are deferred to later phases.

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

## Phase 2: First Free Content + Organic Engagement

### Phase 2A: Article 1 + Share Buttons — COMPLETE

| Step | Status | Notes |
|---|---|---|
| 9a. Outline Article 1: The Pivot Story | COMPLETE | Outline at `03 - Content/Article 1 - Pivot Story/OUTLINE.md`. |
| 9a-ii. Install Keystatic CMS | COMPLETE | Keystatic CMS installed with rich editor, image drag-and-drop, draft/published status, custom Prompt Block and Video Embed components. Markdoc content format. See WEBSITE_REQUIREMENTS.md and DECISIONS.md. |
| 9a-iii. Emilio writes Article 1 draft | COMPLETE | Draft written by Emilio in Keystatic. Located at `src/content/blog/ai-automation-agency-build/index.mdoc`. Title: "I Built an AI Automation Agency in 15 Hours. Here's How I Did It." Includes screenshots, prompt blocks, and two embedded video demos. |
| 9b. Build share buttons component for blog posts | COMPLETE | ShareButtons.astro component with X/Twitter, LinkedIn, Reddit, email, and native Web Share API (mobile). Positioned below post content, above email CTA. |
| 9c. Format, optimize, and publish Article 1 | COMPLETE | Agent completed: error review (typo fixes across two passes), SEO optimization (meta description added, title kept as-is), Article JSON-LD schema added to blog template, OG type set to "article" for blog posts, OG default image pointed to WorkMultiple_Logo_800x800.png, alt text added to all 4 images and both video embeds, external links added (Anthropic, Claude Cowork, Netlify, Porkbun, Google Workspace, n8n, LangGraph, Gemini). Affiliate links flagged for later (Netlify referral pending). Emilio reviewed, flipped to published, and pushed to GitHub. Article is live. |
| 9d. Fix blog post link routing bug | COMPLETE | Both homepage and blog listing used `post.slug` (undefined) instead of `post.id` for article card links. Fixed in `src/pages/index.astro` and `src/pages/blog/index.astro`. |

### Phase 2B: Content Engine Build — IN PROGRESS

| Step | Status | Notes |
|---|---|---|
| 10. Strategic pivot: redefine content creation model | COMPLETE | Two-track model defined (2026-03-09). See CONTENT_STRATEGY.md and DECISIONS.md. |
| 10a. Build Topic Research Skill | COMPLETE | Cowork skill that uses web search to find/rank tool and topic candidates. Outputs ranked suggestions with target keywords, article type recommendations, affiliate program info, and methodology. Tested and installed (2026-03-09). |
| 10b. Build Article Drafting Skill | COMPLETE | Cowork skill that conducts SERP analysis (competitor depth, PAA questions, related keywords, content gaps), researches the tool, and produces a complete Markdoc draft. Tested on Beehiiv profile (10/10) and Zapier vs Make comparison (10/11). Enhanced with comprehensive SEO phase after initial testing. Installed (2026-03-09). |
| 10c. Remove agency-era skills and plugins | COMPLETE | icp-builder, lead-list-builder, lead-scorer, outreach-drafter, wm-sales, sales, common-room all removed via Cowork desktop app (2026-03-09). |
| 11. Identify first batch of tools to profile | COMPLETE | Topic Research Skill identified 5 candidates: Notion AI (profile), Zapier vs Make (comparison), Reclaim AI (profile), Beehiiv (profile), Jasper vs Copy.ai (comparison). Ranked by search demand, affiliate potential, audience fit, and category diversity. (2026-03-09) |
| 13. Apply to easy-approval affiliate programs | IN PROGRESS | Signup guide prepared with exact URLs, requirements, and recommended order. Emilio needs to create accounts (Amazon Associates, Impact.com, ShareASale). (2026-03-09) |
| 14. Produce first content engine batch | COMPLETE | 5 articles drafted totaling ~14,200 words. All saved to content-engine-drafts/ with review spreadsheet (batch-1-review.xlsx). Emilio review pending. (2026-03-09) |
| 14a. Build Netlify branch deploy preview system | COMPLETE | `content-preview` branch deployed as Netlify branch deploy. Articles set to `status: published` on preview branch for rendering. Preview URLs at `content-preview--zippy-peony-3698b7.netlify.app/blog/[slug]`. Review spreadsheet (batch-1-review-v2.xlsx) has clickable preview buttons. (2026-03-10) |
| 14b. Review and approve batch 1 articles | COMPLETE | Emilio reviewed all 5 articles via branch deploy previews. All approved. Placeholder affiliate links replaced with real product URLs. Sources sections standardized (## Sources heading) across all articles. (2026-03-10) |
| 14c. Add on-brand table CSS to blog template | COMPLETE | Comprehensive comparison table styles added to `src/pages/blog/[id].astro`. Gradient header (cyan/indigo), cell borders, hover states, responsive mobile scroll. Cherry-picked to both main and content-preview branches. (2026-03-10) |
| 14d. Publish Notion AI review | COMPLETE | First content engine article published to main. Status set to published, date 2026-03-10. Removed from content-preview branch. (2026-03-10) |
| 14e. Schedule remaining 4 article publishes | COMPLETE | Four one-time scheduled tasks created to publish articles at noon daily: Zapier vs Make (3/11), Reclaim AI (3/12), Beehiiv (3/13), Jasper vs Copy.ai (3/14). All 5 articles published early (2026-03-11) during homepage redesign. Remaining 3 scheduled tasks disabled since articles are already live. (2026-03-11) |
| 15. Build Weekly Content Batch scheduled task | COMPLETE | Scheduled task "weekly-content-batch" created. Runs every Monday at 8 AM. Generates 3-5 drafts using Topic Research + Article Drafting skills and produces review spreadsheet. (2026-03-09) |
| 15a. Homepage redesign v1: content-first layout | COMPLETE | Gemini redesigned homepage from SaaS layout to content-first media layout. Hero tightened, value prop cards removed, articles promoted to primary content, playbooks section hidden, Blog nav link removed. (2026-03-11) |
| 15b. Build Satori image generation pipeline | COMPLETE | Programmatic article card images using vercel/satori + @resvg/resvg-js. Branded template (dark zinc, cyan/indigo, Inter). Updated to fetch and cache tool logos from the web (Google favicon service + direct fallbacks). Logo registry maps tool names to domains. Generates at Astro build time. Output doubles as OG images. Emilio needs to run `npm run generate-cards:force` locally to regenerate with logos. (2026-03-11) |
| 15c. Homepage redesign v2: carousel + uniform image grid | COMPLETE | Hero masthead replaced with featured article carousel (3 latest posts, auto-advance 6s, dot nav, arrow nav, touch swipe, pauses when tab hidden). Uniform 3-col image card grid for remaining articles. "All articles" section divider. Background effects preserved. Vanilla JS, responsive at 1024px and 768px breakpoints. (2026-03-11) |
| 16. Build Publish Prep Skill | NOT STARTED | Cowork skill that takes an approved draft and places it in the Astro content collection for deployment. |
| 17. Apply to selective affiliate programs | NOT STARTED | Netlify, Beehiiv, Zapier, Make, Notion, n8n, and individual AI tool programs. Apply after 4-6 weeks of content (when site shows traffic and content volume). |
| 18. Retrofit affiliate links into existing articles | NOT STARTED | As programs approve, go back and add affiliate links to published articles that mention those tools. |

### Phase 2C: Upvoting System

| Step | Status | Notes |
|---|---|---|
| 19. Build ranked upvoting system | NOT STARTED | Backend: Netlify Functions + lightweight database (Supabase, Upstash, or similar). Anti-spam mechanism required. Vote counts determine post ranking and future hero carousel ordering. Deprioritized relative to content engine; build when content volume justifies it. |

### Phase 2D: Community Distribution (when ready)

| Step | Status | Notes |
|---|---|---|
| 20. Evaluate organic engagement signals | NOT STARTED | Review GA4 data, upvote counts, and share activity across published posts. Identify which post has the strongest engagement. |
| 21. Distribute highest-performing post to communities | NOT STARTED | Reddit (r/entrepreneur, r/SideProject, etc.), Indie Hackers, Twitter/X (@WorkMultipleAI), LinkedIn. Lead with the post that has proven engagement, not necessarily the first post published. |
| 22. Continue selective distribution | NOT STARTED | Distribute additional posts based on performance. Not every post gets distributed. |

## Phase 3: Tool Directory Page (~6 weeks after content engine starts)

Build the tool directory page once 20-30 tools have been profiled in content engine articles. The directory aggregates all reviewed tools with short profiles, category tags, and links to the full article. Deeper than futuretools.io.

| Step | Status | Notes |
|---|---|---|
| 23. Design tool directory page layout | NOT STARTED | Filterable/searchable directory of all reviewed tools. Each entry: tool name, category, short description, verdict, link to full article, affiliate link (when available). |
| 24. Build tool directory page | NOT STARTED | New page on the site. Auto-populates or manually curated from content engine articles. |
| 25. Backfill all reviewed tools into directory | NOT STARTED | Every tool profiled in a content engine article gets a directory entry. |
| 26. Add affiliate links to directory entries | NOT STARTED | As affiliate programs approve, add links to both the directory entry and the corresponding article. |

## Phase 4: Expand Content + Content Site Architecture

Once there are 10+ published posts. These features make the blog into a proper content discovery experience.

| Step | Status | Notes |
|---|---|---|
| 27. Build hero carousel of top-voted posts | NOT STARTED | Homepage hero section shows highest-voted posts in a rotating carousel. Powered by the upvoting system. |
| 28. Build post grid layout | NOT STARTED | Replace or augment the current blog listing with a visual grid of post cards below the hero. |
| 29. Implement tagging system | NOT STARTED | Tags defined in blog post frontmatter. Tag index pages at /blog/tag/[tag]. Tags displayed on post cards and individual posts. |
| 30. Build topic filtering on blog listing | NOT STARTED | Filter posts by tag on the /blog page. |
| 31. Build deferred site pages: about page | NOT STARTED | |
| 32. Build deferred site pages: playbooks listing page | NOT STARTED | Deferred until playbook launch. |

## Phase 5: Assemble and Launch the First Playbook (when brand is established)

The first playbook ("How to Build a Done-for-You AI Automation Agency") is deprioritized until the site has meaningful traffic, an email list, and established authority. Source material already exists in WM_Legacy. This phase runs when the affiliate content engine is producing steady revenue and the brand has enough credibility to sell premium content.

| Step | Status | Notes |
|---|---|---|
| 33. Outline the agency automation playbook | NOT STARTED | Use all WM_Legacy materials as source content. |
| 34. Write the playbook (draft) | NOT STARTED | Implementation-ready quality bar. Exact steps, screenshots, prompts, troubleshooting. |
| 35. Review, edit, and finalize the playbook | NOT STARTED | |
| 36. Build playbook sales page | NOT STARTED | |
| 37. Select and integrate payment platform | NOT STARTED | Gumroad, LemonSqueezy, or Stripe. Ease of setup wins. |
| 38. Launch to email list first | NOT STARTED | Founding pricing or early access offer for subscribers. |
| 39. Launch to communities | NOT STARTED | |

## Phase 6: Evaluate Membership Model

This happens when the playbook library reaches 5 to 10 titles.

| Step | Status | Notes |
|---|---|---|
| 40. Assess playbook library size (target: 5 to 10) | NOT STARTED | |
| 41. Evaluate traffic and demand signals | NOT STARTED | |
| 42. Design membership offering and pricing | NOT STARTED | Target: $49/month. |
| 43. Build membership infrastructure | NOT STARTED | |

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
- [x] Add Keystatic CMS to the site — Phase 2A
- [x] Build share buttons component — Phase 2A
- [x] Build Prompt Block custom component — Phase 2A
- [x] Build Video Embed custom component — Phase 2A
- [x] Draft/published status filtering on blog posts — Phase 2A
- [x] Article 1 draft written by Emilio — Phase 2A
- [x] Article 1 SEO optimization — Phase 2A
- [x] Article 1 published and live — Phase 2A
- [x] Blog post link routing bug fixed (post.slug → post.id) — Phase 2A
- [x] Push latest changes to GitHub (from local machine) — Phase 2A
- [x] Strategic pivot: two-track content model defined — Phase 2B
- [x] Build Topic Research Skill — Phase 2B
- [x] Build Article Drafting Skill (with SERP analysis/SEO phase) — Phase 2B
- [x] Remove agency-era skills and plugins — Phase 2B
- [x] Identify first batch of tools to profile (5 tools selected via Topic Research Skill) — Phase 2B
- [ ] Apply to easy-approval affiliate programs (signup guide prepared, Emilio to create accounts) — Phase 2B
- [x] Produce first content engine batch (5 articles drafted, review spreadsheet delivered) — Phase 2B
- [x] Build Weekly Content Batch scheduled task (runs Mondays 8 AM) — Phase 2B
- [x] Emilio reviews batch 1 drafts and marks status in spreadsheet — Phase 2B
- [x] Build Netlify branch deploy preview system — Phase 2B
- [x] Replace placeholder affiliate links with real product URLs in all articles — Phase 2B
- [x] Standardize Sources sections across all articles — Phase 2B
- [x] Add on-brand comparison table CSS to blog template — Phase 2B
- [x] Publish Notion AI review (first content engine article) — Phase 2B
- [x] Schedule remaining 4 article publishes (Tue-Fri noon) — Phase 2B
- [x] Monitor scheduled article publishes (3/11-3/14) — Phase 2B (all published early 3/11, remaining tasks disabled)
- [x] Homepage redesign v1: content-first layout via Gemini — Phase 2B
- [x] Build Satori image generation pipeline for article card images (with tool logo fetching) — Phase 2B
- [x] Homepage redesign v2: carousel + uniform image grid — Phase 2B
- [ ] Update article-drafter skill with `tools` frontmatter field — Phase 2B
- [ ] Build Publish Prep Skill — Phase 2B
- [ ] Apply to selective affiliate programs — Phase 2B (after 4-6 weeks of content)
- [ ] Build ranked upvoting system — Phase 2C
- [ ] Select database for upvoting system (Supabase vs Upstash vs other) — Phase 2C
- [ ] Design anti-spam mechanism for upvoting — Phase 2C
- [ ] Design and build tool directory page — Phase 3
- [ ] Define tagging taxonomy for blog posts — Phase 4
- [ ] Decide on payment platform (Gumroad vs LemonSqueezy vs Stripe) — Phase 5
- [ ] Logo / icon mark (carried forward from agency era; recommended before community distribution)
- [ ] Repurpose or remove Google Calendar booking link
- [ ] Create dedicated OG image (1200x630) for better social sharing — recommended before community distribution
- [ ] Remove agency-era Cowork skills and plugins (icp-builder, lead-list-builder, lead-scorer, outreach-drafter, wm-sales plugin, sales plugin, common-room plugin) — manual action in Cowork desktop app
