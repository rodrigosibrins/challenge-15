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
    get firstproductTitle () { return $('.inventory_item_label').$$('.inventory_item_name') }
    get productsName () { return $$('.inventory_item_name')  }
    get productImg () { return $('.inventory_item_img')}
    get productDesc () { return $('.inventory_details_desc')}
    get productPrice () { return $('.inventory_details_price')}
    get backBtn () { return $('#back-to-products')}
    get backpackAddBtn () { return $('#add-to-cart-sauce-labs-backpack')}
    get backpackRemoveBtn () { return $('#remove-sauce-labs-backpack')}
    get bikelightAddBtn () { return $('#add-to-cart-sauce-labs-bike-light')}
    get bikelightRemoveBtn () { return $('#remove-sauce-labs-bike-light')}
    get twitterLink () { return $('.social_twitter a')}
    get facebookLink () { return $('.social_facebook a')}
    get linkedinLink () { return $('.social_linkedin a')}
    get footerCopy () { return $('.footer_copy')}
    
    menuOptions (link) {
        this.burgerMenu.click();
        link.click();
    }
    sortValue (value) {
        this.productSort.click();
        this.productSort.$$('option')[`${value}`].click();
    }
    getProductsName() {
        let productsArray = [];
        for (let i = 0; i < 6; i++) {
            let element = this.productsName[i].getText();
            productsArray.push(element);
        }
        return productsArray;
    } 
    addToCart (){
        this.backpackAddBtn.click();
    }
    socialClick (social) {
        social.click();
    }   
}

module.exports = new ProductsPage();