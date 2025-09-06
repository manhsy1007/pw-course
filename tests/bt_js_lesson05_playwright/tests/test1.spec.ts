import { test } from "@playwright/test";
import { Registerpage } from "../../bt_POM_lesson10_playwright/bt/register-page";
import { register } from "module";
let Registerpage1: Registerpage;
let date: string = '2001-07-10';
let username: string = 'Playwright Viet Nam';
let email: string = 'playwrightvietnam@gmail.com';
let description: string = 'Đây là lớp Playwright K11';
let hobbies: Array<"reading" | "traveling" | "cooking"> =['reading', 'cooking'];
let gender: 'Male' | 'Female' = 'Female'
let filePath: string = 'C:/Users/sy/Pictures/Screenshots/Screenshot 2025-02-12 000154.png';
let country: "usa" | "canada" | "uk" | "australia" = 'usa';
let interest: "technology" | "science" | "art" | "music" | "sports" = 'science';
let bio = "Vũ Thị Huệ"
                          
test("nhập đầy đủ các thông tin, click button register", async ({ page }) => {
Registerpage1 = new Registerpage(page);
  await test.step("Truy cập trang Register Page", async () => {
    await Registerpage1.gotoRegisterPage();  
    })
  await test.step("nhập đầy đủ các trường thông tin", async () => {
    //input
    await Registerpage1.fillUsername(username);
    await Registerpage1.fillEmail(email);
    //radio
    await Registerpage1.radioGender(gender);

    //checkbox
    await Registerpage1.checkboxHobbies(hobbies);

    //select option
await Registerpage1.selectInterest(interest);
await Registerpage1.selectCountry(country);

// date of brith
await Registerpage1.fillDateOfBirth(date);

//upload file
 await page.locator('//*[text()="Subscribe"]').scrollIntoViewIfNeeded();
await Registerpage1.chooseFile(filePath);

    // text area
    await Registerpage1.fillBiography(description);

    // thanh slidern
await Registerpage1.setSlider(9);

    //await page.locator('//input[@name="favcolor"]').click({ timeout: 2000 });
    //await page.locator('//*[@id="colorDisplay"]').click;
    await page.locator('//input[@name="favcolor"]').fill("#00fffb");

    await page.locator1('//*[@class="tooltip"]').hover();
    //await page.waitForTimeout(3000);
await Registerpage1.checkNewsletter();
 

    // toggleOption dạng checkbox
    const toggle = page.locator('//*[@class="slider round"]');
    const status = await toggle.getAttribute("aria-pressed");
    if (status !== "true") {
      await toggle.click();
    }

    await page
      .locator('//*[@name="customDate"]')
      .pressSequentially("10/07/2001");
  });

  await test.step("click button Register", async () => {
    await Registerpage1.clickBtnRegister();
  });
});
 test("Kiểm tra nội dung đã đăng kí ở bảng là đúng", async ({ page }) => {

 });
 test.afterEach(async ({ page }) => {
   await page.close();
 })