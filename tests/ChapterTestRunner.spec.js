import { test, expect } from "@playwright/test";
import Chapter from "../pages/program-management/Chapter";
import Utils from "../pages/utils";
import { login } from "../pages/AuthHelper";

test.describe("Program Management -> Chapter Feature", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    const chapter = new Chapter(page);
    await chapter.programManagementTab.click();
    await chapter.chapterTab.click();
    await expect(
      page.getByRole("heading", { name: "Chapter List" })
    ).toBeVisible();
    await page.waitForLoadState("networkidle");
  });

  test("Admin can create chapter successfully", async ({ page }) => {
    const chapter = new Chapter(page);

    await chapter.addChapterBtn.click();
    await chapter.chapterNameInput.fill("Automation");
    await chapter.classInput.click();
    await chapter.selectClass.click();
    await chapter.course.click();
    await chapter.selectCourse.click();
    await chapter.subject.click();
    await chapter.selectSubject.click();
    await chapter.serialNumberInput.fill("99");
    await chapter.submitBtn.click();
    await expect(page.getByText("Successfully created")).toBeVisible();
  });

  test("Admin can edit Chapter successfully", async ({ page }) => {
    const chapter = new Chapter(page);

    await chapter.searchField.fill("Automation");
    await page.waitForTimeout(1000);
    await chapter.editBtn.click();
    await chapter.inactiveBtn.click();
    await chapter.updateBtn.click();

    await expect(page.getByText("Successfully updated")).toBeVisible();
  });

  test("Admin can delete Chapter successfully", async ({ page }) => {
    const chapter = new Chapter(page);

    await chapter.statusFilter.click();
    await chapter.selectInactive.click();
    await page.waitForTimeout(1000);
    await chapter.deleteBtn.click();
    await chapter.confirmDelete.click();

    await expect(page.getByText("Successfully deleted")).toBeVisible();
  });
});
