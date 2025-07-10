import { test, expect } from "@playwright/test";
// có thể đặt data test ở đây để sử dụng ở bất kỳ đâu cũng được trong file test case

test.describe("AUTH - Authentication", async () => {

// Data test: nếu có 1 test group thì đặt biến ở đâu cũng được, nếu có nhiều test group thì đặt biến ở trong test group nào cần sử dụng vì phải phụ thuộc vào phạm vi hoạt động của biến
// 1 test group chỉ chạy 1 lần, 
// nếu cho vào trong beforeAll, thì do phạm vi hoạt động của biến thì mình cần phải khai báo biến trước bên ngoài rồi trong beforeAll chỉ khởi tạo giá trị thôi
const invalidUserCredential = {
  userName: "K14-class",
  password: "wrong password"
};
const xpathUsername = "//input[@id='user_login']";
const xpathPassword = "//input[@id='user_pass']";
const xpathButtonLogin = "//input[@id='wp-submit']";
const xpathErrorMessage = "//div[@id='login_error']";

  test.beforeAll(async () => {
    console.log("before all");
  });
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
  });
  test.afterAll(async () => {
    console.log("after all");
  });
  test.afterEach(async () => {
    console.log("after each");
  });
  test("@AUTH_001 - login faile ", async ({ page }) => {
    await test.step("Nhập vào thông tin username, password bị sai", async () => {
      // Action
      await page.locator(xpathUsername).fill(invalidUserCredential.userName);
      await page.locator(xpathPassword).fill(invalidUserCredential.password);

      // Expected result
      const actualUsername = await page
        .locator(xpathUsername)
        .inputValue(); // Assertion
      const actualPassword = await page
        .locator(xpathPassword)
        .inputValue(); // Assertion

      console.log("actualUsername:", actualUsername);
      console.log("actualPassword:", actualPassword);

      expect(actualUsername).toEqual(invalidUserCredential.userName);
      expect(actualPassword).toEqual(invalidUserCredential.password);
    });
    await test.step("Click login", async () => {
      // Action
      await page.click("//input[@id='wp-submit']");

      // Expected result
      const expectedErrMsg = `Error: The username ${invalidUserCredential.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`;
      console.log(expectedErrMsg);

      console.log(page.locator(xpathButtonLogin).textContent());

      // check xem element có tồn tại hay không
      console.log(
        await page.locator(xpathErrorMessage).count()
      );
      // Nếu = 0 ➡ XPath sai hoặc element chưa load.
      // Nếu > 0 ➡ Element có tốn tại.

      expect(
        await page.locator("xpath=//div[@id='login_error']//p").count()
      );

      await expect(
        page.locator("//div[@id='login_error']")
      ).toHaveText(expectedErrMsg);
    });
  });
  test("@AUTH_002 - login success ", async ({ page }) => {});
});
