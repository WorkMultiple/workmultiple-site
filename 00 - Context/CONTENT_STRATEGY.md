# WorkMultiple - Content Strategy

> **How we create, publish, and distribute content.** This file defines the content engine that drives organic traffic, affiliate revenue, and (eventually) playbook sales.

---

## Two-Track Content Model

WorkMultiple produces content on two tracks with different authorship, voice, quality bars, and cadence.

### Track A: Emilio Originals (1-2 per month)

Personal deep-dive builds where Emilio tests a tool, builds something real, and documents it. These are the credibility anchors for the brand.

**Author:** Emilio Villareal
**Voice:** First-person narrative ("I built...", "I tested...")
**Quality bar:** Hands-on testing, screenshots, video demos, exact prompts and settings. Implementation-ready.
**Cadence:** 1-2 per month, as opportunities arise. These take 2-3+ days each. Emilio is not the bottleneck; these publish when they're ready.
**Examples:** Article 1 ("I Built an AI Automation Agency in 15 Hours") is the template. Future originals could cover a specific tool deep-dive, a real business problem solved end-to-end, or a workflow automation build.
**Role of AI:** Collaborates on outline, handles SEO optimization, screenshot styling, formatting, and publish prep. Does not write or rewrite article prose.

### Track B: Content Engine (3-5 per week)

AI-generated, research-based articles targeting commercial-intent search queries. These drive organic traffic and carry affiliate links (once programs are approved). Emilio reviews every draft before publish but does not write the copy.

**Author:** WorkMultiple
**Voice:** Brand voice (first-person plural "we" or neutral third-person). Direct, opinionated where warranted, no personal narrative.
**Quality bar:** Thoroughly researched, accurate, and genuinely useful. Deeper and more specific than generic "Top 10" content. When we have hands-on experience with a tool, we say so. When we don't, we're transparent about the basis of our assessment.
**Cadence:** 3-5 articles per week, produced in weekly batches.
**Content types (in priority order):**

1. **Single-tool profiles:** Deep informational pages on what a tool does, pricing, who it's for, strengths, weaknesses, and alternatives. These also serve as future entries for the tool directory page.
2. **Tool-vs-tool comparisons:** Head-to-head comparisons for specific use cases ("X vs Y for [task]").
3. **Category roundups:** "Best AI tools for [specific use case]." Opinionated, with a clear recommendation.
4. **How-to guides featuring specific tools:** Practical tutorials centered on a tool's capabilities.

**Scope:** AI/automation tools are the primary focus, but tools with AI-integrated features in adjacent categories (project management, CRM, email marketing, etc.) are in scope.

### How the Two Tracks Work Together

Emilio Originals provide tested credibility that no pure AI content site can match. Content engine articles provide the volume and SEO coverage needed to drive traffic and affiliate revenue. The combination is the differentiator: a content library that is both deep (originals) and wide (engine).

Internal linking connects the two tracks. A content engine article about a tool can reference an Emilio Original that tested it. An Emilio Original can link to related content engine articles for tools mentioned in passing.

---

## Weekly Content Production Workflow

### How a Content Engine Batch Gets Produced

1. **Topic selection:** At the start of each week, identify 3-5 tools or topics to cover. Selection is based on: keyword opportunity (search volume + low competition), affiliate program availability, relevance to the WorkMultiple audience, and natural internal linking opportunities. Emilio and AI collaborate on topic selection; Emilio can also assign specific topics.
2. **Research and drafting:** For each topic, AI conducts web research (product pages, documentation, pricing, reviews, competitor comparisons) and produces a complete draft as a Markdoc file with frontmatter, SEO metadata, and proper formatting for the Astro blog.
3. **Weekly review spreadsheet:** All drafted articles are compiled into a spreadsheet delivered to Emilio at a consistent time each week. Each row contains: article title, target keyword, draft link, and a status column (Pending Review / Approved / Needs Revision / Rejected).
4. **Emilio reviews:** Emilio clicks each draft link, reads the content, and marks the status in the spreadsheet. For articles that need revision, Emilio adds notes in a comments column.
5. **Publish:** Approved articles are formatted for the Astro content collection, placed in the correct directory structure, and prepared for deployment. The goal is a one-click (or near one-click) publish from the spreadsheet.

### Cowork Automation Skills (To Build)

The following Cowork skills and scheduled tasks support this workflow:

1. **Article Drafting Skill:** Takes a tool name or topic, conducts web research, and produces a complete Markdoc draft with frontmatter, SEO metadata, affiliate link placeholders, and formatting for the Astro blog content collection.
2. **Weekly Content Batch (Scheduled Task):** Runs on a set schedule (e.g., every Monday morning). Generates the week's batch of 3-5 drafts using the Article Drafting Skill and produces the review spreadsheet with links to each draft.
3. **Publish Prep Skill:** Takes an approved draft, places it in the correct `src/content/blog/[slug]/` directory, generates any needed assets, and prepares for a git push to deploy.

