class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_txtbox = page.getByPlaceholder("Email");
    this.password_txtbox = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "Log in" });
  }
  async login(username, password) {
    await this.username_txtbox.fill(username);
    await this.password_txtbox.fill(password);
    await this.loginBtn.click();
  }
}
export default LoginPage;
