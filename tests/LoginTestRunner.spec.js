import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import Setup from "../pages/Setup";
import dotenv from "dotenv";
dotenv.config();

test("Admin can login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const setup = new Setup(page);
  await setup.gotoLoginPage();
  //   await page.waitForTimeout(3000);
  await loginPage.login(
    process.env._admin_username,
    process.env._admin_password
  );
  await expect(page.getByText("Successfully login")).toBeVisible();
});
