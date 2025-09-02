// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

test('keyboard actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#name','gajendran')
    await page.keyboard.press('Control+a')
    await page.keyboard.press('Control+x')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+v')
    await page.keyboard.press('Shift+Tab')
    await page.keyboard.insertText('balaji')
    await page.waitForTimeout(3000)
})