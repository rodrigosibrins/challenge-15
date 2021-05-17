class CartPage {
    get cartQty () { return $('.cart_quantity') }
    get divItem () { return $('.cart_item')}
    get continueBtn () { return $('#continue-shopping')}
    get checkoutBtn () { return $('#checkout')}
    
    continue () {
        this.continueBtn.click()
    }
    checkout (){
        this.checkoutBtn.click()
    }
}

module.exports = new CartPage();