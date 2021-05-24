const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");

describe("Products automation", () =>{
    beforeAll("Open browser and login wit standard_user", () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });
    describe("Hamburger menu tests", () => {
      it("All items link navigates to inventory page", () => {
        ProductsPage.productImg.click();
        browser.pause(2000);
        ProductsPage.menuOptions(ProductsPage.allitemsLink);
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      });
      it("About link navigates to saucelabs.com", () => {
        ProductsPage.menuOptions(ProductsPage.aboutLink);
        browser.pause(2000);
        expect(browser).toHaveUrl('https://saucelabs.com/');
      });
      it("Logout link navigates to login page", () => {
        browser.back();
        ProductsPage.menuOptions(ProductsPage.logoutLink);
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/');
      });
      it("Reset App State link reset cart", () => {
        LoginPage.login('standard_user', 'secret_sauce');
        ProductsPage.addToCart();
        browser.pause(2000);
        ProductsPage.menuOptions(ProductsPage.resetLink);
        browser.pause(2000);
        expect(ProductsPage.cartBadge).not.toBeDisplayed();
        ProductsPage.burgerCross.click();
      });
    });
    describe("Cart badge tests", () => {
      it("if add to cart btn is clicked cart badge should be displayed", () => {
        ProductsPage.backpackRemoveBtn.click();
        ProductsPage.addToCart();
        browser.pause(2000);
        expect(ProductsPage.cartBadge).toBeDisplayed();
      });
      it("Adding more than 1 product, cart badge display correct number", () => {
        ProductsPage.bikelightAddBtn.click();
        browser.pause(2000);
        expect(ProductsPage.cartBadge).toHaveText('2');
      });
      it("if remove btn is clicked cart badge should not be displayed", () => {
        ProductsPage.backpackRemoveBtn.click();
        ProductsPage.bikelightRemoveBtn.click();
        browser.pause(2000);
        expect(ProductsPage.cartBadge).not.toBeDisplayed();
      });
    });
    describe("Cart link test", () => {
      it("if cart icon is clicked navigates to cart page", () => {
        ProductsPage.cartLink.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
      });
    });
    describe("Sort products tests", () => {
      it("if sort value is Z to A display proper layout ", () => {
        browser.back();
        ProductsPage.sortValue(1);
        browser.pause(2000);
        expect(ProductsPage.firstproductTitle).toHaveText('Test.allTheThings() T-Shirt (Red)');
        expect(ProductsPage.getProductsName()).toEqual(ProductsPage.getProductsName().sort().reverse());
      });
      it("if sort value is low to high display proper layout ", () => {
        ProductsPage.sortValue(2);
        browser.pause(2000);
        expect(ProductsPage.firstproductTitle).toHaveText('Sauce Labs Onesie');
      });
      it("if sort value is high to low display proper layout ", () => {
        ProductsPage.sortValue(3);
        browser.pause(2000);
        expect(ProductsPage.firstproductTitle).toHaveText('Sauce Labs Fleece Jacket');
      });
      it("if sort value is A to Z display proper layout ", () => {
        ProductsPage.sortValue(0);
        browser.pause(2000);
        expect(ProductsPage.firstproductTitle).toHaveText('Sauce Labs Backpack');
        expect(ProductsPage.getProductsName()).toEqual(ProductsPage.getProductsName().reverse().sort());
      });
    });
    describe("Products description page", () => {
      it("click on product should navigates to item description", () => {
        ProductsPage.productImg.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
      });
      it("product match description", () => {
        expect(ProductsPage.productDesc).toHaveTextContaining(
          ['carry.allTheThings()', 'with unequaled laptop and tablet protection.']);
      });
      it("product match price", () => {
        expect(ProductsPage.productPrice).toHaveText('$29.99');
      });
      it("product is added to cart", () => {
        ProductsPage.addToCart();
        browser.pause(2000);
        expect(ProductsPage.cartBadge).toBeDisplayed();
      });
      it("product is remove from cart", () => {
        ProductsPage.backpackRemoveBtn.click();
        browser.pause(2000);
        expect(ProductsPage.cartBadge).not.toBeDisplayed();
      });
      it("Back to products btn navigates to products page", () => {
        ProductsPage.backBtn.click();
        browser.pause(2000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      });
    });
    describe("Footer tests", () => {
      it("Twitter icon navigates correctly to twitter page", () => {
        ProductsPage.socialClick(ProductsPage.twitterLink);
        browser.pause(2000);
        browser.switchWindow('https://twitter.com/saucelabs');
        expect(browser).toHaveUrl('https://twitter.com/saucelabs');
      });
      it("Facebook icon navigates correctly to facebook page", () => {
        browser.switchWindow('https://www.saucedemo.com/inventory.html');
        ProductsPage.socialClick(ProductsPage.facebookLink);
        browser.pause(2000);
        browser.switchWindow('https://www.facebook.com/saucelabs');
        expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
      });
      it("Linkedin icon href is correct", () => {
        browser.switchWindow('https://www.saucedemo.com/inventory.html');
        expect(ProductsPage.linkedinLink).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
      });
      it("Footer copyright is correct", () => {
        browser.switchWindow('https://www.saucedemo.com/inventory.html');
        expect(ProductsPage.footerCopy).toHaveText(
          '© 2021 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
      });
    });
});