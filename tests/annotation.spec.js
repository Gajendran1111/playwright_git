const {test,expect}=require('@playwright/test')

/*test.skip('skip',async()=>{
    console.log("hello java");
    
})
test ('skip2',async()=>{
    console.log("hello javascript");
    
})*/

/*test.only('only',async()=>{
    console.log("hello java");
    
})
test('only2',async()=>{
    console.log("hello javascript");
    
})*/


/*test.fixme('fixme',async()=>{
    console.log("hello java");
    
})
test ('fixme2',async()=>{
    console.log("hello javascript");
    
})*/
// test('fail',async()=>{
//     test.fail()
//     console.log("hello java");
//     expect(1).toBe(2)
    
// })
// test ('skip2',async({page,browserName})=>{
//     if(browserName === 'chromium'){
//         test.fail()
//     }
//     console.log("hello javascript");
    
// })

test('slow',async({page})=>{
    test.slow()
    await page.goto('https://demoblaze.com/')

})
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.getByRole('checkbox', { name: 'Thursday' }).check();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByRole('checkbox', { name: 'Saturday' }).check();
  await page.getByRole('checkbox', { name: 'Wednesday' }).uncheck();
// }); await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' })