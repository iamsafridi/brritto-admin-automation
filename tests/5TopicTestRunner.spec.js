import { test, expect } from "@playwright/test";
import Topic from "../pages/program-management/Topic";
import { login } from "../pages/AuthHelper";

test.describe("Program Management -> Topic", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    const topic = new Topic(page);
    await topic.programManagementTab.click();
    await topic.topicTab.click();
    await expect(
      page.getByRole("heading", { name: "Topic List" })
    ).toBeVisible();
    await page.waitForLoadState("networkidle");
  });

  test("Admin can create Topic successfully", async ({ page }) => {
    const createTopic = new Topic(page);

    await createTopic.addTopicBtn.click();
    await createTopic.topicNameInput.click();
    await createTopic.topicNameInput.fill("Automation");
    await page.waitForTimeout(2000);
    await createTopic.classInput.click();
    await createTopic.selectClass.click();
    await createTopic.course.click();
    await createTopic.selectCourse.click();
    await createTopic.subject.click();
    await createTopic.selectSubject.click();
    await createTopic.chapter.click();
    await createTopic.selectChapter.click();
    await createTopic.serialNumberInput.fill("99");
    await createTopic.submitBtn.click();
    await expect(page.getByText("Successfully created")).toBeVisible();
  });

  test("Admin can edit Topic successfully", async ({ page }) => {
    const editTopic = new Topic(page);

    await editTopic.searchField.fill("Automation");
    await page.waitForTimeout(2000);
    await editTopic.editBtn.click();
    await editTopic.inactiveBtn.click();
    await editTopic.updateBtn.click();

    await expect(page.getByText("Successfully updated")).toBeVisible();
  });

  test("Admin can delete Topic successfully", async ({ page }) => {
    const deleteTopic = new Topic(page);

    await deleteTopic.statusFilter.click();
    await deleteTopic.selectInactive.click();
    await page.waitForTimeout(1000);
    await deleteTopic.deleteBtn.click();
    await deleteTopic.confirmDelete.click();

    await expect(page.getByText("Successfully deleted")).toBeVisible();
  });
});
