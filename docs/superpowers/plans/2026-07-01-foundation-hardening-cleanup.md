# Foundation Hardening and Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Auri Fossores V0 repository safer, reproducible, automatically validated, and easier to maintain without changing its visual direction or intentionally inactive prototype interactions.

**Architecture:** First reconnect the existing working directory to the official GitHub history without overwriting working files. Then add repository hygiene, CI, security headers, focused browser smoke tests, verified CSS cleanup, and a lossless-in-practice hero asset optimization.

**Tech Stack:** Next.js 15, App Router, React 19, TypeScript, Tailwind CSS 3, Playwright, GitHub Actions, npm.

## Global Constraints

- Official repository: `https://github.com/Mrfossori/auri-fossores-site.git`.
- Preserve all current pages, copy, visual identity, routes, and responsive behavior.
- Do not make WhatsApp functional.
- Do not make the contact form functional or change its prototype behavior.
- Do not add backend, CMS, checkout, database, analytics, or external integrations.
- Mobile-first remains mandatory.
- Breakpoints remain `375px`, `768px`, and `1280px`.
- Touch targets remain at least `2.75rem`.
- Do not use `npm audit fix --force`.
- Do not remove any CSS selector unless literal source usage and browser validation both confirm it is obsolete.
- Never overwrite local source files while recovering Git metadata.

---

## File Map

**Create:**

- `.gitignore` — excludes generated, private, deployment, operating-system, and local-work files.
- `.github/workflows/quality.yml` — runs install, lint, build, and browser smoke tests.
- `.github/dependabot.yml` — opens controlled weekly npm dependency updates.
- `playwright.config.ts` — starts the production server and defines Chromium projects.
- `tests/smoke.spec.ts` — verifies routes, navigation, mobile menu, overflow, and key layout behavior.
- `public/auri-hero.webp` — optimized replacement for the current PNG.

**Modify:**

- `package.json` — adds reproducibility metadata and Playwright scripts/dependency.
- `package-lock.json` — locks the approved Playwright dependency.
- `next.config.ts` — adds conservative browser security headers.
- `app/page.tsx` — changes the hero source to WebP and supplies responsive `sizes`.
- `app/globals.css` — removes only selectors proven unused.
- `components/Header.tsx` — adds Escape-key close, focus return, and scroll locking for the existing mobile menu.
- `README.md` — documents the supported workflow and validation commands.

**Remove from Git tracking, preserving local copies when present:**

- `.next/`
- `node_modules/`
- `outputs/`
- `work/`
- `.vercel/`

**Do not modify:**

- `app/contato/page.tsx`
- `components/Footer.tsx`
- WhatsApp links
- Contact form behavior
- Page copy and content data

## Reused Components

- Existing `Header`, `Footer`, `Logo`, `PageHero`, card components, and App Router pages.
- Existing responsive CSS tokens and breakpoints.
- Existing `next/image` integration.

## Known Cleanup Candidates

The following selectors have declarations in `app/globals.css` but no exact `className` reference in `app/` or `components/`:

- `.manifesto-section`
- `.editorial-preview`
- `.final-cta`
- `.preview-grid`
- `.pillars-grid`
- `.section-topline`
- `.text-link`

They are candidates only. Each must be searched again immediately before removal.

---

### Task 1: Recover the Official Git History Safely

**Files:**

- Modify metadata only: `.git/`
- Source files: no changes

**Interfaces:**

- Consumes: current working files and `origin/main`
- Produces: a valid local repository on branch `chore/foundation-hardening`

- [ ] **Step 1: Record current file hashes outside Git**

Run:

```powershell
Get-ChildItem app,components,data,public -Recurse -File |
  Get-FileHash -Algorithm SHA256 |
  Sort-Object Path |
  Format-Table Hash,Path -AutoSize
```

Expected: a readable baseline of every application source and asset hash. Keep the terminal output for comparison; do not write it into the repository.

- [ ] **Step 2: Initialize Git metadata and fetch the official repository**

Run:

```powershell
git init
git remote add origin https://github.com/Mrfossori/auri-fossores-site.git
git fetch origin main
```

Expected: `origin/main` is available. If authentication or repository lookup fails, stop without changing source files.

- [ ] **Step 3: Attach the working directory without overwriting files**

Run:

```powershell
git reset --mixed origin/main
git status --short
```

Expected: Git recognizes the official history and reports differences without changing working files. This command modifies the index and `HEAD`, not the working tree.

- [ ] **Step 4: Verify source hashes are unchanged**

Run the Step 1 hash command again.

