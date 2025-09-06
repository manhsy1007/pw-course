import { Page} from "playwright"; // import đối tượng page từ thư viện playwright, đây là đại diện cho 1 tab trình duyệt
/*
- Name: BasePage
- Property: url
- Method: goto()
*/
class BasePage{
    page: Page;
    url: string;
    constructor(page: Page){
        this.page = page;
    }
    goto(){
        // goto a webpage
    }
}

/*
- Class name: LoginPage
- Properties: xpathUsername, xpathPassword, xpathBtnLogin
- Methods: fillUsername, fillPassword, clickBtnLogin
*/

class LoginPage extends BasePage{
    //Properties
   // page: Page; // thuộc tính page để lưu trữ đối tượng page
    xpathUsername = "//input[@id='user_login']"
    xpathPassword = "//input[@id='user_pass']"
    xpathBtnLogin = "//input[@id='wp-submit']"

// constructor
    constructor(page: Page) { //Hàm khởi tạo (constructor) sẽ nhận một biến page (do Playwright tạo) và gán vào thuộc tính this.page để sử dụng trong các method khác sau này (VD: click, fill…).
        //this.page = page;
    super(page);
    }
    fillUsername(){
 // fill username
    }
    }

let page: Page; // là biến có kiểu page
