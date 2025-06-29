const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page'); 
const creds = require('../data/credentials.data');    

describe('SauceDemo Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
          
    });

    it('UC-1: Login with empty username and password', async () => {
        const { username, password } = creds.invalidUsers[0];

        await LoginPage.login(username, password);
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Username is required');
    });

    it('UC-2: Login with username only and empty password', async () => {
        const { username, password } = creds.invalidUsers[1];

        await LoginPage.login(username, password);
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Password is required');
    });

    creds.validUsers.forEach((user, index) => {
        it(`UC-3: Valid login test ${index + 1}`, async () => {
            await LoginPage.login(user.username, user.password);
            await expect(browser).toHaveTitle('Swag Labs');
            await LoginPage.clearFields();
        });
    });
});
