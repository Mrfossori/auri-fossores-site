# Home Spacing Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the Auri Fossores Home vertical length and improve section rhythm without changing its copy, structure, internal pages, dependencies, or brand direction.

**Architecture:** Keep the existing Home markup and shared layout intact. Implement the refinement only through Home-exclusive selectors in `app/globals.css`, using mobile-first rules and scoped overrides so internal pages cannot inherit the new spacing. Preserve all existing routes, content, components, and visual identity.

**Tech Stack:** Next.js 15, App Router, React 19, TypeScript, Tailwind CSS 3, global CSS, Lucide React.

## Global Constraints

- Modify only Home-specific presentation.
- Do not change `/sobre`, `/servicos`, `/produtos`, `/blog`, or `/contato`.
- Do not change Home copy except when strictly required to prevent visual overflow; no copy change is currently planned.
- Do not remove obsolete CSS selectors in this task.
- Do not install dependencies or change the stack.
- Keep the dark background, `#C9A227` accent, off-white text, premium athletic/editorial/technology direction.
- Keep the Home sequence: Header, Hero, short manifesto, compact pillars, “Dentro da Auri”, final CTA, Footer.
- Preserve the three “Dentro da Auri” destinations: `/servicos`, `/produtos`, and `/blog`.
- Use mobile-first CSS with `rem`, `em`, and `clamp()` for typography and spacing.
- Preserve touch targets of at least `2.75rem`.
- Validate at `375px`, `768px`, notebook width, and `1280px`.
- Do not remove duplicated or redundant code without a separately approved cleanup plan.

---

## File Map

### Files to modify

- `app/globals.css`
  - Adjust only selectors exclusive to the Home.
  - Scope shared-looking selectors beneath `.home-hero`, `.home-manifesto`, or `.home-final-cta`.

### Files to create

- None during implementation.

### Files to remove

- None.

### Files explicitly preserved

- `app/page.tsx`
- `app/layout.tsx`
- `app/sobre/page.tsx`
- `app/servicos/page.tsx`
- `app/produtos/page.tsx`
- `app/blog/page.tsx`
- `app/contato/page.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Logo.tsx`
- `components/Card.tsx`
- `components/ProductCard.tsx`
- `components/ArticleCard.tsx`
- `components/PageHero.tsx`
- `components/SectionHeading.tsx`
- `data/site-content.ts`

### Existing elements to reuse

- `Header` and `Footer` from the root layout.
- Existing Home hero image, `Next/Image`, `Next/Link`, and Lucide icons.
- Existing `homePillars` and `gateways` arrays.
- Existing Home classes and semantic structure.

### Duplicated or obsolete code observed but not changed

- `homePillars` overlaps conceptually with `pillars` in `data/site-content.ts`.
- `stats` in `data/site-content.ts` appears unused.
- `Card`, `ProductCard`, `ArticleCard`, and Home gateway cards repeat CTA/card patterns.
- Legacy CSS selectors appear unused: `.manifesto-section`, `.section-topline`, `.text-link`, `.card-grid`, `.preview-grid`, `.pillars-grid`, `.editorial-preview`, and `.final-cta`.
- These items remain untouched and require a separate cleanup plan.

## Selector Isolation Audit

The following selectors were confirmed by repository search to occur only in `app/page.tsx`:

- `.home-hero`
- `.home-hero-grid`
- `.home-hero-media`
- `.home-hero-copy`
- `.home-section`
- `.home-manifesto`
- `.home-section-heading`
- `.home-pillars`
- `.home-pillar`
- `.gateway-grid`
- `.gateway-card`
- `.gateway-meta`
- `.home-final-cta`
- `.manifesto-band`
- `.button-row`
- `.hero-signal`

Despite their current exclusivity, changes to `.manifesto-band`, `.button-row`, and `.hero-signal` must be scoped under Home-specific parents.

---

### Task 1: Record the visual and dimensional baseline

**Files:**
- Modify: none
- Create: none
- Remove: none

