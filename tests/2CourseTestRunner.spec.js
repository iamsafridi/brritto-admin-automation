import { test, expect } from "@playwright/test";
import Course from "../pages/program-management/Course";
import { login } from "../pages/AuthHelper";

test.describe("Program Management -> Course", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    const course = new Course(page);
    await course.programManagementTab.click();
    await course.courseTab.click();
    await expect(
      page.getByRole("heading", { name: "Course List" })
    ).toBeVisible();
    await page.waitForLoadState("networkidle");
  });

  test("Admin can create course successfully", async ({ page }) => {
    const createCourse = new Course(page);

    await createCourse.addCourseBtn.click();
    await createCourse.courseNameInput.fill("automation");
    await createCourse.courseType.click();
    await createCourse.selectCourseType.click();
    await createCourse.classInput.click();
    await createCourse.selectClass.click();
    await createCourse.courseCategory.click();
    await createCourse.selectCourseCategory.click();
    await createCourse.priceInput.fill("99");
    await createCourse.discountPrice.fill("0");
    await createCourse.expDate.click();
    await createCourse.selectDate.click();
    await createCourse.submitBtn.click();
    await expect(page.getByText("Successfully created")).toBeVisible();
  });

  test("Admin can edit course successfully", async ({ page }) => {
    const editCourse = new Course(page);

    await editCourse.searchField.fill("automation");
    await page.waitForTimeout(3000);
    await editCourse.editBtn.click();
    await editCourse.inactiveBtn.click();
    await editCourse.updateBtn.click();

    await expect(page.getByText("Successfully updated")).toBeVisible();
  });

  test("Admin can delete course successfully", async ({ page }) => {
    const deleteCourse = new Course(page);

    await deleteCourse.statusFilter.click();
    await deleteCourse.selectInactive.click();
    await page.waitForTimeout(1000);
    await deleteCourse.deleteBtn.click();
    await deleteCourse.confirmDelete.click();

    await expect(page.getByText("Successfully deleted")).toBeVisible();
  });
});