Expected: every `app/`, `components/`, `data/`, and `public/` hash matches the baseline exactly. Stop if any hash changed.

- [ ] **Step 5: Review differences before creating a branch**

Run:

```powershell
git diff --stat
git status --short
```

Expected: application differences, if any, are visible for explicit review. Generated folders may appear as untracked. Do not discard source differences.

- [ ] **Step 6: Create the hardening branch**

Run:

```powershell
git switch -c chore/foundation-hardening
```

Expected: current branch is `chore/foundation-hardening`.

**Checkpoint:** Report the exact source differences against `origin/main`. Continue only if the current V0 source is intact and understood.

---

### Task 2: Establish Repository Hygiene

**Files:**

- Create: `.gitignore`
- Modify: `package.json`
- Modify: `README.md`

**Interfaces:**

- Consumes: valid repository from Task 1
- Produces: reproducible local and CI install behavior

- [ ] **Step 1: Add the repository ignore policy**

Create `.gitignore` with:

```gitignore
# Dependencies
/node_modules/

# Next.js
/.next/
/out/

# Deployment
/.vercel/

# Local environment files
.env
.env.*
!.env.example

# Logs and coverage
*.log
/coverage/
/playwright-report/
/test-results/

# Local agent/runtime output
/outputs/
/work/
/.codex/

# Operating system and editor files
.DS_Store
Thumbs.db
*.swp
```

- [ ] **Step 2: Remove generated folders from Git tracking only**

First inspect:

```powershell
git ls-files .next node_modules outputs work .vercel
```

For each path returned, run:

```powershell
git rm -r --cached --ignore-unmatch .next node_modules outputs work .vercel
```

Expected: tracked generated files are staged for removal, while local folders remain on disk.

- [ ] **Step 3: Add runtime reproducibility metadata**

Add to `package.json`:

```json
"packageManager": "npm@11.12.1",
"engines": {
  "node": ">=22 <25"
}
```

Keep all existing scripts and dependencies unchanged at this step.

- [ ] **Step 4: Document the canonical workflow**

Update `README.md` to state:

```markdown
## Ambiente suportado

- Node.js 22, 23 ou 24
- npm 11

## Instalação reproduzível

```bash
npm ci
npm run check
```
```

Also document that `.next`, `node_modules`, `.vercel`, `outputs`, and `work` are local/generated and must not be committed.

- [ ] **Step 5: Validate ignore behavior**

Run:

```powershell
git check-ignore -v .next node_modules outputs work
git status --short
```

Expected: all generated directories are ignored and only intentional source/config changes remain.

- [ ] **Step 6: Commit repository hygiene**

Run:

```powershell
git add .gitignore package.json README.md
git add -u
git commit -m "chore: establish repository hygiene"
```

---

### Task 3: Add Conservative Browser Security Headers

**Files:**

- Modify: `next.config.ts`

**Interfaces:**

- Consumes: all App Router routes
- Produces: security headers on every response path

- [ ] **Step 1: Add global headers**

Replace the empty config with:

```ts
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
```

Do not add Content Security Policy in this task because a correct nonce-based policy requires a separate architecture decision.

- [ ] **Step 2: Run static validation**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected: both commands exit with code `0`.

- [ ] **Step 3: Verify headers locally**

Start production mode:

```powershell
npm.cmd run start -- -H 127.0.0.1 -p 8086
```

Then inspect:

```powershell
(Invoke-WebRequest http://127.0.0.1:8086 -UseBasicParsing).Headers
```

Expected: all four configured headers are present.

- [ ] **Step 4: Commit security headers**

Run:

```powershell
git add next.config.ts
git commit -m "chore: add baseline security headers"
```

---

### Task 4: Add Automated Quality Gates

**Files:**

- Create: `.github/workflows/quality.yml`
- Create: `.github/dependabot.yml`
- Create: `playwright.config.ts`
- Create: `tests/smoke.spec.ts`
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**

- Consumes: production Next.js build and public routes
- Produces: `npm run check` and `npm run test:e2e`

- [ ] **Step 1: Install Playwright as a development dependency**

Run:

```powershell
npm.cmd install --save-dev @playwright/test
npx.cmd playwright install chromium
```

Expected: `@playwright/test` appears in `devDependencies`; Chromium is installed outside source control.

- [ ] **Step 2: Add package scripts**

Add:

```json
"check": "npm run lint && npm run build",
"test:e2e": "playwright test"
```

Keep `dev`, `build`, `start`, and `lint`.

