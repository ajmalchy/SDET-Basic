const { expect } = require("chai");

describe('Multiple windows', () => {

    it('verify instagram launched in new window', async () =>{
        /**
         * launch facebook
         * click instgram
         * verify instagram opened in a new window
         *      - verify there are 2 windows
         * verify one title is facebook
         * another is instagram
         * 
         */
        const launchUrl = 'https://www.facebook.com/'
        await browser.url(launchUrl);
        await browser.pause(2000);
        // click on instagram
        const instaElement = $('//a[text()="Instagram"]');

        await instaElement.click();
        await browser.pause(3000);

        // verify there are 2 windows opened
        const allHandles = await browser.getWindowHandles();
        expect(allHandles.length, 'Instagram should have opened a new window').to.equal(2);
        // verify one is facebook by title

        const fbTitle = await browser.getTitle();
        const expFbTitle = 'Facebook - log in or sign up';
        expect(fbTitle, 'Facebook title not seen').to.equal(expFbTitle);

        const fbHandle = await browser.getWindowHandles();

        for(const handle of allHandles){
            if (handle != fbHandle){
                await browser.switchToWindow(handle)
            }
        }

        const instagramTitle = await browser.getTitle();
        const expInstaTitle = 'Instagram';
        expect(instagramTitle, 'Instagram page is not seen').to.equal(expInstaTitle); 
    })




})