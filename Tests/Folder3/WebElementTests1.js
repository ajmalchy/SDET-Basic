const { expect } = require("chai");

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

    it.only('using other element locator techniques', async () =>{
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
})