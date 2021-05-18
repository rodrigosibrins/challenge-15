const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");
const CartPage = require("../pageobjects/cart.page");
const CheckPage = require("../pageobjects/checkout.page");
const OverviewPage = require("../pageobjects/overview.page");
const OrderPage = require("../pageobjects/order.page");

describe("Order complete automation", () =>{
    beforeAll("Open browser", () => {
        LoginPage.open();
    });
    describe("Complete order of a product", () => {
        it("place order correctly", () => {
            LoginPage.login('standard_user', 'secret_sauce');
            browser.pause(2000);
            ProductsPage.addToCart();
            browser.pause(2000);
            ProductsPage.cartLink.click();
            browser.pause(2000);
            CartPage.checkoutBtn.click();
            CheckPage.fillForm('user', 'surname', '2000');
            browser.pause(2000);
            OverviewPage.finishBtn.click();
            browser.pause(2000);
            expect(OrderPage.mssgHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        });
    });
});