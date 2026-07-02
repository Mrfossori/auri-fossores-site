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
