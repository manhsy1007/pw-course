import { test } from'@playwright/test';
test("thêm sản phẩm để giở hàng có số lương sản phẩm theo yêu cầu", async({ page})=> {
    await test.step("click vào bài 2", async()=>{
    await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("https://material.playwrightvn.com/");
        await page.click('//a[@href="02-xpath-product-page.html"]');
    })

    await test.step("thêm 2 sản phẩm vào sản phẩm 1", async()=>{
      await page.locator('(//*[@class="add-to-cart"])[1]').click({clickCount:2});  
    })
      await test.step("thêm 3 sản phẩm vào sản phẩm 2", async()=>{
      await page.locator('(//*[@class="add-to-cart"])[2]').click({clickCount:3});  
    })
      await test.step("thêm 1 sản phẩm vào sản phẩm 3", async()=>{
      await page.locator('(//*[@class="add-to-cart"])[3]').click();
      await page.locator('//*[text()="Total Price"]').scrollIntoViewIfNeeded();  
    })

});