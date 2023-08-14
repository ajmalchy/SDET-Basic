describe('Calendar scenario', () => {
    it('verify user can select dates from calendar', async () => {
        // check hotel.com
    await browser.url('https://www.hotels.com/');
    await browser.pause(3000);

    // enter new in destination
    await $('//button[@data-stid="destination_form_field-menu-trigger"]').click();
    await browser.pause(2000);
    await $('//input[@data-stid="destination_form_field-menu-input"]').setValue('new');
    await browser.pause(2000);

    // select newport beach from auto suggestion
const allSuggestions = await $$('//button[@data-stid="destination_form_field-result-item-button"]');

for(const suggestion of allSuggestions){
 const suggestionText = await suggestion.getAttribute('aria-label');
 if(suggestionText.startsWith('Newport Beach')){
    await suggestion.click();
    break;
 }

}
await browser.pause(2000);

// pick check-in date Aug -23
const datePickBtn = await $('#date_form_field-btn');
await datePickBtn.click()
await browser.pause(3000);

const allAugDates = await $$('//h2[text()="August 2023"]/following-sibling::table//button');
for (const augDate of allAugDates){
    const dateValue = await augDate.getAttribute('data-day');
    if (dateValue.localeCompare('23') === 0) {
        await augDate.click();
        break;
    }
}


// pick check-out date Aug-28
await browser.pause(3000);

for (const augDate of allAugDates){
    const dateValue = await augDate.getAttribute('data-day');
    if (dateValue.localeCompare('28') === 0) {
        await augDate.click();
        break;
    }}
    await browser.pause(3000);
// click select button

    const doneBtn = $('//button[@data-stid="apply-date-picker"]');
    await doneBtn.click();
    await browser.pause(3000);

    })
})