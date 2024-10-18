class Course {
  constructor(page) {
    this.page = page;
    this.programManagementTab = page.getByText("Program Management");
    this.courseTab = page.getByRole("link", { name: "Course" });
    this.addCourseBtn = page.getByRole("button", { name: "Add Course" });
    this.courseNameInput = page.getByLabel("Course Name");
    this.courseType = page.getByLabel("Course Type");
    this.selectCourseType = page.getByText("Concept Book");
    this.classInput = page.getByLabel("Class");
    this.selectClass = page.getByTitle("Admission").locator("div");
    this.courseCategory = page.getByLabel("Course Category");
    this.selectCourseCategory = page.getByText("Engineering");
    this.priceInput = page.getByLabel("Price", { exact: true });
    this.discountPrice = page.getByLabel("Discount Price");
    this.expDate = page.getByPlaceholder("Select date");
    this.selectDate = page.getByTitle("-10-30").locator("div");
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
export default Course;