**Interfaces:**
- Consumes: Current Home at `/`.
- Produces: Baseline measurements for comparison after Tasks 2–4.

- [ ] **Step 1: Start a clean development server**

Run:

```powershell
npm.cmd run dev -- -H 127.0.0.1 -p 8080
```

Expected: Next.js serves the Home and all existing routes without compilation errors.

- [ ] **Step 2: Record baseline viewports**

Use the Browser viewport capability to inspect:

```text
375 × 812
768 × 1024
1024 × 768
1280 × 800
```

Record for each viewport:

```text
document.documentElement.scrollWidth
window.innerWidth
.home-hero height
.home-section padding-block
.gateway-card width and height
.home-final-cta height
full Home document height
```

Expected: Baseline report includes all four viewports and identifies the largest unnecessary vertical gaps.

- [ ] **Step 3: Capture baseline screenshots**

Capture one full-page screenshot at `375 × 812` and one at `1280 × 800`.

Expected: Screenshots show the existing Home before CSS changes.

**Checkpoint 1:** Confirm the baseline supports reducing hero, section, card, and CTA spacing without changing markup or copy.

---

### Task 2: Tighten the Home hero and manifesto

**Files:**
- Modify: `app/globals.css`
- Create: none
- Remove: none

**Interfaces:**
- Consumes: Existing `.home-hero`, `.home-hero-grid`, `.home-manifesto`, and `.manifesto-band`.
- Produces: A shorter first viewport and a compact manifesto transition.

- [ ] **Step 1: Update base mobile Home spacing**

Replace only the corresponding Home declarations with:

```css
.home-hero-grid {
  display: grid;
  align-content: center;
  gap: clamp(1.5rem, 5vw, 2.5rem);
  padding-block: clamp(2rem, 7vw, 3.5rem);
}

.home-section {
  padding-block: clamp(2.75rem, 7vw, 4rem);
}

.home-manifesto {
  padding-block: clamp(2rem, 6vw, 3rem);
}

.home-manifesto .manifesto-band {
  padding-block: clamp(1.5rem, 4vw, 2rem);
}

.home-manifesto .manifesto-band blockquote {
  max-width: 27ch;
  font-size: clamp(1.7rem, 6.5vw, 3rem);
}
```

Expected: Mobile Home begins with a controlled hero and reaches the pillars sooner while preserving premium breathing room.

- [ ] **Step 2: Update tablet Home overrides**

Inside `@media (min-width: 768px)`, use:

```css
.home-hero-grid {
  min-height: min(39rem, calc(100svh - 5rem));
  grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  align-items: center;
}

.home-section {
  padding-block: clamp(3.25rem, 6vw, 4rem);
}

.home-manifesto {
  padding-block: 2.5rem;
}
```

Expected: Tablet and notebook layouts no longer force the hero or section bands to occupy excessive vertical space.

- [ ] **Step 3: Update large desktop Home overrides**

Inside `@media (min-width: 1280px)`, use:

```css
.home-hero-grid {
  min-height: min(42rem, calc(100svh - 5.25rem));
  grid-template-columns: minmax(0, 1.25fr) minmax(22rem, 0.75fr);
}

.home-section {
  padding-block: 4rem;
}
```

Expected: Desktop retains visual impact without turning the hero or each section into a full-screen block.

- [ ] **Step 4: Run static checks**

Run:

```powershell
npm.cmd run lint
```

Expected: Exit code `0`.

**Checkpoint 2:** Review the hero-to-manifesto and manifesto-to-pillars transitions at `375px`, `768px`, and `1280px`.

- [ ] **Step 5: Commit the hero and manifesto refinement**

Run only after repository branch/worktree approval:

```powershell
git add app/globals.css
git commit -m "style: tighten home hero and manifesto spacing"
```

Expected: One commit containing only Home hero and manifesto CSS.

---

### Task 3: Compact pillars and “Dentro da Auri”

**Files:**
- Modify: `app/globals.css`
- Create: none
- Remove: none

