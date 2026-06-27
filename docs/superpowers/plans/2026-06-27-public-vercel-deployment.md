# Public Vercel Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the current Auri Fossores V0 to a public HTTPS URL that works outside the local machine.

**Architecture:** Deploy the existing Next.js 15 application directly to Vercel using the Vercel CLI through `npx`, preserving the repository and application code unchanged. Validate the generated public URL and every navigable route after deployment.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 3, Vercel.

## Global Constraints

- Do not modify Home copy, internal pages, styles, or application logic.
- Do not install a new project dependency.
- Do not add checkout, CMS, database, forms, analytics, or integrations.
- Do not create or push a Git remote as part of this task.
- Do not expose local files, credentials, or environment variables.
- Any Vercel authentication or project-linking prompt requires user confirmation.

---

## File Map

**Files to create:** None.

**Files to modify:** None.

**Files to remove:** None.

**Generated local metadata:** Vercel may create `.vercel/project.json` and `.vercel/README.txt`. These are deployment metadata, not application source, and must not be committed.

**Existing components reused:** The complete current application, including `app/page.tsx`, internal App Router pages, shared layout, header, footer, and `app/globals.css`.

**Duplication or obsolete code:** No removal or consolidation is included. Existing obsolete selectors remain untouched.

**Dead-code or unused-CSS risk:** None introduced because no source file changes are planned.

## Task 1: Confirm Deployable State

**Files:**
- Create: None
- Modify: None
- Test: Existing application

**Interfaces:**
- Consumes: Current branch `feat/home-spacing-refinement`
- Produces: A verified production build ready for Vercel

- [ ] **Step 1: Confirm the intended commit and clean source diff**

Run:

```powershell
git branch --show-current
git log -1 --oneline
git status --short
```

Expected: branch `feat/home-spacing-refinement`, latest commit `f7e97d5`, and no tracked source changes. Local `.next/` and `node_modules/` may remain untracked and must not be uploaded as source.

- [ ] **Step 2: Run lint**

Run:

```powershell
npm.cmd run lint
```

Expected: exit code `0` with no ESLint warnings or errors.

- [ ] **Step 3: Run the production build**

Run:

```powershell
npm.cmd run build
```

Expected: exit code `0`; `/`, `/sobre`, `/servicos`, `/produtos`, `/blog`, and `/contato` are generated successfully.

## Task 2: Publish to Vercel

**Files:**
- Create: None in application source
- Modify: None
- Generated: `.vercel/project.json`, `.vercel/README.txt`

**Interfaces:**
- Consumes: Verified Next.js production build
- Produces: Public Vercel project and HTTPS deployment URL

- [ ] **Step 1: Check Vercel authentication**

Run:

```powershell
npx.cmd vercel whoami
```

Expected: the authenticated Vercel account name. If authentication is absent, stop and ask the user to complete Vercel login before continuing.

- [ ] **Step 2: Create and link the Vercel project**

Run:

```powershell
npx.cmd vercel --yes
```

Expected: Vercel detects Next.js, links a project named from `auri-fossores-site-v0`, and returns a public preview URL. Do not accept prompts that change application source or add environment variables.

- [ ] **Step 3: Promote a stable production deployment**

Run:

```powershell
npx.cmd vercel --prod --yes
```

Expected: a stable public HTTPS production URL under `vercel.app`.

## Task 3: Validate the Public Site

**Files:**
- Create: None
- Modify: None
- Test: Public deployment

**Interfaces:**
- Consumes: Production URL from Task 2
- Produces: Verified externally accessible site

- [ ] **Step 1: Verify route responses**

Run the following with `<PUBLIC_URL>` replaced by the exact Vercel production URL:

```powershell
$routes = @('/','/sobre','/servicos','/produtos','/blog','/contato')
foreach ($route in $routes) {
  $response = Invoke-WebRequest -Uri ("<PUBLIC_URL>" + $route) -UseBasicParsing -TimeoutSec 30
  "{0}`t{1}" -f $route, $response.StatusCode
}
```

Expected: HTTP `200` for every route.

- [ ] **Step 2: Perform browser smoke validation**

Open `<PUBLIC_URL>` at mobile, tablet, notebook, and desktop viewport sizes. Confirm the Home has no horizontal scrolling, the hero text is not clipped, buttons remain at least `2.75rem` high, cards stack correctly, navigation works, and the dark Auri palette loads.

- [ ] **Step 3: Report the public URL**

Return the exact clickable production URL, the validated routes, and any Vercel project metadata created locally. Do not commit `.vercel/`.

## Checkpoints

1. Stop before authentication if `vercel whoami` reports no active account.
2. Stop if Vercel requests environment variables or source changes.
3. Report the preview URL before production promotion if project ownership or naming differs from expectation.
4. Do not consider the deployment complete until all six public routes return HTTP `200`.

## Approval Required

- Approve creating/linking a Vercel project in the authenticated account.
- Approve publishing the current branch as a public production deployment.
- Confirm that the generated `vercel.app` URL is acceptable for this V0; custom-domain configuration remains a separate task.
