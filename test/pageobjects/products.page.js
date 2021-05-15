class ProductsPage {
    get burgerMenu () { return $('#react-burger-menu-btn') }
    get burgerCross () { return $('#react-burger-cross-btn') }
    get allitemsLink () { return $('#inventory_sidebar_link') }
    get aboutLink () { return $('#about_sidebar_link') }
    get logoutLink () { return $('#logout_sidebar_link') }
    get resetLink () { return $('#reset_sidebar_link') }
    get cartLink () { return $('.shopping_cart_link') }
    get cartBadge () { return $('.shopping_cart_badge') }
    get productSort () { return $('.product_sort_container') }
    get itemImg () { return $('.inventory_item_img') }
    get firstproductTitle () { return $('//*[@id="item_4_title_link"]/div') }
    get firstproductDesc () { return $('//*[@id="inventory_container"]/div/div[1]/div[2]/div[1]/div') }
    get firstproductPrice () { return $('//*[@id="inventory_container"]/div/div[1]/div[2]/div[2]/div')}
    get backpackAddBtn () { return $('//*[@id="add-to-cart-sauce-labs-backpack"]')}
    get twitterLink () { return $('.social_twitter a')}
    get facebookLink () { return $('.social_facebook a')}
    get linkedinLink () { return $('.social_linkedin a')}
    get footerCopy () { return $('.footer_copy')}

    menuOptions (link) {
        this.burgerMenu.click();
        this.click(link);
    }
    sortValue (value) {
        this.productSort.setValue(value);
    }
    socialClick (social) {
        this.click(social);
    }
    addToCart (){
        this.backpackAddBtn.click();
    }

}

module.exports = new ProductsPage();