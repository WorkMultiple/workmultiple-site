## Context

You are continuing work on the WorkMultiple project. Start by reading these context files in order:

1. `00 - Context/BUSINESS.md`
2. `00 - Context/BRAND.md`
3. `00 - Context/CONTENT_STRATEGY.md`
4. `00 - Context/ROADMAP.md`
5. `00 - Context/DECISIONS.md`

## Where We Left Off

All 5 batch 1 content engine articles are published and live on production. They were published early (2026-03-11) during homepage redesign work, ahead of the original staggered Tue-Fri schedule. The remaining scheduled publish tasks (Reclaim AI, Beehiiv, Jasper vs Copy.ai) have been disabled since the articles are already live.

**Published articles (all live on main):**
- I Built an AI Automation Agency in 15 Hours (Emilio Original, 2026-03-05)
- Notion AI Review (2026-03-10)
- Zapier vs Make (2026-03-11)
- Beehiiv Review (2026-03-09)
- Reclaim AI Review (2026-03-09)
- Jasper vs Copy.ai (2026-03-09)

**Homepage redesign v2 complete.** Hero replaced with a featured article carousel (3 latest posts, auto-advance, vanilla JS). Uniform image card grid below. Background effects preserved. Fully responsive.

**Card image pipeline updated.** The Satori generation script now fetches tool logos from the web and embeds them in card images. Logo registry maps tool names to domains. Logos are cached locally in `scripts/logos/`. Emilio needs to run `npm run generate-cards:force` locally to regenerate all card images with logos, then push the updated PNGs.

**Important git note:** The agent environment does not have GitHub credentials. All pushes must be done by me from my terminal in the `02 - Website/workmultiple-site` directory.

## Key Infrastructure

- **Site repo:** `02 - Website/workmultiple-site` (Astro + Markdoc, deployed via GitHub to Netlify)
- **Production URL:** workmultiple.com
- **Netlify dashboard site:** zippy-peony-3698b7.netlify.app
- **Preview system:** `content-preview` branch deploys to `content-preview--zippy-peony-3698b7.netlify.app/blog/[slug]`
- **Draft storage:** `content-engine-drafts/[article-slug]/index.mdoc`
- **Review spreadsheet:** `content-engine-drafts/batch-1-review-v2.xlsx`
- **Affiliate signup guide:** `content-engine-drafts/AFFILIATE_SIGNUP_GUIDE.md`
- **Weekly Content Batch task:** Runs Mondays at 8 AM (generates 3-5 drafts + review spreadsheet)

## Immediate Priorities

1. **Regenerate card images with logos** -- Run `npm run generate-cards:force` from the site directory. This fetches tool logos and regenerates all card PNGs. Then push the updated images.

2. **Affiliate program signups** -- I still need to sign up for Amazon Associates, Impact.com, and ShareASale using the guide at `content-engine-drafts/AFFILIATE_SIGNUP_GUIDE.md`. Remind me if I haven't done this yet.

3. **Build Publish Prep Skill** -- A Cowork skill that automates the publish workflow (copy approved draft to main, set status, update date, remove from preview, commit). This will replace the manual/scheduled approach used for batch 1.

4. **Batch 2 planning** -- The Weekly Content Batch task should have produced the next batch of topics on Monday. Review what it generated and proceed with drafting.

## Copy Rules Reminder

- No em dashes in any public-facing content
- Content engine articles are authored by "WorkMultiple" (not "I")
- Emilio Originals are authored by "Emilio Villareal"
- All articles need a `## Sources` section with numbered links
- Replace AFFILIATE_LINK_PLACEHOLDER with real product URLs (not affiliate links yet)
