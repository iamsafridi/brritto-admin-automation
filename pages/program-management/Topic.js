class Topic {
  constructor(page) {
    this.page = page;
    this.programManagementTab = page.getByText("Program Management");
    this.topicTab = page.getByRole("link", { name: "Topic" });
    this.addTopicBtn = page.getByRole("button", { name: "Add Topic" });
    this.topicNameInput = page
      .locator('iframe[title="Rich Text Area"]')
      .contentFrame()
      .getByLabel("Rich Text Area. Press ALT-0");
    this.classInput = page.getByLabel("Class");
    this.selectClass = page.getByTitle("Admission").locator("div");
    this.course = page.getByLabel("Course");
    this.selectCourse = page.getByText("ইঞ্জিনিয়ারিং পদার্থবিজ্ঞান");
    this.subject = page.getByLabel("Subject");
    this.selectSubject = page
      .getByTitle("পদার্থবিজ্ঞান ১ম পত্র")
      .locator("div");
    this.chapter = page.getByLabel("Chapter");
    this.selectChapter = page.getByTitle("ভেক্টর").locator("div");
    this.serialNumberInput = page.getByLabel("Serial Number");
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.searchField = page.getByPlaceholder("Search by name");
    this.editBtn = page.getByRole("button", { name: "edit" });
    this.inactiveBtn = page.getByText("Inactive");
    this.updateBtn = page.getByRole("button", { name: "Update" });
    this.statusFilter = page.locator("#rc_select_4");
    this.selectInactive = page.getByTitle("Inactive").locator("div");
    this.deleteBtn = page.getByRole("button", { name: "delete" });
    this.confirmDelete = page.getByRole("button", { name: "OK" });
  }
}
export default Topic;
