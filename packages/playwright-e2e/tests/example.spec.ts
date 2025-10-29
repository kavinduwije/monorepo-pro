import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("homepage has a header (Allure)", async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await expect(home.header).toBeVisible();
});