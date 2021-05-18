class CheckPage {
    get firstnameInp () { return $('#first-name') }
    get lastnameInp () { return $('#last-name') }
    get postalInp () { return $('#postal-code') }
    get errorDiv () { return $('.error-message-container').$$('h3')}
    get cancelBtn () { return $('#cancel')}
    get continueBtn () { return $('#continue')}
    
    fillForm (name, lastname, postal) {
        this.firstnameInp.setValue(name);
        this.lastnameInp.setValue(lastname);
        this.postalInp.setValue(postal);
        this.continueBtn.click();
        browser.pause(2000);
    }
}

module.exports = new CheckPage();