// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

test('assertion',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('Automation Testing Practice')
    // await expect(page.locator('//img[@align="top"]')).toBeVisible()
    const img = await page.locator('//img[@align="top"]')
    await expect(img).toBeVisible()
    await expect(page.locator('//button[text()="START"]')).toBeEnabled()
    await page.goto('https://www.instagram.com/')
    await expect(page.locator('//div[text()="Log in"]')).toBeDisabled()
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.check('#sunday')
    await expect (page.locator('#sunday')).toBeChecked()
    await expect(page.locator('//a[text()="GUI Elements"]')).toHaveText('GUI Elements')
    await expect(page.locator('//a[text()="GUI Elements"]')).toContainText('GU')
    await page.fill('#name',"Gajendran")
    await expect (page.locator('#name')).toHaveValue('Gajendran')
    const len = await page.locator('#country option')
    await expect(len).toHaveCount(10)

})




