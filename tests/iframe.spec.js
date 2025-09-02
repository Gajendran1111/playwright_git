const {test, expect } = require("@playwright/test");

test('iframe',async({page})=>{

    await page.goto('https://letcode.in/frame')
    const key =await page.frame({url:"https://letcode.in/frameui"})
    await key.fill('//input[@placeholder="Enter name"]','playwright')
    await page.pause()
 


})
