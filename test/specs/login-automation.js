const LoginPage = require("../pageobjects/login.page");

describe("Login automation", () =>{
    beforeAll("Open browser", () => {
        LoginPage.open();
    });
    describe("Login with invalid username and valid password", () => {
        it("if username is empty display proper mssg", () => {
              LoginPage.login('', 'secret_sauce');
              expect(LoginPage.divError).toHaveText('Epic sadface: Username is required');
              browser.pause(2000);
        });
        it("if username is wrong display proper mssg", () => {
            LoginPage.login('Unaccepted_username', 'secret_sauce');
            expect(LoginPage.divError).
            toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(3000);
      });
    });
    describe("Login with valid username and invalid password", () => {
        beforeAll("Clean login form", () => {
            LoginPage.cleanLogin();
        });
        it("if password is wrong display proper mssg", () => {
            LoginPage.login('standard_user', 'invalidpassword');
            expect(LoginPage.divError).toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(2000);
      });
         it("if password is empty display proper mssg", () => {
            LoginPage.btnError.click();
            LoginPage.login('problem_user', '');
            expect(LoginPage.divError).toHaveText('Epic sadface: Username is required');
            browser.pause(2000);
      });
    });
});