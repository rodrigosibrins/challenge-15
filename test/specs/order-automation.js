const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");
const CartPage = require("../pageobjects/cart.page");
const CheckPage = require("../pageobjects/checkout.page");
const OverviewPage = require("../pageobjects/overview.page");
const OrderPage = require("../pageobjects/order.page");

describe("Order complete automation", () =>{
    beforeAll("Login with standard_user, add product to cart & checkout complete", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
        ProductsPage.addToCart();
        ProductsPage.cartLink.click();
        CartPage.checkoutBtn.click();
        CheckPage.fillForm('user', 'surname', '2000');
        OverviewPage.finishBtn.click();
    });
    describe("Order complete page display correct info", () => {
        it("title is right", () => {
            expect(OrderPage.mssgHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        });
        it("order delivery info is right", () => {
            expect(OrderPage.txtHeader).toHaveTextContaining('order has been dispatched');
        });
        it("the delivery img is display", () => {
            expect(OrderPage.orderImg).toBeDisplayed();
        });
    });
    describe("Order complete page btn", () => {
        it("back home btn navigates to products page", () => {
            OrderPage.backBtn.click();
            browser.pause(2000);
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
});