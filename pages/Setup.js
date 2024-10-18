class Setup {
  constructor(page) {
    this.page = page;
  }
  async gotoLoginPage() {
    await this.page.goto("https://staging-admin.brritto.com/login");
  }
}
export default Setup;
