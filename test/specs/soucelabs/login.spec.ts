import LoginPage from '../../pageobjects/soucelabs/login.page';
import { expect } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'

const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';
const INVALID_PASSWORD = 'secret_sau';
const INVENTORY_URL = 'https://www.saucedemo.com/inventory.html';
const ERROR_MESSAGE = 'Epic sadface: Username and password do not match any user in this service';

describe('Login in soucelabs', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should allow user to login', async () => {
        await LoginPage.login(VALID_USERNAME, VALID_PASSWORD);

        allureReporter.addStep('Verify user is logged in');
        await expect(browser).toHaveUrl(INVENTORY_URL);
        await expect($('#inventory_container')).toBeDisplayed();
    });

    it('should block the user from logging in if they have invalid credentials.', async () => {
        await LoginPage.login(VALID_USERNAME, INVALID_PASSWORD);

        allureReporter.addStep('Verify error message is displayed');
        await expect($(`=${ERROR_MESSAGE}`)).toBeDisplayed();
    });
});