// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

let page;
test.beforeEach('before process',async({browser})=>{
 page = await browser.newPage()
    await page.goto('https://demoblaze.com/index.html')
    await page.click('#login2')
    await page.fill('#loginusername','gajendrans')
    await page.fill('#loginpassword','11112000')
    await page.click('//button[text()="Log in"]')
})
test.afterEach(async()=>{
 await page.click('#logout2')
})

test('check list',async()=>{
    
    const product =await page.locator('.card')
    await expect(product).toHaveCount(9)

})
test('add to cart',async()=>{

await page.click('//a[text()="Samsung galaxy s6"]')
    await page.click('//a[text()="Add to cart"]')
    page.on('dialog',async dialog=>{
        await dialog.accept()
    })
   
})
