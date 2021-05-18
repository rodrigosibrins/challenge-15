const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");
const CartPage = require("../pageobjects/cart.page");
const CheckPage = require("../pageobjects/checkout.page");
const OverviewPage = require("../pageobjects/overview.page");

describe("Overview automation", () =>{
    beforeAll("Login with standard_user, add product to cart & checkout", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
        ProductsPage.addToCart();
        ProductsPage.cartLink.click();
        browser.pause(2000);
        CartPage.checkoutBtn.click();
        CheckPage.fillForm('user', 'surname', '2000');
    });
    describe("Overview display correct info", () => {
        it("product description is displayed", () => {
            expect(OverviewPage.itemDiv).toBeDisplayed();
        });
        it("summary is displayed", () => {
            expect(OverviewPage.summaryDiv).toBeDisplayed();
        });
        it("the subtotal is correct", () => {
            expect(OverviewPage.subtotalInfo).toHaveTextContaining('29.99');
        });
    });
    describe("Overview page btns", () => {
        it("cancel btn navigates to products page", () => {
            OverviewPage.cancelBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it("finish btn navigates to order confirm page", () => {
            ProductsPage.cartLink.click();
            CartPage.checkoutBtn.click();
            CheckPage.fillForm('user', 'surname', '2000');
            OverviewPage.finishBtn.click();
            browser.pause(2000);
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        });
    });
});