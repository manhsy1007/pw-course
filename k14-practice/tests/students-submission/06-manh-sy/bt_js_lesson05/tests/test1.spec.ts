import { test } from'@playwright/test';
test("nhập đầy đủ các thông tin, click button register", async ({ page})=> {
        await test.step("điều hướng đến trang web và click vào Bài học 1", async () =>{
await page.goto("https://material.playwrightvn.com/");
await page.locator(' //a[contains(text(), "Bài học 1: Register Page")]').click();
        })

        await test.step("nhập đầy đủ các trường thông tin", async()=>{
//input
await page.locator('//input[@id="username"]').fill("Mạnh Sỹ");
await page.locator("//input[@id='email']").pressSequentially("sydm@gmail.com");
       
//radio
const gender = await page.locator('//input[@id="female"]').isChecked();
console.log(gender);
await page.locator("//input[@id='female']").check();
const hobbies = await page.locator('//input[@id="reading"]').isChecked();
console.log(hobbies);
await page.locator("//input[@id='reading']").setChecked(true);

//select option
await page.locator("//option[text()='Sports']").click();
//await page.locator('//*[@name="country"]').click();
await page.locator('//*[@name="country"]').selectOption("United Kingdom");

await page.locator('//*[@name="dob"]').pressSequentially("10/07/2001");

await page.locator('//*[text()="Subscribe"]').scrollIntoViewIfNeeded();
await page.locator('//*[@name="profile"]').setInputFiles("C:/Users/sy/Pictures/Screenshots/Screenshot 2025-06-11 163851.png");

// text area
await page.locator("//*[@name='bio']").type("trần thị thơm");

// thanh slider
await page.locator('input[type="range"]').evaluate((slider, value) => {
  slider.value = 6;
  slider.dispatchEvent(new Event('input'));  // để cập nhật giao diện
  slider.dispatchEvent(new Event('change')); // để cập nhật dữ liệu
});

//await page.locator('//input[@name="favcolor"]').click({ timeout: 2000 });
//await page.locator('//*[@id="colorDisplay"]').click;
await page.locator('//input[@name="favcolor"]').fill("#00fffb");

await page.locator('//*[@class="tooltip"]').hover();
//await page.waitForTimeout(3000);
await page.locator('//*[@name="newsletter"]').check();

// toggleOption dạng checkbox
const toggle = page.locator('//*[@class="slider round"]');
const status = await toggle.getAttribute('aria-pressed');
if (status !== 'true') {
  await toggle.click();
}


await page.locator('//*[@name="customDate"]').pressSequentially("10/07/2001");
})

await test.step("click button Register", async()=>{
await page.click('//*[normalize-space()="Register"]');
})

})
    