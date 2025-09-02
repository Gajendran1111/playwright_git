const {test,expect}=require('@playwright/test')

test('dinamic xpath',async({page})=>{
    await page.goto('https://www.amazon.in/OnePlus-Snapdragon%C2%AE-Smarter-Lifetime-Warranty/dp/B0F5WTG8RG/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.LAi5z5vs1wlGTD04ksrOBCGPXiijY8PIKCylk-lOrjSUDJd6x92MGt5oUhVvUOeyw8IO_U6eh_tUzwRZert_rkDF9nijO6Wm3VYdc0DQqdi5Hrg5ofP4RjGBawJpEY6M6IaSOav6dgf5ImPBYz87-89sRAH4qVRcXymY_QhTDjA1bfrWl9egL6PhYab9ZlygElRV28xVx_DntdC0JfTLk1z2_CJNDiNkn1Apid01KG4.A7jLRg9vbtItn8yMd35e3b5bFrZUWr_UamHtOd8rbCA&dib_tag=se&keywords=iphone%2B16%2Bpro%2B256gb&qid=1750230084&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1')
    const amount =await page.locator('//span[text()="₹57,999"]/parent::span/parent::span/preceding-sibling::span/parent::span/parent::span/parent::div/preceding-sibling::div/child::span/following-sibling::span/following-sibling::span/child::span/following-sibling::span/child::span/following-sibling::span')
    expect (amount).toHaveText('54,999')
})