import BasePage from "../base/base.page";
import allureReporter from '@wdio/allure-reporter'

class LoginPage extends BasePage {

    public async open() {
        await this.openUrl("https://www.saucedemo.com/");
    }

    public get username() {
        return $("#user-name");
    }

    public get password() {
        return $("#password");
    }

    public get loginButton() {
        return $("#login-button");
    }

    public async login(username: string, password: string) {
        allureReporter.addStep(`Login with username: ${username} and password: ${password}`);
        await this.writeTextOn(this.username, username);
        await this.writeTextOn(this.password, password);
        await this.clickOn(this.loginButton);
    }
}

export default new LoginPage();