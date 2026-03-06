I'm Emilio, founder of WorkMultiple. You are picking up where a previous agent left off. Before doing anything, read these files in order:

1. `00 - Context/BRAND.md`
2. `00 - Context/BUSINESS.md`
3. `00 - Context/WEBSITE_REQUIREMENTS.md`
4. `00 - Context/ROADMAP.md` (most important for understanding current status)
5. `00 - Context/CONTENT_STRATEGY.md`
6. `00 - Context/DECISIONS.md`

**What has been accomplished (Phase 0 and Phase 1 are complete):**

Phase 0 created the context architecture for the new playbook/authority model. Phase 1 built and deployed the WorkMultiple site. The site is live at workmultiple.com, built with Astro 5.5, and deployed via GitHub integration to Netlify (auto-deploys on push to main). The Astro project lives at `02 - Website/workmultiple-site/`. GitHub repo: `github.com/WorkMultiple/workmultiple-site`.

The site includes: a homepage (hero, credibility section, latest articles with auto-population from blog content collection, playbooks teaser, native email capture form), a blog section (listing page + individual post template using Astro content collections for Markdown posts in `src/content/blog/`), privacy page, terms page, custom 404 page, GA4 tracking, sitemap, robots.txt, Open Graph/Twitter Card meta tags, and a favicon. The site uses a premium dark theme with Electric Cyan (#00e5ff) and Indigo (#6366f1) accents on a Deep Zinc (#09090b) background.

The email capture form is a custom native component (`src/components/EmailCapture.astro`) with a gradient button that submits to a Netlify Function (`netlify/functions/subscribe.mjs`, v1 handler format using `export const handler`). The function proxies submissions to the Beehiiv API. Environment variables `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID` are configured in Netlify. Subscribers are confirmed flowing into Beehiiv.

---

**What we are working on now (Phase 2):**

Write and publish the first 3 free articles + build post engagement features. See ROADMAP.md Phase 2 and CONTENT_STRATEGY.md for the full plan. Phase 2 is split into three sub-phases:

**Phase 2A: Article 1 + Share Buttons + CMS**

**IMMEDIATE NEXT STEP: Add Keystatic CMS to the site.** Emilio needs a user-friendly writing experience (rich text editor, image drag-and-drop, formatting toolbar) instead of writing raw Markdown. Keystatic was selected (see DECISIONS.md). This has NOT been built yet. The implementation requires:

1. Install packages: `@keystatic/core`, `@keystatic/astro`, `react`, `react-dom`, `@astrojs/react`
2. Create `keystatic.config.ts` in the project root defining the blog collection (must match existing content schema: title, description, date, author with 'WorkMultiple' default, plus new tags field)
3. Add a `/keystatic` admin route page (e.g., `src/pages/keystatic/[...params].astro`)
4. Update `astro.config.mjs` to include `@keystatic/astro` and `@astrojs/react` integrations
5. Configure image storage in the repo (e.g., `public/blog-images/`)
6. Update `src/content.config.ts` to add a `tags` field to the blog schema
7. Test locally, then deploy to Netlify

**IMPORTANT:** The previous session hit permission errors when trying to `rm -rf node_modules` and `npm install`. The node_modules directory had file deletion restrictions. File deletion has since been enabled for the WorkMultiple2 folder. You may need to clean node_modules before installing the new packages. Try `rm -rf node_modules && npm install` first, then add the Keystatic packages.

After the CMS is working:
2. **Build share buttons** on individual blog post pages (Twitter/X, LinkedIn, Reddit, email, native Web Share API for SMS on mobile).
3. **Emilio writes Article 1** using the Keystatic CMS. The outline is complete at `03 - Content/Article 1 - Pivot Story/OUTLINE.md`. Read this file to understand the article structure.
4. **Format, optimize, and publish Article 1.** Agent handles schema markup, meta descriptions, screenshot styling (drop shadows, on-brand treatment), headline formatting, internal/external linking.

**Phase 2B: Upvoting System + Articles 2-3**
5. **Build ranked upvoting system.** Backend via Netlify Functions + lightweight database (TBD). Anti-spam mechanism required. Vote counts determine post ranking and future hero carousel ordering.
6. **Article 2: Tool comparison or workflow breakdown** drawn from agency build research. Targets SEO. Include affiliate links where appropriate.
7. **Article 3: Second tool comparison or tutorial.** Natural connection to the upcoming playbook.

**Phase 2C: Community Distribution (when ready)**
8. **Do NOT distribute to communities immediately.** Publish, measure organic engagement (GA4, upvotes, shares), and iterate on content quality. Distribute selectively once engagement signals confirm the content is resonating. Lead with the highest-performing post, not necessarily the first one published. See CONTENT_STRATEGY.md "Distribution Philosophy" for full rationale.

---

**Critical constraints:**

- **All article copy is written by Emilio, not AI.** See CONTENT_STRATEGY.md "Writing Collaboration Model" for the full breakdown of who does what. Agent does NOT write or rewrite article prose. Agent role: outlining (collaboratively), SEO optimization, screenshot styling, headline formatting, internal/external linking, Markdown formatting.
- **All public-facing content uses "we" (not "I").** WorkMultiple reads as a team, not a solo founder.
- **No em dashes** in any public-facing copy.

---

**Technical context:**

- Astro project: `02 - Website/workmultiple-site/`
- Content collection: `src/content/blog/` (Markdown, currently empty)
- Content schema: title (string), description (string), date (string), author (string, default 'WorkMultiple')
- GitHub repo: `github.com/WorkMultiple/workmultiple-site` (WorkMultiple account, not leodotbiz)
- Netlify Function format: v1 handler (`export const handler`), served at `/.netlify/functions/<filename>`
- To deploy: push to GitHub repo. Netlify auto-builds on push to main. PAT required for GitHub auth (ask Emilio when needed).
- Key dependencies: Astro 5.5, Sharp (image optimization), Shiki (syntax highlighting), @astrojs/sitemap, @astrojs/rss

---

**Key reference files:**

- `03 - Content/Article 1 - Pivot Story/OUTLINE.md` — Complete outline for the first article
- `WM_Legacy/` — All materials from the agency era (source content for articles and playbooks)
- `WM_Legacy/00 - Context/DECISIONS.md` — Full iterative decision history across 5 working sessions (important context for Article 1)

**How we work:** One step at a time. Present your approach, wait for my approval, build, show the result, wait for confirmation. Ask clarifying questions before giving detailed answers. Do not use em dashes in public-facing copy. Do not revisit settled decisions in DECISIONS.md.
