const {test,expect}=require('@playwright/test')

test('doubleclick action',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.dblclick('//button[text()="Copy Text"]')
    await page.waitForTimeout(3000)

})