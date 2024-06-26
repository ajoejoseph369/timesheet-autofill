const { $ } = require('@wdio/globals');
const {Key} = require('webdriverio');

const usernameInput = '//*[@id="login_email"]';
const passwordInput = '//*[@id="login_password"]';
const loginBtn = '//*[@class="btn btn-sm btn-primary btn-block btn-login"]';

class Page{
    async goToUrl(){
        await browser.url('https://erp.people10.com/#login');
    }

    async login(username,password){

        await $(usernameInput).click();
        console.log(username);
        for (const char of username) {
            await browser.keys(char);
        }

        await $(passwordInput).click();
        console.log(password);
        for (const char of password) {
            await browser.keys(char);
        }

        await $(loginBtn).click();
        await browser.pause(3000);
    }

    async checkRedirection(){
        return(await browser.getTitle()=="Home");
    }
}

module.exports = new Page();