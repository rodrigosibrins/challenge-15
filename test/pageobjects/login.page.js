class LoginPage {
    get inputName () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get divError () { return $('.error-message-container') }
    get btnError () { return $('.error-button')}
    get btnLogin () { return $('#login-button') }
    
    login (username, password) {
        this.inputName.setValue(username);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }
    open () {
        return browser.url('https://www.saucedemo.com');
    }
}

module.exports = new LoginPage();