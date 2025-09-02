import {test,expect} from '@playwright/test'

test('build locators',async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo =await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:"submit"}).click()
    await expect(page.getByText('Time at Work')).toBeVisible()
    await page.getByLabel('Topbar Menu')
    await page.getByTitle('Assign Leave')
    await page.getByTestId('oxd-text oxd-text--p')
    await page.waitForTimeout(3000)   
})