**Interfaces:**
- Consumes: Existing `homePillars` and `gateways` markup from `app/page.tsx`.
- Produces: Compact pillars and three premium navigation cards with unchanged content and links.

- [ ] **Step 1: Reduce Home grid spacing**

Use:

```css
.home-pillars,
.gateway-grid {
  display: grid;
  gap: 0.75rem;
  margin-top: clamp(1.5rem, 5vw, 2.25rem);
}
```

Expected: Both Home grids sit closer to their headings without becoming visually crowded.

- [ ] **Step 2: Compact each pillar**

Use:

```css
.home-pillar {
  display: grid;
  min-height: 4.75rem;
  align-items: center;
  gap: 0.875rem;
  border-top: 0.0625rem solid var(--line);
  padding-block: 0.8rem;
  grid-template-columns: auto 1fr;
}
```

Expected: All six pillars remain readable in one mobile column and three tablet/desktop columns.

- [ ] **Step 3: Compact gateway cards without changing their hierarchy**

Use:

```css
.gateway-card {
  position: relative;
  display: flex;
  min-height: 15.5rem;
  flex-direction: column;
  overflow: hidden;
  border: 0.0625rem solid var(--line);
  border-radius: 0.5rem;
  padding: clamp(1.15rem, 3vw, 1.35rem);
  background:
    linear-gradient(145deg, rgba(245, 240, 232, 0.05), transparent 52%),
    var(--void);
  box-shadow: inset 0 0.0625rem rgba(255, 255, 255, 0.055);
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.gateway-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--gold);
  font-family: Consolas, "JetBrains Mono", monospace;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
}
```

Expected: The cards remain premium and navigable while using less vertical space.

- [ ] **Step 4: Verify link and touch behavior**

Confirm:

```text
Serviços → /servicos
Produtos → /produtos
Editorial → /blog
```

Evaluate:

```javascript
Array.from(document.querySelectorAll(".gateway-card .card-cta")).map((element) => ({
  href: element.getAttribute("href"),
  height: element.getBoundingClientRect().height,
}))
```

Expected: All three links are correct and each rendered height is at least `44`.

**Checkpoint 3:** Review pillars and “Dentro da Auri” at mobile, tablet, notebook, and large desktop.

- [ ] **Step 5: Commit the compact navigation sections**

Run only after repository branch/worktree approval:

```powershell
git add app/globals.css
git commit -m "style: compact home pillars and gateway cards"
```

Expected: One commit containing only pillars and gateway CSS changes.

---

### Task 4: Reduce and rebalance the final CTA

**Files:**
- Modify: `app/globals.css`
- Create: none
- Remove: none

**Interfaces:**
- Consumes: Existing `.home-final-cta` markup and unchanged contact/Instagram links.
- Produces: A shorter closing section with preserved CTA hierarchy.

- [ ] **Step 1: Update the Home-only CTA container**

Use:

```css
.home-final-cta {
  position: relative;
  display: grid;
  gap: clamp(1.25rem, 4vw, 1.75rem);
  overflow: hidden;
  border: 0.0625rem solid rgba(201, 162, 39, 0.5);
  border-radius: 0.5rem;
  padding: clamp(1.5rem, 5vw, 2.75rem);
  color: var(--obsidian);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 40%),
    var(--gold);
}

.home-final-cta h2 {
  margin: 0.6rem 0 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.9rem, 7vw, 3.5rem);
  font-weight: 500;
  line-height: 1;
}

.home-final-cta p {
  max-width: 42rem;
  margin: 0.75rem 0 0;
  color: rgba(17, 17, 17, 0.72);
  font-size: 0.92rem;
  line-height: 1.6;
}
```

Expected: CTA remains visually strong while consuming less height.

- [ ] **Step 2: Verify CTA links**

Confirm:

```text
Entrar em contato → /contato
Ver Instagram → https://instagram.com/aurifossores
```

Expected: Both links remain unchanged and keyboard-accessible.

- [ ] **Step 3: Run lint**

