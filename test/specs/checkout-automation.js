const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");
const CartPage = require("../pageobjects/cart.page");
const CheckPage = require("../pageobjects/checkout.page");

describe("Checkout automation", () =>{
    beforeAll("Open browser, login with standard_user & add product to cart", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
        ProductsPage.addToCart();
        ProductsPage.cartLink.click();
        browser.pause(2000);
        CartPage.checkoutBtn.click();
    });
    describe("Checkout form tests", () => {
        it("if fields are empty show proper mssg ", () => {
            CheckPage.fillForm();
            expect(CheckPage.errorDiv).toHaveText('Error: First Name is required');
        });
        it("if first name field is empty show proper mssg ", () => {
            CheckPage.fillForm('', 'surname', '2000');
            expect(CheckPage.errorDiv).toHaveText('Error: First Name is required');
        });
        it("if last name field is empty show proper mssg ", () => {
            browser.refresh();
            CheckPage.fillForm('user', '', '2000');
            expect(CheckPage.errorDiv).toHaveText('Error: Last Name is required');
        });
        it("if last name field is empty show proper mssg ", () => {
            browser.refresh();
            CheckPage.fillForm('user', 'surname', '');
            expect(CheckPage.errorDiv).toHaveText('Error: Postal Code is required');
        });
    });
    describe("Checkout page btns tests", () => {
        it("cancel btn navigates to cart page", () => {
            CheckPage.cancelBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        });
        it("continue btn navigates to overview page", () => {
            CartPage.checkoutBtn.click();
            CheckPage.fillForm('user', 'surname', '2000');
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        });
    });
});