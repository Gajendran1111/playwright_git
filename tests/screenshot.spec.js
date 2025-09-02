const {test,expect }= require('@playwright/test')

test('home page screen shot',async({page})=>{

    await page.goto('https://www.amazon.in/s?i=toys&rh=n%3A1350380031%2Cp_36%3A2485524031%2Cp_n_age_range%3A1480705031%257C1480706031%257C1480707031&dc&ds=v1%3AfA61fYKOIZ%2FFtIejsMqUgp%2BDkz5O5Fau3bc%2FwQOLm2w&_encoding=UTF8&content-id=amzn1.sym.4e84de2b-0a38-421f-acce-fe3cd09c3508&pd_rd_r=09f5461d-75df-4d9a-b0e4-dd7091d4af14&pd_rd_w=KHPU6&pd_rd_wg=YE4wv&pf_rd_p=4e84de2b-0a38-421f-acce-fe3cd09c3508&pf_rd_r=7FX2VR40THSGGTWYBVZW&qid=1741871368&rnid=1480704031&ref=pd_hp_d_hero_unk')
    await page.screenshot({path:'C:/Users/gajendran/vscodes/playwrightbatch4/tests/photos'+Date.now()+'home page.png'})

})

test('full page',async({page})=>{

    await page.goto('https://www.amazon.in/s?i=toys&rh=n%3A1350380031%2Cp_36%3A2485524031%2Cp_n_age_range%3A1480705031%257C1480706031%257C1480707031&dc&ds=v1%3AfA61fYKOIZ%2FFtIejsMqUgp%2BDkz5O5Fau3bc%2FwQOLm2w&_encoding=UTF8&content-id=amzn1.sym.4e84de2b-0a38-421f-acce-fe3cd09c3508&pd_rd_r=09f5461d-75df-4d9a-b0e4-dd7091d4af14&pd_rd_w=KHPU6&pd_rd_wg=YE4wv&pf_rd_p=4e84de2b-0a38-421f-acce-fe3cd09c3508&pf_rd_r=7FX2VR40THSGGTWYBVZW&qid=1741871368&rnid=1480704031&ref=pd_hp_d_hero_unk')
    await page.screenshot({path:'C:/Users/gajendran/vscodes/playwrightbatch4/tests/photos'+Date.now()+'full page.png',fullPage:true})
})
test.only('particular page',async({page})=>{

    await page.goto('https://www.amazon.in/s?i=toys&rh=n%3A1350380031%2Cp_36%3A2485524031%2Cp_n_age_range%3A1480705031%257C1480706031%257C1480707031&dc&ds=v1%3AfA61fYKOIZ%2FFtIejsMqUgp%2BDkz5O5Fau3bc%2FwQOLm2w&_encoding=UTF8&content-id=amzn1.sym.4e84de2b-0a38-421f-acce-fe3cd09c3508&pd_rd_r=09f5461d-75df-4d9a-b0e4-dd7091d4af14&pd_rd_w=KHPU6&pd_rd_wg=YE4wv&pf_rd_p=4e84de2b-0a38-421f-acce-fe3cd09c3508&pf_rd_r=7FX2VR40THSGGTWYBVZW&qid=1741871368&rnid=1480704031&ref=pd_hp_d_hero_unk')
    await page.locator('(//img[@aria-hidden="true"])[7]').screenshot({path:'C:/Users/gajendran/vscodes/playwrightbatch4/tests/photos'+Date.now()+'elementpage.png'})
})