import { expect, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { DashboardPage } from "./dashborad-page";
/* export: khi viết class vào từng file, muốn gọi lại thì phải export nó ra ở 1 file khác rồi mới import lại vào file chính được
Muốn dùng được class đó ở file test chính (.spec.js hoặc .spec.ts), bạn phải export nó ra từ file chứa class.
Sau đó, ở file test, bạn import nó vào để sử dụng.
*/
export class LoginPage extends BasePage { // LoginPage sẽ có tất cả property và method của BasePage, đồng thời có thể bổ sung thêm thuộc tính và phương thức riêng.
  xpathUserName = "//input[@id='user_login']";
  xpathPassword = "//input[@id='user_pass']";
  xpathBtnLogin = "//input[@id='wp-submit']";
  xpathErrMsg = "//div[@id='login_error']//p";
  
    xpathHeadingDashboard = "//h1[text()='Dashboard']";
    xpathHeadingAtAGlance = "//h2[text()='At a Glance']";
    xpathHeadingActivity = "//h2[text()='Activity']";
  constructor(page: Page, url: string) {
    super(page, url);// gọi lại contructor của BasePage để có thể sử dụng các thuộc tính và phương thức của BasePage
  }
  //get username
  async getUsername():Promise<string>{
    return await this.page.locator(this.xpathUserName).inputValue();
  }
  //get password
  async getPassword():Promise<string>{
    return await this.page.locator(this.xpathPassword).inputValue();
  }

  //fill username
  async fillUsername(username: string) :Promise<void>{
    await this.page.locator(this.xpathUserName).fill(username);
  }
  //fill password
  async fillPassword(password: string):Promise<void> {
    await this.page.locator(this.xpathPassword).fill(password);
  }
  //click btn login
  async clickBtnLogin():Promise<void> {
    await this.page.locator(this.xpathBtnLogin).click();
  }

  //login
  /** comment hàm dùng để chú thích
   * Login to pw-practive website
   * @param username 
   * @param password 
   * @returns
   */
  async login(
    username: string,
    password: string
  ): Promise<void> { // định nghĩa kiểu dl trả về, void là không trả về gì cả, chỉ có hành động thôi, không cần :Promise<void> cũng được k sai về mặt cú pháp
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickBtnLogin();
  }

  async getInputValue(fiedl: string): Promise<string> {
    // định nghĩa kiểu dl trả về, bất cứ hàm nào cũng cần kiểu trả về khi viết POM, những hàm nào trả về giá trị thì chúng ta trả về kiểu dữ liệu của hàm đấy 
    return await this.page.inputValue(fiedl);
  }

async verify_heading(){
  await expect(this.page.locator(this.xpathHeadingAtAGlance)
      ).toBeVisible();
}
  
}