# Handoff: Content Engine Session (2026-03-09)

## Context Files to Read First

Read these files in this order before doing anything else:

1. `00 - Context/BRAND.md` — Brand voice, copy rules, positioning
2. `00 - Context/CONTENT_STRATEGY.md` — Full content engine strategy (two-track model, article types, weekly workflow, affiliate strategy, Cowork automation plan)
3. `00 - Context/ROADMAP.md` — Current focus and Phase 2B status
4. `00 - Context/DECISIONS.md` — All decisions made, including the 2026-03-09 session entries

## What Was Accomplished in the Previous Session

1. **Strategic pivot defined and documented.** Moved from "all content written by Emilio" to a two-track model: Emilio Originals (1-2/month, hands-on tested, personal voice) and a Content Engine (3-5/week, AI-generated, WorkMultiple-authored, SEO-optimized tool reviews and comparisons for affiliate revenue). Playbook sales deprioritized; affiliate revenue is the near-term model.

2. **Four context files updated.** CONTENT_STRATEGY.md was fully rewritten. ROADMAP.md was restructured with new phases. DECISIONS.md has 10+ new decisions from this session. BRAND.md quality bar and elevator pitch updated.

3. **Agency-era skills and plugins removed.** icp-builder, lead-list-builder, lead-scorer, outreach-drafter (skills) and wm-sales, sales, common-room (plugins) all uninstalled.

4. **Topic Research Skill built and installed.** Uses web search to find and rank tool/topic candidates. Tested on "AI tools for email marketing" prompt. Produced a ranked list of 10 suggestions with target keywords, article types, affiliate program info, and methodology. Passed 6/6 assertions.

5. **Article Drafting Skill built, tested, and SEO-enhanced.** Produces complete Markdoc drafts with frontmatter for the Astro blog. Tested on two articles: Beehiiv single-tool profile (10/10 assertions) and Zapier vs Make comparison (10/11 assertions, word count slightly under target). After initial testing, the skill was updated with a comprehensive SERP Analysis phase (Phase 1) that runs before writing: analyzes top-ranking content, captures People Also Ask questions, identifies related keywords, and finds competitor content gaps. Reinstalled with the SEO improvements.

## What Needs to Happen Next (in priority order)

1. **Use the Topic Research Skill to identify the first batch of 3-5 tools to profile.** Run the skill with a broad prompt or a specific category. Emilio reviews the suggestions and picks which ones to produce.

2. **Use the Article Drafting Skill to produce the first content engine batch.** Generate 3-5 complete article drafts. These are the first real content engine outputs. Emilio reviews each draft and approves for publish.

3. **Publish approved articles to the Astro blog.** Approved drafts need to be placed in `src/content/blog/[slug]/index.mdoc` with proper frontmatter, then pushed to GitHub for auto-deploy via Netlify.

4. **Apply to easy-approval affiliate programs.** Amazon Associates, Impact.com, ShareASale. Low barrier, apply while content builds.

5. **Build the Weekly Content Batch scheduled task.** A Cowork scheduled task that runs weekly, generates the week's batch of drafts using the Article Drafting Skill, and produces a review spreadsheet with links to each draft and a status column. Build this after the first manual batch validates quality.

6. **Build the Publish Prep Skill.** A Cowork skill that takes an approved draft and places it in the correct Astro content collection directory structure, ready for git push. This closes the loop on one-click publishing.

7. **Build the Tool Directory page (~6 weeks out).** Once 20-30 tools have been profiled, build a dedicated directory page. Design is deeper than futuretools.io with opinionated assessments and affiliate links.

## Important Notes for the Next Agent

- Article 1 ("I Built an AI Automation Agency in 15 Hours") is live at workmultiple.com/blog/ai-automation-agency-build. This is an Emilio Original, not a content engine article.
- Content engine articles use "WorkMultiple" as author and `status: "draft"` in frontmatter. Emilio flips to `published` after review.
- No em dashes in any public-facing content. This is a hard rule.
- The site uses Astro with Keystatic CMS, Markdoc content format (.mdoc files), deployed via GitHub to Netlify.
- Test article drafts from this session are saved at `DRAFT-beehiiv-review.md` and `DRAFT-zapier-vs-make.md` in the workspace root. These are samples only and were not published. They were generated before the SEO-enhanced skill update.
- The `.skill` files (topic-research.skill, article-drafter.skill) in the workspace root are the packaged skill installers. The skills are already installed in Cowork.
