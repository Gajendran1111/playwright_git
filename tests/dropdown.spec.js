// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

test('drop down',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#country').selectOption('India')
    // await page.selectOption('#country','India')
    // await page.locator('#country').selectOption({label:'Canada'})
    // await page.locator('#country').selectOption({value:'usa'})
    await page.locator('#country').selectOption({index:3})

    //  const len = await page.locator('#country option')
    //  expect(len).toHaveCount(10)

    await page.waitForTimeout(3000)
})