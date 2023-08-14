describe('scroll scenario', () =>{
    /*
    1. find the web element 
    2. use scrollIntoView()
    */
//    launch classroomessential site


// find the web element 
    it('scroll to featured product', async () => {
    await browser.url('https://www.classroomessentialsonline.com/');
    await browser.pause(3000);

// use scrollIntoView to scroll down to featured product heading

    const featuredProductHeading = await $('//h2[text()="New Products"]');
    featuredProductHeading.scrollIntoView(false);
    await browser.pause(10000);

    })


})