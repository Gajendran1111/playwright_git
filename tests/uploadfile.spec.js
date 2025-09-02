// const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

test ("upload file",async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles('C:/Users/gajendran/Downloads/Array.txt')
    await expect(page.locator('#fileList')).toHaveText('Array.txt')
  

    await page.locator('#filesToUpload').setInputFiles([])
  await page.waitForTimeout(3000)
})