- [ ] **Step 3: Configure Playwright**

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://127.0.0.1:8087",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run start -- -H 127.0.0.1 -p 8087",
    url: "http://127.0.0.1:8087",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "mobile-chromium",
      use: { ...devices["iPhone 13"], viewport: { width: 375, height: 812 } },
    },
    {
      name: "tablet-chromium",
      use: { ...devices["iPad (gen 7)"], viewport: { width: 768, height: 1024 } },
    },
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } },
    },
  ],
});
```

- [ ] **Step 4: Add smoke tests**

Create `tests/smoke.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

const routes = ["/", "/sobre", "/servicos", "/produtos", "/blog", "/contato"];

for (const route of routes) {
  test(`${route} renders without horizontal overflow`, async ({ page }) => {
    const response = await page.goto(route);

    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);
  });
}

test("desktop navigation reaches every primary route", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop navigation is hidden on mobile projects.");
  await page.goto("/");

  for (const route of routes.slice(1)) {
    await page.locator(`.desktop-nav a[href="${route}"]`).click();
    await expect(page).toHaveURL(new RegExp(`${route}$`));
    await page.goto("/");
  }
});

test("mobile menu opens, navigates, and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile menu is tested only in mobile projects.");
  await page.goto("/");

  const trigger = page.locator(".mobile-menu-button");
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await page.locator('.mobile-nav a[href="/sobre"]').click();
  await expect(page).toHaveURL(/\/sobre$/);
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

test("home hero and gateways remain visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".home-hero h1")).toBeVisible();
  await expect(page.locator(".gateway-card")).toHaveCount(3);
});
```

- [ ] **Step 5: Add GitHub Actions**

Create `.github/workflows/quality.yml`:

```yaml
name: Quality

on:
  pull_request:
  push:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run check
      - run: npx playwright install --with-deps chromium
      - run: npm run test:e2e
```

- [ ] **Step 6: Add controlled Dependabot updates**

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly
      day: monday
    open-pull-requests-limit: 5
    groups:
      development-dependencies:
        dependency-type: development
```

- [ ] **Step 7: Validate locally**

Run:

```powershell
npm.cmd run check
npm.cmd run test:e2e
```

Expected: lint, build, and all smoke tests pass in mobile, tablet, and desktop projects.

- [ ] **Step 8: Commit quality gates**

Run:

```powershell
git add package.json package-lock.json playwright.config.ts tests .github
git commit -m "test: add automated quality gates"
```

---

### Task 5: Improve Mobile Menu Accessibility

**Files:**

- Modify: `components/Header.tsx`
- Test: `tests/smoke.spec.ts`

**Interfaces:**

- Consumes: existing `open` state and mobile trigger
- Produces: Escape close, focus return, and body scroll lock

- [ ] **Step 1: Extend the mobile test before implementation**

Add to the existing mobile-menu test:

```ts
await page.goto("/");
await trigger.click();
await page.keyboard.press("Escape");
await expect(trigger).toHaveAttribute("aria-expanded", "false");
await expect(trigger).toBeFocused();
```

- [ ] **Step 2: Verify the new assertions fail**

Run:

```powershell
npx.cmd playwright test tests/smoke.spec.ts --project=mobile-chromium
```

Expected: focus return or Escape behavior fails before implementation.

- [ ] **Step 3: Implement keyboard and scroll behavior**

In `Header.tsx`:

- Add `useRef` to the React import.
- Create `const menuButtonRef = useRef<HTMLButtonElement>(null);`.
- Attach `ref={menuButtonRef}` to `.mobile-menu-button`.
- Add an effect active while `open` is true that:
  - stores the previous `document.body.style.overflow`;
  - sets `document.body.style.overflow = "hidden"`;
  - listens for `Escape`;
  - closes the menu and returns focus with `menuButtonRef.current?.focus()`;
  - restores overflow and removes the listener during cleanup.

The effect implementation must be:

```ts
useEffect(() => {
  if (!open) return;

  const previousOverflow = document.body.style.overflow;
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.body.style.overflow = previousOverflow;
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [open]);
```

- [ ] **Step 4: Validate all viewports**

Run:

```powershell
npm.cmd run lint
npm.cmd run test:e2e
```

Expected: all projects pass; desktop navigation remains unchanged.

- [ ] **Step 5: Commit accessibility behavior**

Run:

```powershell
git add components/Header.tsx tests/smoke.spec.ts
git commit -m "fix: improve mobile menu accessibility"
```

---

### Task 6: Optimize the Hero Asset

**Files:**

- Create: `public/auri-hero.webp`
- Modify: `app/page.tsx`
- Preserve for review: `public/auri-hero.png`

**Interfaces:**

- Consumes: `public/auri-hero.png` at `1717x916`
- Produces: WebP hero with the same dimensions and responsive `next/image` metadata

