# Publish Main and Verify Public Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the validated hardening branch directly to `origin/main` and return a verified public site URL.

**Architecture:** Keep the two unrelated working-tree residues untouched, verify that remote `main` has not advanced, and push the committed branch directly as a fast-forward update. Then use the existing Vercel integration when available, falling back to an authenticated Vercel CLI production deployment.

**Tech Stack:** Git, GitHub, Next.js 15, Playwright, Vercel.

## Global Constraints

- Do not stage or commit `.agents/`.
- Do not stage or commit the local deletion of `docs/superpowers/plans/2026-06-27-public-vercel-deployment.md`.
- Do not force-push.
- Do not rewrite or squash existing commits.
- Do not modify application code.
- Stop if `origin/main` has advanced or is no longer an ancestor of `HEAD`.
- Do not report a public link until all six routes return HTTP `200`.

---

### Task 1: Validate the Exact Publish Scope

**Files:**

- Create: `docs/superpowers/plans/2026-07-01-publish-main-and-verify-site.md`
- Modify: None
- Remove: None

- [ ] **Step 1: Commit only this approved publish plan**

```powershell
git add docs/superpowers/plans/2026-07-01-publish-main-and-verify-site.md
git commit -m "docs: add main publication plan"
```

- [ ] **Step 2: Refresh the remote safely**

```powershell
git fetch origin main
git rev-list --left-right --count origin/main...HEAD
git merge-base --is-ancestor origin/main HEAD
```

Expected: the left count is `0`, the right count is at least `9`, and the ancestry command exits with code `0`.

- [ ] **Step 3: Confirm unrelated local changes remain excluded**

```powershell
git status --short
git diff --cached --name-only
```

Expected: only the preexisting deleted deployment-plan file and untracked `.agents/` remain in the working tree; nothing is staged.

- [ ] **Step 4: Re-run release checks**

```powershell
npm.cmd run check
npm.cmd run test:e2e
```

Expected: lint and build pass; Playwright reports `24 passed` and `3 skipped`.

### Task 2: Publish Directly to Main

**Files:**

- Modify remote ref only: `origin/main`

- [ ] **Step 1: Push without force**

```powershell
git push origin HEAD:main
```

Expected: Git reports a fast-forward update from the previous `origin/main` commit to the current `HEAD`.

- [ ] **Step 2: Confirm remote parity**

```powershell
git fetch origin main
git rev-parse HEAD
git rev-parse origin/main
```

Expected: both hashes are identical.

### Task 3: Resolve and Validate the Public URL

**Files:**

- Application files: no changes
- Generated local metadata allowed: `.vercel/`, ignored by Git

- [ ] **Step 1: Check whether the repository already has an active Vercel deployment**

Inspect the GitHub repository deployment/check response after the push. If an HTTPS `vercel.app` production URL is available, use it as `<PUBLIC_URL>`.

- [ ] **Step 2: Fall back to Vercel CLI only if no automatic deployment URL exists**

```powershell
npx.cmd vercel whoami
npx.cmd vercel --prod --yes
```

Expected: an authenticated account and a production HTTPS URL. Stop for user authentication if `whoami` fails.

- [ ] **Step 3: Validate all public routes**

```powershell
$routes = @('/','/sobre','/servicos','/produtos','/blog','/contato')
foreach ($route in $routes) {
  $response = Invoke-WebRequest -Uri ("<PUBLIC_URL>" + $route) -UseBasicParsing -TimeoutSec 30
  "{0}`t{1}" -f $route, $response.StatusCode
}
```

Expected: HTTP `200` for every route.

- [ ] **Step 4: Return the verified link**

Report the clickable production URL, published commit hash, route results, and whether deployment came from the GitHub integration or Vercel CLI.
