class Class {
  constructor(page) {
    this.page = page;
    this.programManagementTab = page.getByText("Program Management");
    this.classTab = page.getByRole("link", { name: "Class" });
    this.addClassBtn = page.getByRole("button", { name: "Add Class" });
    this.classNameInput = page.getByLabel("Class Name");
    this.classManagerInput = page.locator(".ant-select-selection-overflow");
    this.selectManager = page.getByText("brritto-admin");
    this.afterManagerClickOutside = page
      .locator("div")
      .filter({ hasText: /^Class Manager$/ });
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.searchField = page.getByPlaceholder("Search by name");
    this.editBtn = page.getByRole("button", { name: "edit" });
    this.inactiveBtn = page.getByText("Inactive", { exact: true });
    this.updateBtn = page.getByRole("button", { name: "Update" });
    this.closeSearch = page.getByRole("button", { name: "close-circle" });
    this.statusFilter = page.locator("#rc_select_0");
    this.selectInactive = page.getByTitle("Inactive").locator("div");
    this.deleteBtn = page.getByRole("button", { name: "delete" });
    this.confirmDeleteBtn = page.getByRole("button", { name: "OK" });
  }
}
export default Class;
