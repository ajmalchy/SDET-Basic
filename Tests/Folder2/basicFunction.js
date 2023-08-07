// url() - to launch a webpage on a browser window

const { expect } = require("chai");

describe('Basic Functions webdriverIO', () => {
    it('To launch a webpage', async () => {
        await browser.url('https://www.weather.com/');
        await browser.pause(5000);
    // pause() - to pause the execution of a async wait function for x miliseconds
    })


    it('gth', async () => {
        await browser.url('https://www.facebook.com/');
        
        await browser.maximizeWindow();
        await browser.pause(5000);
        

        const pageTitle = await browser.getTitle();
        expect(pageTitle.startsWith('Facebook'), 'Page title does not start with "Facebook"').to.be.true;

        const pageUrl = await browser.getUrl();
        expect(pageUrl.includes('book.co'), 'Page url does not contain "book.co"').to.be.true;
        })


        it.only('Learning getWindowHandle, back, forward, refresh functions', async () => {

        await browser.url('https://www.weather.com/');

        const handle =  await browser.getWindowHandle();
        expect(handle.length > 0, 'Window handle length is not greater than 0').to.be.true;

        await browser.url('https://www.facebook.com/');
        await browser.url('https://www.amazon.com/');
           
        await browser.back();
        await browser.back();

        await browser.url('https://www.scholastic.com/');
        await browser.back();
        await browser.forward();

        await browser.url('https://www.zillow.com/');

        await browser.refresh();
        })



    })