Run:

```powershell
npm.cmd run lint
```

Expected: Exit code `0`.

**Checkpoint 4:** Compare final CTA height and page ending against baseline screenshots.

- [ ] **Step 4: Commit the CTA refinement**

Run only after repository branch/worktree approval:

```powershell
git add app/globals.css
git commit -m "style: rebalance home final call to action"
```

Expected: One commit containing only final CTA CSS.

---

### Task 5: Validate Home and protect internal pages

**Files:**
- Modify: none
- Create: none
- Remove: none

**Interfaces:**
- Consumes: Completed Home CSS adjustments.
- Produces: Verification evidence that the implementation meets acceptance criteria without internal-page regressions.

- [ ] **Step 1: Scan for scope violations**

Run:

```powershell
git diff --name-only
```

Expected:

```text
app/globals.css
```

- [ ] **Step 2: Confirm no internal-page files changed**

Run:

```powershell
git diff -- app/sobre app/servicos app/produtos app/blog app/contato components data
```

Expected: No output.

- [ ] **Step 3: Confirm obsolete CSS was not removed**

Run:

```powershell
rg -n "^\\.manifesto-section|^\\.section-topline|^\\.text-link|^\\.card-grid|^\\.editorial-preview|^\\.final-cta" app/globals.css
```

Expected: Existing selector definitions remain present.

- [ ] **Step 4: Run full static validation**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected: Both commands exit with code `0`; all six routes are generated.

- [ ] **Step 5: Run responsive Browser validation**

At `375 × 812`, `768 × 1024`, `1024 × 768`, and `1280 × 800`, evaluate:

```javascript
({
  viewportWidth: window.innerWidth,
  scrollWidth: document.documentElement.scrollWidth,
  hasHorizontalOverflow:
    document.documentElement.scrollWidth > window.innerWidth,
  heroHeight:
    document.querySelector(".home-hero")?.getBoundingClientRect().height,
  homeHeight: document.documentElement.scrollHeight,
  gatewayColumns:
    getComputedStyle(document.querySelector(".gateway-grid")).gridTemplateColumns,
})
```

Expected:

```text
hasHorizontalOverflow: false
375px: gateway cards stack in one column
768px and above: gateway cards use three columns
Home total height is lower than the baseline at equivalent viewports
Hero headline remains fully visible
```

- [ ] **Step 6: Smoke-test every route**

Request:

```text
/
/sobre
/servicos
/produtos
/blog
/contato
```

Expected: Every route responds with HTTP `200`.

- [ ] **Step 7: Capture final screenshots**

Capture:

```text
375 × 812 full page
1280 × 800 full page
```

Expected: Screenshots show controlled vertical rhythm, compact manifesto and pillars, three clear gateway cards, and a proportional final CTA.

- [ ] **Step 8: Final implementation report**

Report:

```text
Files modified
Baseline versus final Home height
Responsive viewport results
Lint/build results
Internal-route smoke-test results
Known cleanup items intentionally deferred
```

Expected: Report confirms no copy, dependency, internal-page, or cleanup changes.

---

## Execution Checkpoints

1. Baseline approved before CSS edits.
2. Hero and manifesto reviewed before pillars/cards.
3. Pillars and “Dentro da Auri” reviewed before CTA.
4. CTA reviewed before final validation.
5. Final responsive evidence reviewed before completion.

## Self-Review

- **Spec coverage:** Every requested Home area is addressed; internal pages, copy, dependencies, and cleanup remain excluded.
- **Selector isolation:** All selectors targeted by this plan were confirmed exclusive to `app/page.tsx`; shared-looking selectors are scoped through Home parents.
- **Mobile-first:** Base styles target mobile, with existing `768px` and `1280px` progressive enhancements preserved.
- **Code duplication:** No new components or parallel styling systems are introduced.
- **Dead code:** Existing dead or redundant CSS is documented and intentionally retained.
- **Type consistency:** No TypeScript interfaces or component signatures change.
