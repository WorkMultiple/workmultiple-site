# Handoff: Article 1 SEO Optimization & Publish Prep

> **Paste this entire file as your opening prompt when starting the new session.**

---

## Your Directive

You are an agent working on the WorkMultiple project. Your task is to review, optimize, and prepare Article 1 for publication. All article copy was written by Emilio (the human). You do NOT rewrite his voice or generate new prose. Your role is structural, technical, and optimization-focused.

Start by reading the following context files in this order:

1. `00 - Context/BRAND.md` — Voice, copy rules, visual direction
2. `00 - Context/CONTENT_STRATEGY.md` — Content engine, collaboration model, SEO approach
3. `00 - Context/WEBSITE_REQUIREMENTS.md` — Site architecture, current state, SEO considerations
4. `00 - Context/ROADMAP.md` — Current phase and status
5. `00 - Context/DECISIONS.md` — Settled decisions (do not revisit unless asked)

Then read the article itself:

6. `02 - Website/workmultiple-site/src/content/blog/ai-automation-agency-build/index.mdoc`

---

## What You Need to Do

### 1. Error Review
- Read the full article and flag any spelling, grammar, or punctuation errors
- Check for broken image paths or missing alt text
- Verify all Markdoc component syntax is correct (prompt-block tags, video-embed tags)
- Check heading hierarchy (no skipped levels, logical structure)
- Flag any copy rule violations (see BRAND.md Copy Rules, especially: no em dashes in public-facing content)

### 2. SEO Optimization
- Write or refine the `description` field in frontmatter (meta description, 150-160 characters, sells the click)
- Ensure the H1 (title) contains relevant keywords
- Check heading structure for SEO (target keywords in H2s where natural)
- Recommend any improvements to the title for search performance (present options, don't change without approval)
- Verify Open Graph and Twitter Card meta tags will work correctly with the frontmatter fields

### 3. Internal and External Linking
- Add internal links where relevant (currently the site has a blog listing at /blog and homepage at /; more articles will come later, so internal linking will be limited for now)
- Recommend external links to tools, platforms, or resources mentioned in the article (e.g., Claude, Anthropic, Cowork, Netlify, Beehiiv, etc.)
- Ensure all links open correctly and are not broken
- Any affiliate link opportunities should be flagged for Emilio's decision

### 4. Schema Markup
- Recommend or implement Article schema (JSON-LD) for the blog post template if not already present
- This benefits all posts, not just Article 1

### 5. Screenshot and Media Review
- Verify all images render correctly
- Check that images have appropriate alt text for accessibility and SEO
- Verify embedded videos (WebM format) are correctly referenced and will autoplay on scroll
- The article uses two video embeds stored in `public/blog-videos/ai-automation-agency-pivot/` (note: the video folder uses the old slug "pivot" while the article folder uses "build")

### 6. Final Recommendations
- Any suggestions to improve readability, scannability, or engagement
- Recommendations for the email CTA at the bottom of the post
- Any other observations that would make this article stronger before it goes live

---

## Important Constraints

- **Do NOT rewrite Emilio's prose.** You can flag issues and suggest changes, but the voice is his.
- **No em dashes** in any public-facing content.
- **The article is currently in draft status.** Do not change it to published. Emilio will flip it to published after reviewing your optimizations.
- **Author is "Emilio Villareal"** for this article (personal narrative). This is intentional.
- **Present all recommendations to Emilio for approval** before making changes to the article content. For technical changes (schema markup, meta description, alt text), you can implement directly.

---

## Technical Context

- **Framework:** Astro 5.x with Markdoc content format
- **CMS:** Keystatic (local git-based, admin at /keystatic in dev mode)
- **Content format:** Markdoc (.mdoc) files in `src/content/blog/[slug]/`
- **Custom components available in articles:**
  - `prompt-block` — Copyable AI prompt block (attributes: `label`, `prompt`)
  - `video-embed` — Autoplay-on-scroll video (attributes: `src`, `alt`)
- **Images:** Stored in `public/blog-images/ai-automation-agency-build/`
- **Videos:** Stored in `public/blog-videos/ai-automation-agency-pivot/` (WebM format, VP9 codec)
- **Blog post template:** `src/pages/blog/[id].astro`
- **Deployment:** GitHub to Netlify (auto-deploy on push to main)
- **Repo:** github.com/WorkMultiple/workmultiple-site

---

## After You're Done

Update `00 - Context/ROADMAP.md` to mark step 9c as COMPLETE and note what was done. Add any new decisions to `00 - Context/DECISIONS.md`.
