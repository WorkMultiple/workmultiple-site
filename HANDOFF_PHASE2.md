# Handoff Prompt for Phase 2

Copy and paste this prompt to start a new session with a new agent.

---

I'm Emilio, founder of WorkMultiple. You are picking up where a previous agent left off. Before doing anything, read these files in order:

1. `00 - Context/BRAND.md`
2. `00 - Context/BUSINESS.md`
3. `00 - Context/WEBSITE_REQUIREMENTS.md`
4. `00 - Context/ROADMAP.md` (most important for understanding current status)
5. `00 - Context/CONTENT_STRATEGY.md`
6. `00 - Context/DECISIONS.md`

**What has been accomplished (Phase 0 and Phase 1 are complete):**

Phase 0 created the context architecture for the new playbook/authority model. Phase 1 built and deployed the WorkMultiple site. The site is live at workmultiple.com, built with Astro, and deployed via GitHub integration to Netlify (auto-deploys on push to main). The Astro project lives at `02 - Website/workmultiple-site/`. GitHub repo: `github.com/WorkMultiple/workmultiple-site`.

The site includes: a homepage (hero, credibility section, latest articles with auto-population from blog content collection, playbooks teaser, native email capture form), a blog section (listing page + individual post template using Astro content collections for Markdown posts in `src/content/blog/`), privacy page, terms page, custom 404 page, GA4 tracking, sitemap, robots.txt, Open Graph/Twitter Card meta tags, and a favicon. The site uses a premium dark theme with Electric Cyan (#00e5ff) and Indigo (#6366f1) accents on a Deep Zinc (#09090b) background.

The email capture form is a custom native component (`src/components/EmailCapture.astro`) with a gradient button that submits to a Netlify Function (`netlify/functions/subscribe.mjs`, v1 handler format using `export const handler`). The function proxies submissions to the Beehiiv API. Environment variables `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID` are configured in Netlify. Subscribers are confirmed flowing into Beehiiv.

**What we are working on now (Phase 2):**

Write and publish the first 3 free articles. See ROADMAP.md Phase 2 and CONTENT_STRATEGY.md for the full plan. The sequence is:

1. **Article 1: The Pivot Story** - "How I built an entire AI automation agency and why I stopped before signing a single client." This is a personal narrative/authority piece. Primary value is community distribution and credibility, not SEO. It naturally leads to the first playbook. See CONTENT_STRATEGY.md for the full brief.
2. **Distribute Article 1** to Reddit (r/entrepreneur, r/SideProject, etc.), Indie Hackers, Twitter/X (@WorkMultipleAI), and LinkedIn.
3. **Article 2: Tool comparison or workflow breakdown** drawn from agency build research. Targets SEO. Include affiliate links where appropriate.
4. **Article 3: Second tool comparison or tutorial.** Natural connection to the upcoming playbook.

To publish articles: create Markdown files in `02 - Website/workmultiple-site/src/content/blog/`. The blog content collection is already configured. Blog posts use frontmatter with `title`, `description`, `date`, and `tags` fields. The blog listing page and individual post template will auto-populate.

**Technical context for publishing:**
- To deploy changes, the code needs to be pushed to the GitHub repo (`github.com/WorkMultiple/workmultiple-site`). This requires a GitHub Personal Access Token for the WorkMultiple account with "Contents: read and write" permission. I can provide the PAT when needed.
- Netlify auto-builds on push to main.

**How we work:** One step at a time. Present your approach, wait for my approval, build, show the result, wait for confirmation. Ask clarifying questions before giving detailed answers. Do not use em dashes in public-facing copy. Do not revisit settled decisions in DECISIONS.md.
