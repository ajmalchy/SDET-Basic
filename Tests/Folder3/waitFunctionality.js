describe('wait functionality', () => {

// waitForDisplayed
        // it('waitForDisplayed', async () => {
        //    await browser.url('https://www.facebook.com/');
           
        //    await $('=Create new account').click();
           
        //    await $('#day').waitForDisplayed({timeout: 2000, timeoutMsg: 'date drowpdown in not displayed within 2 seconds'})
           
        // it('waitForClickable', async () => {
        //     await browser.url('https://www.facebook.com/');
        //     await $('<button>').waitForClickable({timeoutMsg: 'Login button is clickable after 10-seconds'});
        //     await $('#email').setValue('kien');
        //     await browser.pause(10000);
        // })

        it.only('waitUntil', async () => {
            /**
             * launch hotels.com
             * enter new in the destination
             * --> wait until auto suggestions are displayed
             * select Manhattan from auto suggestion
             * 
             */
            // launch hotels.com
            await browser.url('https://www.hotels.com/');

            // enter new in the destination
            await $('//button[@data-stid="destination_form_field-menu-trigger"]').waitForClickable();
            await $('//button[@data-stid="destination_form_field-menu-trigger"]').click();

            await $('#destination_form_field').waitForDisplayed();
            await $('#destination_form_field').setValue('new');

            await browser.waitUntil( async () => {
                const allSuggestions = await $$('//button[@data-stid="destination_form_field-result-item-button"]');
                return allSuggestions.length > 0;
            }, {timeout: 5000, timeoutMsg: 'Number of autosuggestions are not greater than 0'});

            // select "Manhattan from auto suggestion"
            const allSuggestions = await $$('//button[@data-stid="destination_form_field-result-item-button"]');

            for(const suggestion of allSuggestions){
                const suggestionText = await suggestion.getAttribute('aria-label');
                if(suggestionText.startsWith('Manhattan')){
                    await suggestion.click();
                    break;
                }
            }

        })
        })
