import { test, expect } from "@playwright/test";
import Class from "../pages/program-management/Class";
import { login } from "../pages/AuthHelper";

test.describe("Program Management -> Class", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    const cls = new Class(page);
    await cls.programManagementTab.click();
    await cls.classTab.click();
    await expect(
      page.getByRole("heading", { name: "Class List" })
    ).toBeVisible();
    await page.waitForLoadState("networkidle");
  });

  test("Admin can create class successfully", async ({ page }) => {
    const createClass = new Class(page);

    await createClass.addClassBtn.click();
    await createClass.classNameInput.fill("automation");
    await createClass.classManagerInput.click();
    await createClass.selectManager.click();
    await createClass.afterManagerClickOutside.click();
    await createClass.submitBtn.click();
    await page.waitForTimeout(1000);
    await expect(page.getByText("Successfully created")).toBeVisible();
  });

  test("Admin can edit class successfully", async ({ page }) => {
    const editClass = new Class(page);

    await editClass.searchField.fill("automation");
    await page.waitForTimeout(1000);
    await editClass.editBtn.click();
    await editClass.inactiveBtn.click();
    await editClass.updateBtn.click();

    await expect(page.getByText("Successfully updated")).toBeVisible();
  });

  test("Admin can delete class successfully", async ({ page }) => {
    const deleteClass = new Class(page);

    await deleteClass.statusFilter.click();
    await deleteClass.selectInactive.click();
    await page.waitForTimeout(1000);
    await deleteClass.deleteBtn.click();
    await deleteClass.confirmDeleteBtn.click();

    await expect(page.getByText("Successfully deleted")).toBeVisible();
  });
});
