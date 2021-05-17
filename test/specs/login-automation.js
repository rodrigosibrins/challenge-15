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
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it("if password is empty display proper mssg", () => {
            LoginPage.login('standard_user');
            expect(LoginPage.divError).toHaveText('Epic sadface: Password is required');
            browser.pause(2000);
        });
        it("if password is wrong display proper mssg", () => {
            LoginPage.login('standard_user', 'invalidpassword');
            expect(LoginPage.divError).toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(2000);
        });
    });
    describe("Login with empty inputs values", () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it("if username and password inputs are empty display proper mssg", () => {
            LoginPage.login();
            expect(LoginPage.divError).toHaveText('Epic sadface: Username is required');
            browser.pause(2000);
        });
    });
    describe("Login with wrong inputs values", () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it("if username and password inputs are wrong display proper mssg", () => {
            LoginPage.login('error_user', 'wrongpassword');
            expect(LoginPage.divError).toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(2000);
        });
    });
    describe("Login with standard_user and valid password", () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it("if username and password inputs are wrong display proper mssg", () => {
            LoginPage.login('standard_user', 'secret_sauce');
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            browser.pause(1000);
        });
    });
    describe("Login with locked_out_user and valid password", () => {
        beforeAll("Refresh browser", () => {
            browser.back();
            browser.refresh();
        });
        it("if login with locked_out_user display proper mssg", () => {
            LoginPage.login('locked_out_user', 'secret_sauce');
            expect(LoginPage.divError).toHaveText('Epic sadface: Sorry, this user has been locked out.');
            browser.pause(1000);
        });
    });
    describe("Login with problem_user and valid password", () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it("if login with problem_user navigate to main page", () => {
            LoginPage.login('problem_user', 'secret_sauce');
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            browser.pause(1000);
        });
        it("if login with problem_user show the correct product image", () => {
            const getSrc = $('//*[@id="item_4_img_link"]/img').getAttribute('src');
            expect(getSrc).toBe('https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg')
        });
    });
    describe("Login with performance_glitch_user and valid password", () => {
        beforeAll("Refresh browser", () => {
            browser.back();
            browser.refresh();
        });
        it("should navigates to main page", () => {
            LoginPage.login('performance_glitch_user', 'secret_sauce');
            browser.setTimeout({
                'pageLoad': 5000,
            });
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        }); 
    });
});