const {test,expect}= require('@playwright/test')

test('locators',async({page})=>{

    await page.goto('https://demoblaze.com/')

    await page.locator('#login2')
    await page.click('#login2')
    // await page.close()
    await page.fill('#loginusername','trendnologies')
    await page.fill('#loginpassword','trend@321')
    await page.goBack()
    await page.goForward()
    await page.press('#cartur','Enter')
    await page.reload()
    await page.url('https://demoblaze.com/cart.html')
    await page.title('STORE')
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#sunday').check()
    await page.check('#sunday')
    await page.uncheck('#sunday')
    await page.selectOption('#country','China')
    await page.waitForTimeout(3000)



})

