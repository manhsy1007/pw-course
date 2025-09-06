import { Page } from "@playwright/test"; 
import { MaterialBasePage } from "./material-page";
import { promises } from "dns";
export class Registerpage extends  MaterialBasePage{
    xpathUsername = "//input[@id='username']";
    xpathEmail = "//input[@id='email']";
    xpathGenderMale = "//input[@id='Male']";
    xpathGenderFemale = "//input[@id='female']";
    getXpathOptionHobby(hobby: "reading" | "traveling" | "cooking") {
        return `//input[@id='${hobby}']`
    }
    xpathSelectInterest = "//select[@id='interests']";
    xpathSelectCountry = "//select[@id='country']";
    xpathDateOfBirth = "//input[@id='dob']";
    xpathProfilePicture = "//input[@id='profile']";
    xpathBiography = "//textarea[@id='bio']";
    xpathNewsletter = "//input[@id='newsletter']";
    xpathBtnRegister = "//button[contains(text(), 'Register')]";


constructor( page: Page) {
    super(page);

}

async gotoRegisterPage(){
    await this.openMaterialPage();
    await this.gotoPage("Register Page");
}
async fillUsername(username:string){
    await this.page.fill(this.xpathUsername, username);
}
async fillEmail(email:string){
    await this.page.locator(this.xpathEmail).fill(email);
}
async radioGender(gender:"Male" | "Female"){
  if(gender == "Male"){
    await this.page.locator(this.xpathGenderMale).click();
  }
  if(gender == "Female"){
    await this.page.locator(this.xpathGenderFemale).click();
  }
}
async checkboxHobbies(hobbies:("reading" | "traveling" | "cooking" )[]){
    for(const hobbi of hobbies ){
    await this.page.locator(this.getXpathOptionHobby(hobbi)).check();
}}
async selectInterest(interest:string){
    await this.page.locator(this.xpathSelectInterest).selectOption(interest);
}
async selectCountry(countryValue: "usa" | "canada" | "uk" | "australia"){
    await this.page.locator(this.xpathSelectCountry).selectOption(countryValue);
}
async fillDateOfBirth(date:string){
    await this.page.locator(this.xpathDateOfBirth).fill(date);
}
async chooseFile(filePath:string){
    await this.page.locator(this.xpathProfilePicture).setInputFiles(filePath);
}
async fillBiography(description:string){
    await this.page.locator(this.xpathBiography).fill(description);
}

  // hàm set slider
  async setSlider(value: number) {
    const slider = this.page.locator('input[type="range"]');
    await slider.evaluate((sliderEl, newValue) => {
      (sliderEl as HTMLInputElement).value = String(newValue);
      sliderEl.dispatchEvent(new Event("input", { bubbles: true }));
      sliderEl.dispatchEvent(new Event("change", { bubbles: true }));
    }, value);
  }
async checkNewsletter(){
    await this.page.locator(this.xpathNewsletter).check();
}
async clickBtnRegister(){
    await this.page.locator(this.xpathBtnRegister).click();
}

async fillRegisterPage(fill_thongtin: {
    username: string,
    email: string,
    gender: "Male" | "Female",
    hobby: "reading" | "traveling" | "cooking",
    interestValue: "technology" | "science" | "art" | "music" | "sports",
    countryValue: "usa" | "canada" | "uk" | "australia",
    date: string,
    filePath: string,
    bio: string

}){
    await this.fillUsername(fill_thongtin.username);
    await this.fillEmail(fill_thongtin.email);
    await this.radioGender(fill_thongtin.gender);
   // await this.checkboxHobbies(fill_thongtin.hobby);
    await this.selectInterest(fill_thongtin.interestValue);
    await this.selectCountry(fill_thongtin.countryValue);
    await this.fillDateOfBirth(fill_thongtin.date);
    await this.chooseFile(fill_thongtin.filePath);
    await this.fillBiography(fill_thongtin.bio);
    await this.checkNewsletter();
    await this.clickBtnRegister();

}
}