These are built incrementally. The Article Drafting Skill is the first priority. The scheduled task and publish skill follow once drafting quality is validated.

---

## Content Engine Article Types (Detailed)

### Single-Tool Profiles

The primary content type. Each profile is a comprehensive page about one tool.

**Structure:**
- What the tool does (plain language, no marketing fluff)
- Who it's for (specific use cases and user types)
- Key features (the ones that matter, not an exhaustive feature list)
- Pricing breakdown (tiers, what you get at each level, hidden costs)
- Strengths (be specific)
- Weaknesses (be honest; this is what differentiates us from the tool's own marketing)
- Alternatives (with links to our profiles/comparisons where they exist)
- Verdict (clear, opinionated recommendation on who should and shouldn't use this tool)

**SEO targeting:** "[Tool name] review," "what is [tool name]," "[tool name] pricing," "[tool name] alternatives."

**Affiliate connection:** Each profile includes an affiliate link (when available) as a natural CTA: "Try [tool] free" or "See [tool] pricing."

### Tool-vs-Tool Comparisons

Head-to-head comparisons for a specific task or use case.

**Structure:**
- The specific problem or task being solved
- Brief intro to each tool (with links to full profiles)
- Side-by-side comparison on the dimensions that matter for this use case
- Clear winner with reasoning
- "Choose X if... Choose Y if..." decision framework

**SEO targeting:** "[Tool A] vs [Tool B]," "[Tool A] vs [Tool B] for [use case]."

### Category Roundups

"Best tools for [specific use case]" articles.

**Structure:**
- The problem or workflow being addressed
- Selection criteria (how and why these tools were chosen)
- Each tool with a brief assessment (links to full profiles)
- Clear top pick with reasoning
- Runner-up and budget picks

**SEO targeting:** "Best AI tools for [use case]," "best [category] tools for small business."

### How-To Guides Featuring Tools

Practical tutorials centered on accomplishing a specific task using specific tools.

**Structure:**
- The problem being solved
- Tool(s) used and why
- Step-by-step walkthrough
- Expected results
- Troubleshooting common issues

**SEO targeting:** "How to [accomplish task] with [tool]," "how to automate [process]."

---

## Tool Directory Page (Future: ~6 Weeks Out)

Once 20-30 tools have been profiled in content engine articles, build a dedicated tool directory page on the site. This page aggregates all reviewed tools with short profiles, category tags, and links to the full article.

**How it differs from futuretools.io:** Deeper individual profiles, opinionated assessments (not just listings), and clear recommendations. Each directory entry links to the full WorkMultiple article, not just the tool's website.

**SEO value:** The directory page targets broad category searches ("AI tools for business," "automation tools directory") while individual articles target specific tool and comparison queries. Together they create an internal linking web that boosts both.

**Affiliate value:** Each directory entry includes an affiliate link (when available) alongside the link to the full article. Two touchpoints for conversion.

**Build sequence:** Publish content engine articles for 4-6 weeks (building up 20-30 tool profiles), then build the directory page and backfill all reviewed tools. As affiliate programs approve, add links to both the directory entries and the articles.

---

## Affiliate Strategy

Affiliate revenue is the near-term monetization model. Playbook sales come later once the brand has traffic, an email list, and established authority.

### Approach

Start publishing content now without affiliate links. Build the content library and SEO footprint first. Apply to affiliate programs in parallel. When programs approve, retrofit links into existing articles and add them going forward.

### Rules

- Recommend the best tool for the job, period. Never let affiliate potential influence recommendations.
- Always disclose affiliate relationships (FTC required, and it builds trust).
- Affiliate links go in content engine articles, Emilio Originals (where relevant), and the tool directory page.
- Prioritize programs with recurring commissions (SaaS monthly billing) over one-time payouts.

### Priority Affiliate Programs

**Apply immediately (low barrier, approve most sites):**
- Amazon Associates (books and products referenced in content)
- Impact.com network (access to multiple SaaS programs through one platform)
- ShareASale network (similar to Impact)

**Apply as content builds (may want to see traffic/content first):**
- Netlify (referral program, already mentioned in Article 1)
- Beehiiv (already using it, natural fit)
- Zapier, Make (automation tools, core to our audience)
- Notion, Airtable (productivity/workflow tools with AI features)
- n8n (already mentioned in Article 1)
- Individual AI tool programs (Claude/Anthropic, OpenAI, Jasper, etc.) as reviewed

**Chicken-and-egg strategy:** Some programs approve sites with minimal content (Amazon, Impact, ShareASale). Apply to these first. Build content for 4-6 weeks, then apply to selective SaaS-direct programs that want to see traffic.

---

## SEO Approach

**Target keywords:** Commercial-intent, long-tail queries that non-technical business owners search for. Not "AI tools" (too broad) but "[specific tool] review," "[tool A] vs [tool B]," "best AI tool for [specific task]."

**Keyword research:** Informs both content engine topic selection and Emilio Original topics. Identify what the target audience is actively searching for related to AI tools, automation, and workflow optimization.

**On-page SEO basics:**
- Clear H1 with target keyword
- Meta description that sells the click
- Internal links between related articles, to tool directory entries, and to playbook sales pages (when they exist)
- Alt text on all images
- Fast page load (Astro + Netlify handles this)
- Schema markup (Article JSON-LD on all blog posts)

**Content velocity:** 3-5 content engine articles per week plus 1-2 Emilio Originals per month. Volume matters for SEO coverage, but every article must clear the quality bar.

---

## How Free Content Funnels to Revenue

### Near-Term: Affiliate Revenue

Content engine articles and tool directory entries include affiliate links for reviewed tools. Revenue scales with traffic volume.

### Future: Playbook Sales

Every article should have a natural connection to a relevant playbook when playbooks are available. The connection is contextual, not forced. A tool comparison article links to the playbook that walks through full implementation. A tutorial on basic setup links to the playbook covering advanced configuration.

**Placement:** In-content callouts (not pop-ups, not aggressive banners). "Want the full implementation? The [Playbook Name] covers [what's included] with exact steps, prompts, and troubleshooting."

---

## Distribution Philosophy

**Do not distribute to communities immediately upon publication.** Brand reception and authority are fragile. Premature exposure to an early-stage content library risks permanent dismissal from the communities we want to build credibility in.

**The approach:**

1. **Publish and measure organically.** Use GA4, on-site upvotes, and share activity to gauge engagement across multiple posts.
2. **Iterate and improve.** Use engagement data to refine content quality, formatting, and headlines.
3. **Distribute selectively.** Once a post shows strong organic engagement signals, distribute that specific post to communities. Not every post gets distributed.
4. **Build credibility with proven content.** The first impression in any community should be the best content we have, not the first content we published.

### Channels (When Ready)

**Reddit:** r/smallbusiness, r/entrepreneur, r/artificial, r/SideProject. Post genuinely useful content. Participate in discussions.
**Indie Hackers:** Share lessons learned, tool comparisons, and building-in-public updates.
**Twitter/X ([@WorkMultipleAI](https://x.com/WorkMultipleAI)):** Short-form versions of article insights. Thread breakdowns.
**LinkedIn:** Longer-form posts about AI workflow automation for business owners.

### What NOT to Do

- No paid ads (not yet; organic first to validate demand).
- No YouTube, no podcast (not a fit right now).
- No DMs or outbound. The content does the selling.
- No buying email lists or spamming communities.

---

## Media Workflow: Videos in Articles

Screen recordings and short video clips are embedded inline in Emilio Originals using the Video Embed component in Keystatic. Videos autoplay (muted, looped) when the reader scrolls them into view, with pause and fullscreen controls on hover. Content engine articles typically do not include video.

**How to add a video to an article:**

1. Emilio records the screen capture (any format, typically MP4).
2. Agent converts the MP4 to WebM (VP9 codec, no audio, scaled to 1280px width) using ffmpeg. This typically reduces file size by 80-90%.
3. Converted file goes to `public/blog-videos/[post-slug]/` with a descriptive filename.
4. In Keystatic, insert a Video Embed block and enter the path: `/blog-videos/[post-slug]/filename.webm`.
5. The original MP4 source files are kept in `03 - Content/Article [N]/` for reference but are not deployed.

**Conversion command reference:** `ffmpeg -i input.mp4 -an -c:v libvpx-vp9 -b:v 0 -crf 35 -vf "scale=1280:-2" -deadline good -cpu-used 2 -row-mt 1 output.webm`

## Media Workflow: Screenshots in Articles

Screenshots are added via drag-and-drop in the Keystatic editor. Each upload gets a unique filename automatically (timestamp-based suffix). Images are stored in `public/blog-images/[post-slug]/` and deployed with the site.

---

## Email Capture

Build an email list from day one. Every article and the homepage should offer a reason to subscribe.

**Lead magnet options:**
- Free mini-guide (e.g., "5 AI workflows any business owner can set up this week")
- Early access to new playbooks
- Weekly or biweekly newsletter with the latest tool tests and findings

**Email platform:** Beehiiv. Live at site launch (Phase 1). Automated welcome sequence required from day one.

**Frequency:** Biweekly newsletter to start. Increase to weekly if content velocity supports it.
