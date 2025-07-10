import { test, expect } from '@playwright/test';

test.describe('Nhóm test: Đăng nhập hệ thống', () => {

  test.beforeAll(async () => {
    console.log(
      "Before All - Chạy setup DB, setup data test, tạo user hoặc mở browser trước tất cả testcase"
    );
  });

  test.afterAll(async () => {
    console.log('After All - Cleanup, đóng browser hoặc reset dữ liệu test sau tất cả testcase');
  });

  test.beforeEach(async ({ page }) => {
    console.log('Before Each - Chạy trước mỗi test case, ví dụ mở trang login');
    await page.goto('https://example.com/login');
  });

  test.afterEach(async () => {
    console.log('After Each - Chạy sau mỗi test case, ví dụ clear session hoặc chụp screenshot khi fail');
  });

  test('Test Case 1 - Login với tài khoản đúng', async ({ page }) => {
    await page.fill('#username', 'user1');
    await page.fill('#password', 'password1');
    await page.click('button[type="submit"]');
    await expect(page.locator('h1')).toHaveText('Welcome');
  });

  test('Test Case 2 - Login với mật khẩu sai', async ({ page }) => {
    await page.fill('#username', 'user1');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error')).toHaveText('Sai mật khẩu');
  });

});