const { expect } = require("chai");

describe('mousehover', () => {

     it('move to bell icon', async () =>{
        // go to yahoo.com

        await browser.url('https://www.yahoo.com/');
        await browser.pause(3000);
        // find bellicon element

        const bellIcon = await $('//label[@for="ybarNotificationMenu"]');
        


        // move to bell icon and verify the link

        await bellIcon.moveTo();
        await browser.pause(3000);

        const Notifications = await $('//span[text()="Notifications"]');
        const isNotificationsDisplayed = await Notifications.isDisplayed();

        expect(isNotificationsDisplayed, 'Notifications panel is not displayed').to.be.true;

        await browser.pause(10000);

     })



})