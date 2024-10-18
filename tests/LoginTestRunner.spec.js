import { test, expect } from "@playwright/test";
import { login } from "../pages/AuthHelper";

test("Admin can login successfully", async ({ page }) => {
  await login(page);
  await expect(page.getByText("Successfully login")).toBeVisible();
});
