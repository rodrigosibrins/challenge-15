class OverviewPage {
    get itemDiv () { return $('.cart_item') }
    get summaryDiv () { return $('.summary_info')}
    get subtotalInfo () { return $('.summary_subtotal_label')}
    get cancelBtn () { return $('#cancel')}
    get finishBtn () { return $('#finish')}
}

module.exports = new OverviewPage();