- [ ] **Step 1: Convert the source asset using the existing Sharp installation**

Run:

```powershell
node -e "const sharp=require('sharp'); sharp('public/auri-hero.png').webp({quality:82,smartSubsample:true}).toFile('public/auri-hero.webp')"
```

Expected: `public/auri-hero.webp` is created at `1717x916` and is smaller than `1,000,000` bytes.

- [ ] **Step 2: Update the Home hero image**

Change:

```tsx
src="/auri-hero.png"
```

to:

```tsx
src="/auri-hero.webp"
sizes="100vw"
```

Keep `fill`, `priority`, and the current alt text.

- [ ] **Step 3: Validate rendering and dimensions**

Run:

```powershell
Get-Item public\auri-hero.png,public\auri-hero.webp | Select-Object Name,Length
npm.cmd run build
npm.cmd run test:e2e
```

Expected: WebP is smaller, the build passes, and the Home hero remains visible at all three viewports.

- [ ] **Step 4: Keep the PNG until visual approval**

Do not delete `public/auri-hero.png` in this task. Its removal can happen later after visual comparison and deployment validation.

- [ ] **Step 5: Commit asset optimization**

Run:

```powershell
git add app/page.tsx public/auri-hero.webp
git commit -m "perf: optimize home hero delivery"
```

---

### Task 7: Remove Only Proven Dead CSS

**Files:**

- Modify: `app/globals.css`

**Interfaces:**

- Consumes: current class usage and passing browser smoke tests
- Produces: smaller global stylesheet with unchanged rendered behavior

- [ ] **Step 1: Reconfirm every candidate is unused**

Run:

```powershell
rg -n 'className=.*(manifesto-section|editorial-preview|final-cta|preview-grid|pillars-grid|section-topline|text-link)' app components
```

Expected: no exact class references except `.home-final-cta`, which must not be confused with `.final-cta`.

- [ ] **Step 2: Remove only candidate-specific CSS**

Remove declarations that exclusively target:

```text
.manifesto-section
.editorial-preview
.final-cta
.preview-grid
.pillars-grid
.section-topline
.text-link
```

When a candidate shares a comma-separated rule with a live selector, remove only the candidate selector and preserve the shared declarations for live selectors.

- [ ] **Step 3: Confirm no live selector was removed**

Run:

```powershell
rg -n 'home-final-cta|home-manifesto|service-list|product-showcase|vision-grid|release-note' app\globals.css
git diff -- app/globals.css
```

Expected: all live selectors remain and the diff contains only proven dead-selector cleanup.

- [ ] **Step 4: Validate CSS and responsive behavior**

Run:

```powershell
npm.cmd run check
npm.cmd run test:e2e
```

Expected: lint, build, and all route/viewport smoke tests pass.

- [ ] **Step 5: Commit CSS cleanup**

Run:

```powershell
git add app/globals.css
git commit -m "refactor: remove verified dead CSS"
```

---

### Task 8: Final Audit and Handoff

**Files:**

- No new source files

**Interfaces:**

- Consumes: completed hardening branch
- Produces: review-ready branch with documented residual risks

- [ ] **Step 1: Run the complete validation suite**

Run:

```powershell
npm.cmd audit --omit=dev
npm.cmd run check
npm.cmd run test:e2e
git diff origin/main...HEAD --check
git status --short
```

Expected:

- lint and build pass;
- all browser tests pass;
- no whitespace errors;
- working tree is clean;
- the known nested PostCSS advisory may remain until a stable Next.js release includes the patched dependency.

- [ ] **Step 2: Confirm forbidden scope stayed untouched**

Run:

```powershell
git diff --name-only origin/main...HEAD
git diff origin/main...HEAD -- app/contato/page.tsx components/Footer.tsx data/site-content.ts
```

Expected: no diff for contact form, WhatsApp links, or content data.

- [ ] **Step 3: Report outcomes**

Report:

- repository recovery result;
- files created and modified;
- generated folders removed from tracking;
- security headers added;
- CI and Dependabot configuration;
- Playwright viewport/route results;
- hero size before and after;
- exact CSS selectors removed;
- remaining PostCSS advisory and why no forced downgrade was used.

## Execution Checkpoints

1. Stop after Git recovery if current source differs unexpectedly from `origin/main`.
2. Stop after repository hygiene for review of tracked-file removals.
3. Stop after quality gates to report local and CI-equivalent test results.
4. Stop before CSS cleanup if any candidate has a live source reference.
5. Never delete the original PNG, WhatsApp placeholder, or visual form in this task.
