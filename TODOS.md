# TODOS

## 1) V2 contact form backend

- **What:** Add a production contact form backend (provider-backed or custom) and replace/augment link-only contact flow.
- **Why:** If visitors click CTA but do not complete inquiry via mail/LinkedIn, form friction reduction can improve conversion.
- **Pros:** Higher inquiry completion potential, structured submissions, better follow-up workflow.
- **Cons:** Spam mitigation, validation, delivery reliability, and ongoing maintenance.
- **Context:** V1 now includes explicit CTA contract and event tracking (`cta_primary_click`, `cta_secondary_click`). Use V1 KPI baseline before implementing.
- **Depends on / blocked by:** Stable V1 traffic baseline, analytics signal, provider decision (Resend/Formspree/custom).

## 2) V2 view-source interaction layer

- **What:** Add optional "view source" interaction that reveals implementation details of selected sections.
- **Why:** Strengthens dev-facing differentiation and referral potential without changing core hiring-conversion flow.
- **Pros:** Memorable technical signature, stronger peer credibility, reinforces craftsmanship narrative.
- **Cons:** Added complexity, JS budget pressure, risk of feeling gimmicky if overdone.
- **Context:** Explicitly deferred from V1 to protect launch focus and reliability targets.
- **Depends on / blocked by:** V1 shipped and stable, perf budgets consistently passing, design pass for restrained interaction behavior.

## 3) V2 dynamic OG image generation

- **What:** Generate dynamic Open Graph images per page/project for richer social sharing previews.
- **Why:** Improves presentation quality when links are shared in LinkedIn, Slack, and social channels.
- **Pros:** Better share CTR potential, stronger first impression, consistent brand polish.
- **Cons:** Additional rendering/tooling complexity beyond static OG assets.
- **Context:** Not required for V1 launch quality, but valuable once visual theme and metadata stabilize.
- **Depends on / blocked by:** Finalized visual theme tokens and stable project metadata schema.

## ~~4) Hero tagline brainstorming~~ RESOLVED

> **Resolved:** "Less complexity, more software."
> Brainstormed across 4 rounds. Locked after weighing against runner-up.

- **What:** Write the hero tagline — a belief-driven value prop that sounds like you, reveals craft values, and communicates what you bring. One sentence.
- **Why:** The tagline is the first substantive text a LinkedIn visitor reads (step 2 in the user journey storyboard). It needs to create the "this person thinks like me" reaction. Currently marked as TBD in the plan.
- **Pros:** Strong tagline converts curious visitors into engaged readers who keep scrolling.
- **Cons:** Easy to overthink. Risk of landing on something generic.
- **Context:** Anti-slop rules explicitly prohibit generic taglines ("Welcome to my portfolio", "Your all-in-one solution"). The plan calls for an A+B hybrid: personality + usefulness. This should be done via a brainstorming session, not improvised during implementation.
- **Depends on / blocked by:** Nothing — this can be done anytime before implementation starts. Should be done BEFORE scaffold step.
- **Priority:** Pre-V1 blocker. Content shapes design.
