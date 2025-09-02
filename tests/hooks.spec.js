// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

test('check list',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    await page.click('#login2')
    await page.fill('#loginusername','gajendrans')
    await page.fill('#loginpassword','11112000')
    await page.click('//button[text()="Log in"]')
    const product =await page.locator('.card')
    await expect(product).toHaveCount(9)
    await page.click('#logout2')
})
test('add to cart',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    await page.click('#login2')
    await page.fill('#loginusername','gajendrans')
    await page.fill('#loginpassword','11112000')
    await page.click('//button[text()="Log in"]')
    await page.click('//a[text()="Samsung galaxy s6"]')
    await page.click('//a[text()="Add to cart"]')


    page.on('dialog',async dialog=>{
        await dialog.accept()
    })
    await page.click('#logout2')
})
