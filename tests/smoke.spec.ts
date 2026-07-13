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

test("desktop navigation reaches every primary route", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop-chromium",
    "Desktop navigation appears at the 1280px breakpoint.",
  );
  await page.goto("/");

  for (const route of routes.slice(1)) {
    await page.locator(`.desktop-nav a[href="${route}"]`).click();
    await expect(page).toHaveURL(new RegExp(`${route}$`));
    await page.goto("/");
  }
});

test("mobile menu opens, navigates, and closes", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name === "desktop-chromium",
    "Compact navigation is tested below 1280px.",
  );
  await page.goto("/");

  const trigger = page.locator(".mobile-menu-button");
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await page.locator('.mobile-nav a[href="/sobre"]').click();
  await expect(page).toHaveURL(/\/sobre$/);
  await expect(trigger).toHaveAttribute("aria-expanded", "false");

  await page.goto("/");
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
});

test("home hero and gateways remain visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".home-hero h1")).toBeVisible();
  await expect(page.locator(".gateway-card")).toHaveCount(3);
});

test("services page presents the three approved commercial fronts", async ({ page }) => {
  await page.goto("/servicos");

  await expect(page.locator("[data-service-link]")).toHaveCount(3);
  await expect(page.locator("[data-service-section]")).toHaveCount(3);
  await expect(page.getByRole("heading", { name: "Automações para Negócios" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sistemas e ERPs", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Posicionamento Digital", exact: true })).toBeVisible();
  await expect(page.getByText("IA aplicada à produtividade", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Afiliados e recomendações", { exact: true })).toHaveCount(0);
});

test("services anchors and contact calls to action are wired", async ({ page }) => {
  await page.goto("/servicos");

  const anchorLinks = page.locator("[data-service-link]");
  await expect(anchorLinks.nth(0)).toHaveAttribute("href", "#automacoes");
  await expect(anchorLinks.nth(1)).toHaveAttribute("href", "#sistemas");
  await expect(anchorLinks.nth(2)).toHaveAttribute("href", "#posicionamento");

  await anchorLinks.nth(1).click();
  await expect(page).toHaveURL(/\/servicos#sistemas$/);
  await expect(page.locator("#sistemas")).toBeInViewport();

  const contextualCtas = page.locator("[data-service-section] a[href='/contato']");
  await expect(contextualCtas).toHaveCount(3);
  await expect(page.locator("main a[href='/contato']")).toHaveCount(5);

  const heights = await page.locator("main a[href='/contato']").evaluateAll((links) =>
    links.map((link) => link.getBoundingClientRect().height),
  );
  expect(heights.every((height) => height >= 44)).toBe(true);
});

test("AdegaERP evidence images load inside the services showcase", async ({ page }) => {
  await page.goto("/servicos");

  const screenshots = page.locator("img[alt*='AdegaERP']");
  await expect(screenshots).toHaveCount(2);

  for (let index = 0; index < 2; index += 1) {
    const screenshot = screenshots.nth(index);
    await screenshot.scrollIntoViewIfNeeded();
    await expect(screenshot).toBeVisible();
    await expect
      .poll(() =>
        screenshot.evaluate(
          (image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
});
