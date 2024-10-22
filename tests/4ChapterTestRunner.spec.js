import { test, expect } from "@playwright/test";
import Chapter from "../pages/program-management/Chapter";
import { login } from "../pages/AuthHelper";

test.describe("Program Management -> Chapter", () => {
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
    const createChapter = new Chapter(page);

    await createChapter.addChapterBtn.click();
    await createChapter.chapterNameInput.fill("automation");
    await createChapter.classInput.click();
    await createChapter.selectClass.click();
    await createChapter.course.click();
    await createChapter.selectCourse.click();
    await createChapter.subject.click();
    await createChapter.selectSubject.click();
    await createChapter.serialNumberInput.fill("99");
    await createChapter.submitBtn.click();
    await expect(page.getByText("Successfully created")).toBeVisible();
  });

  test("Admin can edit Chapter successfully", async ({ page }) => {
    const editChapter = new Chapter(page);

    await editChapter.searchField.fill("automation");
    await page.waitForTimeout(2000);
    await editChapter.editBtn.click();
    await editChapter.inactiveBtn.click();
    await editChapter.updateBtn.click();

    await expect(page.getByText("Successfully updated")).toBeVisible();
  });

  test("Admin can delete Chapter successfully", async ({ page }) => {
    const deleteChapter = new Chapter(page);

    await deleteChapter.statusFilter.click();
    await deleteChapter.selectInactive.click();
    await page.waitForTimeout(2000);
    await deleteChapter.deleteBtn.click();
    await deleteChapter.confirmDelete.click();

    await expect(page.getByText("Successfully deleted")).toBeVisible();
  });
});
