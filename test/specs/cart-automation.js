const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");
const CartPage = require("../pageobjects/cart.page");

describe("Cart automation", () =>{
    beforeAll("Open browser and login with standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe("Cart empty", () => {
        it("if cart is empty div cart-item is not displayed ", () => {
          ProductsPage.cartLink.click();
          browser.pause(2000);
          expect(CartPage.divItem).not.toBeDisplayed();
        });
    });
    describe("Cart fill display product information", () => {
        it("cart div item is displayed", () => {
          browser.back();
          ProductsPage.addToCart();
          ProductsPage.cartLink.click();
          browser.pause(2000);
          expect(CartPage.divItem).toBeDisplayed();
        });
        it("quantity number is correct", () => {
          expect(CartPage.cartQty).toHaveText('1');
        });
    });
    describe("Cart btns functionality", () => {
        it("remove from cart", () => {
          ProductsPage.backpackRemoveBtn.click();
          expect(CartPage.divItem).not.toBeDisplayed();
        });
        it("continue shopping", () => {
          CartPage.continue();
          expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it("checkout", () => {
          ProductsPage.cartLink.click();
          CartPage.checkout();
          expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        });
    });
});