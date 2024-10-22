class Chapter {
  constructor(page) {
    this.page = page;
    this.programManagementTab = page.getByText("Program Management");
    this.chapterTab = page.getByRole("link", { name: "Chapter" });
    this.addChapterBtn = page.getByRole("button", { name: "Add Chapter" });
    this.chapterNameInput = page.getByLabel("chapter Name");
    this.classInput = page.getByLabel("Class");
    this.selectClass = page.getByTitle("Admission", { exact: true }).locator("div");
    this.course = page.getByLabel("Course");
    this.selectCourse = page.getByText("ইঞ্জিনিয়ারিং পদার্থবিজ্ঞান");
    this.subject = page.getByLabel("Subject");
    this.selectSubject = page
      .getByTitle("পদার্থবিজ্ঞান ১ম পত্র")
      .locator("div");
    this.serialNumberInput = page.getByLabel("Serial Number");
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.searchField = page.getByPlaceholder("Search by name");
    this.editBtn = page.getByRole("button", { name: "edit" });
    this.inactiveBtn = page.getByText("Inactive");
    this.updateBtn = page.getByRole("button", { name: "Update" });
    this.statusFilter = page.locator("#rc_select_3");
    this.selectInactive = page.getByTitle("Inactive").locator("div");
    this.deleteBtn = page.getByRole("button", { name: "delete" });
    this.confirmDelete = page.getByRole("button", { name: "OK" });
  }
}
export default Chapter;
