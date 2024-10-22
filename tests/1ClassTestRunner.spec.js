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

  test("Whitespace only in class name", async ({ page }) => {
    const createClass = new Class(page);

    await createClass.addClassBtn.click();
    await createClass.classNameInput.fill("   "); // Only whitespace
    await addClassManager(createClass, page);
    await createClass.submitBtn.click();
    await expect(
      page.getByText("Class name can not be empty or just spaces.")
    ).toBeVisible();
  });

  test("Class name cannot be empty", async ({ page }) => {
    const createClass = new Class(page);

    await createClass.addClassBtn.click();
    await createClass.classNameInput.fill(""); // Leave class name empty
    await addClassManager(createClass, page);
    await createClass.submitBtn.click();
    await expect(page.getByText("Please input your class name")).toBeVisible();
  });

  test("Admin cannot create a class with a duplicate name", async ({
    page,
  }) => {
    const createClass = new Class(page);

    // First, create a class with a unique name
    await createClass.addClassBtn.click();
    await createClass.classNameInput.fill("Automation");
    await addClassManager(createClass, page);

    await createClass.submitBtn.click();
    await expect(page.getByText("Successfully created")).toBeVisible();

    // Now try to create another class with the same name
    await createClass.addClassBtn.click();
    await createClass.classNameInput.fill("Automation"); //
    await addClassManager(createClass, page);
    await createClass.submitBtn.click();

    // Verify that an error message appears
    await expect(
      page.getByText("Class already exists with this name")
    ).toBeVisible();
  });

  test("Admin can select multiple class managers", async ({ page }) => {
    const createClass = new Class(page);

    await createClass.addClassBtn.click();
    await createClass.classNameInput.fill("Automation");
    await createClass.classManagerInput.click();

    await page.waitForSelector(
      ".ant-select-dropdown .rc-virtual-list-holder-inner",
      { visible: true }
    );

    await page.locator(".ant-select-item").nth(0).click();
    await page.locator(".ant-select-item").nth(1).click();
    await createClass.classManagerInput.click();

    await createClass.submitBtn.click();

    // Verify the success message, which assumes successful creation of a class with multiple managers.
    await expect(page.getByText("Successfully created")).toBeVisible();
  });

  test("Admin can create class successfully", async ({ page }) => {
    const createClass = new Class(page);

    await createClass.addClassBtn.click();
    await createClass.classNameInput.fill("Automation");
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

  async function addClassManager(createClass, page) {
    await createClass.classManagerInput.click();
    await page.waitForSelector(
      ".ant-select-dropdown .rc-virtual-list-holder-inner",
      { visible: true }
    );
    await page.locator(".ant-select-item").nth(0).click();
    await createClass.classManagerInput.click();
  }
});
