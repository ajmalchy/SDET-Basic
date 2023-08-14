const { expect } = require("chai");
const { $$ } = require("webdriverio/build/commands/browser");

describe('basic locator strategy', () =>{
    
    
    it('verify user can enter login credential and click login button', async  () => {
        await browser.url('https://www.facebook.com/');
        await browser.pause(5000);
        const loginElement = await $('#email');
        loginElement.setValue('abcd@test.com');
        await browser.pause(5000);

        const loginPassElement = await $('input[name=pass]');
        loginPassElement.setValue('testpassword@123');
        await browser.pause(5000);

        const loginBtnElement = await $('button=Log in');
        loginBtnElement.click();

        await browser.pause(5000);
    })

    it('using other element locator techniques', async () =>{
        await browser.url('https://www.facebook.com/');
        await browser.pause(5000);
        const messengerElement = await $('=Messenger');
        messengerElement.click();
        await browser.pause(5000);
        
        const fypLinkElement = await $('*=got your');
        fypLinkElement.click();
        await browser.pause(5000);

        const fyaHeaderElement = await $('.uiHeaderTitle')
        const isFyaHeaderDisplayed = await fyaHeaderElement.isDisplayed();
        expect(isFyaHeaderDisplayed, 'Find your account header is not displayed').to.be.true;
        
    })


    it('using other element locator techniques', async () =>{
        await browser.url('https://www.facebook.com/');
        await browser.pause(5000);
        const messengerElement = await $('//a[@title="Check out Messenger"]');
        messengerElement.click();
        await browser.pause(5000);
        
        const fypLinkElement = await $('//a[contains(@href, "/recover/initiate")]');
        fypLinkElement.click();
        await browser.pause(5000);

        const fyaHeaderElement = await $('//h2[starts-with(@class, "uiHe")]');
        const isFyaHeaderDisplayed = await fyaHeaderElement.isDisplayed();
        expect(isFyaHeaderDisplayed, 'Find your account header is not displayed').to.be.true;
    })

    it('verify empty login fields', async () => {

        await browser.url('https://www.facebook.com/');

        const loginEmailField = await $('//input[contains(@data-testid, "al_em")]');
        const isLoginEmailFieldEnabled = await loginEmailField.isEnabled();
        expect(isLoginEmailFieldEnabled, 'Login email field is not enabled').to.be.true;


        const loginPasswordField = await $('//input[@aria-label="Password"]'); 
        const isLoginPasswordEnabled = await loginPasswordField.isEnabled();
        expect(isLoginPasswordEnabled, 'Login password field is not enabled').to.be.true;

        const loginBtnField = await $('//button[contains(text(), "g I")]'); 
        const isLoginBtnEnabled = await loginBtnField.isEnabled();
        expect(isLoginBtnEnabled, 'Login password field is not enabled').to.be.true;

    })

    /*
    drop down
    seletByVisibleText
    selectByAttribute
    selectByIndex
    */ 

    it.only('select data in a dropdown', async () => {
        await browser.url('https://facebook.com/');

    await $('//a[@data-testid="open-registration-form-button"]').click();
        await browser.pause(2000);

        await $('#month').selectByIndex(0);
        await browser.pause(2000);

        await $('select[aria-label=Day]').selectByAttribute('value', '2');
        await browser.pause(2000);
        await $('#year').selectByVisibleText('1990');
        await browser.pause(2000);
    })

    // verify there are 46 links in the facebook login page 
    it('verify there are 46 links', async () => {
        await browser.url('https://www.facebook.com/');
    // $$ function retruns an array of web element
    await browser.pause(5000);
    // const allLinks = await $$('<a>');
    // expect(allLinks.length, 'Number of links is not expected').to.equal(46);
    })
})