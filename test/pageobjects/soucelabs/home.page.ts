import BasePage from "../base/base.page";

class HomePage extends BasePage {

    public get menuButton() {
        return $('#id="react-burger-menu-btn"');
    }

    public get logoutButton() {
        return $('#lid="logout_sidebar_link"');
    }

    public async logout() {
        await this.clickOn(this.menuButton);
        await this.clickOn(this.logoutButton);
    }
}

export default new HomePage();