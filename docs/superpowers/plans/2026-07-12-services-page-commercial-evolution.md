# Services Page Commercial Evolution Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform `/servicos` into a concrete commercial presentation for Automations, Systems and ERPs, and Digital Positioning.

**Architecture:** Preserve the shared layout and `PageHero`, while moving route-specific content and visuals into private files under `app/servicos`. Isolate all new presentation in a CSS Module and use the two supplied AdegaERP screenshots as real product evidence.

**Tech Stack:** Next.js 15, App Router, React 19, TypeScript, Tailwind CSS 3, CSS Modules, Next Image, Lucide React, Playwright.

## Global Constraints

- Keep only three primary service fronts.
- Do not present AI or affiliates as standalone services.
- Keep every commercial CTA pointed at `/contato`.
- Do not add dependencies, forms, APIs, backend, CMS, or checkout.
- Preserve Header, Footer, global identity, and all routes outside `/servicos`.
- Use mobile-first layout, approved breakpoints, fluid type and spacing, and touch targets of at least `2.75rem`.
- Do not remove legacy components or CSS in this task.

---

### Task 1: Structure, hero, and service index

**Files:**
- Create: `app/servicos/content.ts`
- Create: `app/servicos/servicos.module.css`
- Modify: `app/servicos/page.tsx`
- Modify: `data/site-content.ts`

- [x] Replace the generic five-card presentation with a result-oriented hero and three anchor cards.
- [x] Remove the old service data export after confirming its only consumer.
- [x] Verify the page contains only Automations, Systems and ERPs, and Digital Positioning.

### Task 2: Service-specific proof visuals

**Files:**
- Create: `app/servicos/_components/ServiceVisuals.tsx`
- Create: `public/images/services/adega-erp-dashboard.png`
- Create: `public/images/services/adega-erp-financeiro.png`
- Modify: `app/servicos/servicos.module.css`

- [x] Build the automation workflow with semantic HTML and CSS.
- [x] Build the responsive AdegaERP product composition with both supplied screenshots.
- [x] Build the digital presence channel map and before/after comparison.

### Task 3: Responsive and automated validation

**Files:**
- Modify: `tests/smoke.spec.ts`

- [x] Test the three fronts, anchor navigation, contact CTAs, image loading, and removed offers.
- [x] Validate at `375px`, `768px`, notebook width, and `1280px` without document overflow.
- [x] Run lint, TypeScript, build, Playwright, and diff checks.
- [x] Commit and push the validated implementation to `main`.
