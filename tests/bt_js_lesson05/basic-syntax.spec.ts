import { test } from'@playwright/test';

test("tên test case", async ({ page})=> {
    await test.step("tên step", async () =>{
        // navigate
await page.goto("https://material.playwrightvn.com/");
    
// click()
await page.locator(' //a[contains(text(), "Bài học 1: Register Page")]').click({clickCount: 5, button:"right",modifiers: ["Control", "Alt"]});

// input()
await page.locator('//input[@id="username"]').fill("K14 playwright");

await page.locator('//input[@id="email"]').pressSequentially("K14 playwright test basic syntax");

// radio / checkbox
await test.step("", async () =>{
    const ischeked1 = await page.locator('//input[@value = "male"]').isChecked();

    await page.locator('//input[@value = "male"]').check();
    const isCheked2= await page.locator('//input[@value = "male"]').isChecked();
    console.log(isCheked2);

    // Select option
await page.locator('//select[@id ="country"]').selectOption('canada');

// Set input file
await page.locator('//select[@id = "profile"]').setInputFiles("tests\lesson-2\key-takeaways.md");

});

}); 

    await test.step('tên step2', async () =>{

    })
});