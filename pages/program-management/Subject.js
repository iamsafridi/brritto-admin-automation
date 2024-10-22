class Subject {
  constructor(page) {
    this.page = page;
    this.programManagementTab = page.getByText("Program Management");
    this.subjectTab = page.getByRole("link", { name: "Subject" });
    this.addSubjectBtn = page.getByRole("button", { name: "Add Subject" });
    this.subjectNameInput = page.getByLabel("Subject Name");
    this.subjectCode = page.getByLabel("Subject Code");
    this.selectSubjectCode = page.getByText("1", { exact: true }).nth(2);
    this.classInput = page.getByLabel("Class");
    this.selectClass = page.getByTitle("Admission", {exact: true}).locator("div");
    this.course = page.getByLabel("Course");
    this.selectCourse = page.getByText("ইঞ্জিনিয়ারিং পদার্থবিজ্ঞান");
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.searchField = page.getByPlaceholder("Search by name");
    this.editBtn = page.getByRole("button", { name: "edit" });
    this.inactiveBtn = page.getByText("Inactive");
    this.updateBtn = page.getByRole("button", { name: "Update" });
    this.statusFilter = page.locator("#rc_select_2");
    this.selectInactive = page.getByTitle("Inactive").locator("div");
    this.deleteBtn = page.getByRole("button", { name: "delete" });
    this.confirmDelete = page.getByRole("button", { name: "OK" });
  }
}
export default Subject;
