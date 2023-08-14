const { expect } = require("chai");

describe('practice', () => {

    it('verify how many links on the classroom site', async () =>{
        await browser.url('https://classroomessentialsonline.com/')
        await browser.pause(2000);

        const allLinks = await $$('<a>')
        expect(allLinks.length, 'number of links are not as expected').to.equal(185);
    })

})