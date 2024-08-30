import SignUpPage from '../pageobjects/testingmyframework/signup.page.ts';
import { expect } from '@wdio/globals'

describe('Testing SignUp Page', () => {
    it('Uno', async () => {
        await SignUpPage.open();
        // await expect(await SignUpPage.returnTextValue('myusername')).toBe('myusername');

        await SignUpPage.selectingValueByDifferentWays();
    })
})