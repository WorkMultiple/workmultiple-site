# Phase 1: Minimal Site Build — Agent Handoff Prompt

## Context

I'm Emilio, founder of WorkMultiple. We are building a content-driven authority brand that helps non-technical people use AI to get more done. We sell premium playbooks ($197–$497), publish free practical content (tool comparisons, tutorials, workflow breakdowns), and plan to eventually offer a $49/month membership.

The brand, business model, positioning, and all strategic decisions are already defined in context files. Your job is to execute Phase 1 of the roadmap: building and deploying a minimal version of the site.

## Your First Task

Read the following files in this order before doing anything else. Do not start building until you've read all of them and confirmed your understanding with me.

1. `00 - Context/BRAND.md` — Voice, visual identity, copy rules, positioning, key messages. Required before producing any content or design.
2. `00 - Context/BUSINESS.md` — What WorkMultiple is, who it serves, the business model, infrastructure.
3. `00 - Context/WEBSITE_REQUIREMENTS.md` — Full site requirements including the "Launch Strategy: Minimal Site First" section at the top. This is the most important file for this phase. Pay close attention to what is needed at launch vs. what is deferred.
4. `00 - Context/ROADMAP.md` — Current status and Phase 1 steps. This tells you exactly what needs to be done and in what order.
5. `00 - Context/CONTENT_STRATEGY.md` — How content works, email capture requirements, distribution channels. Relevant for understanding how the blog and email capture should be set up.
6. `00 - Context/DECISIONS.md` — Settled decisions. Do not revisit these unless I explicitly ask. But you should add to it as we make decisions.

After reading all six files, summarize what you understand Phase 1 requires and confirm it with me before proceeding.

## How We Work

**One step at a time.** Do not batch multiple steps together. Complete one step, confirm the result with me, and then move to the next. Specifically:

- Present your approach for each step before executing it.
- Wait for my approval before building anything.
- After completing each step, show me the result and wait for confirmation before moving on.
- If you have questions or see multiple valid approaches, ask me before choosing.

## Phase 1 Steps (from ROADMAP.md)

These are the steps, in order:

1. **Select static site generator (Astro or 11ty).** Present a recommendation with reasoning. Wait for my decision.
2. **Set up Beehiiv integration.** Beehiiv is already selected (see DECISIONS.md). Figure out how to embed the signup form into the site. Present the approach.
3. **Build the homepage.** Hero with updated positioning (H1/H2 from BRAND.md), brief credibility section, email capture form (Beehiiv), and a "Playbooks coming soon" teaser section. Present a wireframe or content outline before building.
4. **Build the blog section.** Clean URLs, proper heading hierarchy, meta descriptions, Open Graph tags. SEO foundations from WEBSITE_REQUIREMENTS.md apply. Can include a placeholder post or be empty at launch — confirm with me.
5. **Deploy to Netlify.** Replace the current agency site at workmultiple.com.

## Important Preferences

- Ask me clarifying questions before giving detailed answers.
- When providing copy that will be public-facing (like on the website), do not use em dashes.
- No jargon. Outcomes first. See the copy rules in BRAND.md.
- The brand stands alone. WorkMultiple is the entity, not a founder-led personal brand.
- I want to enjoy building this. If something feels heavy or off, I'll say so.

## What You Should NOT Do

- Do not build the about page, playbooks listing page, individual playbook sales pages, or updated privacy/terms pages. Those are deferred to Phase 4.
- Do not set up a payment platform. That is Phase 3.
- Do not write blog articles. That is Phase 2.
- Do not revisit any settled decisions in DECISIONS.md.
- Do not proceed to the next step without my explicit go-ahead.
