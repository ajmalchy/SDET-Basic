const { expect } = require("chai");

 describe('multiple web elements', () => {
    it('verify there are 46 links on the facebook.com', async () =>{

        // launch facebook.com
        await browser.url('https://facebook.com/')
        await browser.pause(5000);
        // verify 46 number of links
        // $$ - returns an array of web element like [w1, w2, ...]
        const allLinks = await $$('<a>')
        expect(allLinks.length, 'Number of link is not as expected').to.equal(46);
    });

    it('verify there are correct number of options/data in month and date dropdowns', async () =>{
        // launch facebook
        await browser.url('https://facebook.com/')
        await browser.pause(2000);

        // click on the create new account button
        const createNewAccountBtn = await $('//form[@data-testid="royal_login_form"]//a[@data-testid]');
        await createNewAccountBtn.click();
        await browser.pause(5000);

        // verify there are 12 options in month dropdown
        const monthOptions = await $$('//select[@id="month"]//option');
        expect(monthOptions.length, 'number of options in dropdown not as expected').to.equal(12);

           // verify there are 31 options in date-dropdown
    const dayOptions = await $$('//select[@id="day"]//option');
    expect(dayOptions.length, 'number of options in dropdown not as expected').to.equal(31);

   
    })

    it.only('eleven nav headings', async () => {
         // launch the website
    await browser.url('https://classroomessentialsonline.com/')
    await browser.pause(2000);
    // verify there are 11 navigation links on the home page
    const navLinks = await $$('//li[@class="navPages-item"]//a[@aria-controls="navPages-"]')
    expect(navLinks.length, 'nav links are not eleven').to.equal(11);
    console.log(navLinks.length);
    await browser.pause(2000);
    })
   

 })