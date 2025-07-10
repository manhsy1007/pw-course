import { test } from'@playwright/test';
test("click vào bài học 3: Todo page", async({ page})=> {
    await test.step("thêm mới 100 todo item có nội dung Todo<i>",async()=>{
await page.goto("https://material.playwrightvn.com/");
await page.click('//a[@href="03-xpath-todo-list.html"]');
await page.click('//*[@placeholder="Enter a new task"]');
for(var i=1; i<=100; i++){
await page.locator('//*[@placeholder="Enter a new task"]').fill(`Todo ${i}`);
await page.click('//*[@id="add-task"]');
}
    })

    await test.step("xoá các todo có số lẻ", async()=>{
page.on('dialog', async dialog =>{
    console.log("Hộp thoại hiện ra:", dialog.message());// in ra tiêu đề dialog
    await dialog.accept();
})
for(var i =1; i<=100; i++){
    if(i % 2 !==0){
        await page.locator(`//*[@id="todo-${i}-delete"]`).click();
    }
}
    })
})



