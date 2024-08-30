import Base from '../base/base.page.ts';

class SignUpPage extends Base {

    private get usernameField() { return $('#username'); }
    private get genderSelect() { return $("//select[@name='sgender']"); }

    public async open() {
        super.openUrl('https://qavbox.github.io/demo/signup/');
    }


    public async returnTextValue(username: string) {
        await this.writeTextOn(this.usernameField, username);
        await this.writeTextOn(this.usernameField, username);
        await this.browser.pause(2000);
        return await this.getValueFrom(this.usernameField);
    }

    public async selectingValueByDifferentWays() {
        await this.selectOptionByValue(this.genderSelect, "value", "na");
        await this.browser.pause(4000);
    }
}

export default new SignUpPage();