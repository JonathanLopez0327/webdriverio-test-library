import SignUpPage from '../pageobjects/testingmyframework/signup.page.ts';
import { expect } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'

describe('Testing SignUp Page', () => {
    it('Uno', async () => {
        await SignUpPage.open();
        allureReporter.addFeature('Feature')
        allureReporter.addStep('Step')
        await browser.takeScreenshot();
        await expect(await SignUpPage.returnTextValue('myusername')).toBe('myusernam');
        await browser.pause(2000);
    })
})