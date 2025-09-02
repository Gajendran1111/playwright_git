const {test,expect}=require('@playwright/test')

test('mouse wheel',async({page})=>{

    await page.goto('https://www.myntra.com/?utm_source=gh_toi&utm_medium=toi_rev&utm_campaign=gh_toi_msp_6&gad_source=1&gad_campaignid=22414585575&gbraid=0AAAAAq14V9sSb5cnsZKqauxY9uPYKyQTB&gclid=Cj0KCQjw0LDBBhCnARIsAMpYlAqP7rn3nc9YPIq0r7VpoiwsfcpdkRKDFCuabMDVuLdnG9biuobwIa0aAlShEALw_wcB')
    // await page.mouse.wheel(0,500)
    // await page.mouse.wheel(0,-500)
    await page.locator('//img[@class="desktop-iOSDownLink"]').scrollIntoViewIfNeeded()
    // await page.waitForTimeout(2000)

})