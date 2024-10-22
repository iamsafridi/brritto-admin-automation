import { test, expect } from "@playwright/test";
import Subject from "../pages/program-management/Subject";
import { login } from "../pages/AuthHelper";

test.describe("Program Management -> Subject", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    const subject = new Subject(page);
    await subject.programManagementTab.click();
    await subject.subjectTab.click();
    await expect(
      page.getByRole("heading", { name: "Subject List" })
    ).toBeVisible();
    await page.waitForLoadState("networkidle");
  });

  test("Admin can create subject successfully", async ({ page }) => {
    const createSubject = new Subject(page);

    await createSubject.addSubjectBtn.click();
    await createSubject.subjectNameInput.fill("automation");
    await createSubject.subjectCode.click();
    await createSubject.selectSubjectCode.click();
    await createSubject.classInput.click();
    await createSubject.selectClass.click();
    await createSubject.course.click();
    await createSubject.selectCourse.click();
    await createSubject.submitBtn.click();
    await expect(page.getByText("Successfully created")).toBeVisible();
  });

  test("Admin can edit subject successfully", async ({ page }) => {
    const editSubject = new Subject(page);

    await editSubject.searchField.fill("automation");
    await page.waitForTimeout(2000);
    await editSubject.editBtn.click();
    await editSubject.inactiveBtn.click();
    await editSubject.updateBtn.click();

    await expect(page.getByText("Successfully updated")).toBeVisible();
  });

  test("Admin can delete subject successfully", async ({ page }) => {
    const deleteSubject = new Subject(page);

    await deleteSubject.statusFilter.click();
    await deleteSubject.selectInactive.click();
    await page.waitForTimeout(1000);
    await deleteSubject.deleteBtn.click();
    await deleteSubject.confirmDelete.click();

    await expect(page.getByText("Successfully deleted")).toBeVisible();
  });
});
