class OrderPage {
    get mssgHeader () { return $('.complete-header') }
    get txtHeader () { return $('.complete-text')}
    get orderImg () { return $('.pony_express')}
    get backBtn () { return $('#back-to-products')}
}

module.exports = new OrderPage();