import LoginPage from "./LoginPage";
import Setup from "./Setup";
import dotenv from "dotenv";
dotenv.config();

export const login = async (page) => {
  const setup = new Setup(page);
  await setup.gotoLoginPage();

  const loginPage = new LoginPage(page);
  await loginPage.login(
    process.env._admin_username,
    process.env._admin_password
  );
};
