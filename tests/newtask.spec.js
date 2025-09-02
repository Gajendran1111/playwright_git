// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

test('xpath',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="name"]').fill("java")
    // await page.fill('//input[@id="name"]','java')
    await page.locator('#sunday').check()
    // await page.check('#sunday')
    await page.waitForTimeout(3000)


})