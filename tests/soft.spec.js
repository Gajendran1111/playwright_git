const {test,expect}=require('@playwright/test')

test('soft assertion',async({page})=>{
   
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect.soft(page.locator('//img[@alt="company-branding"]')).toBeVisible()
    await page.fill('//input[@name="username"]','Admin')
    await page.fill('//input[@name="password"]','admin123')
    await page.click('//button[text()=" Login "]')
    await page.waitForTimeout(3000)



})