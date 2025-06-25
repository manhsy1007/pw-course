import { test } from'@playwright/test';
test("click vào bài học 4: Personal notes", async({ page})=> {
const notes =[
    {title:"Google Search giảm khả năng kéo truy cập cho các website",
     content:" Tính năng Overview của Google và các công cụ tìm kiếm AI đang làm giảm lưu lượng truy cập tới các trang web lớn."
    },
    {
        title: "Nhiều Gen Z Mỹ quay lại dùng điện thoại BlackBerry cũ",
        content: "Nhiều Gen Z ở Mỹ đang săn lùng các mẫu điện thoại "
    }
]

      await test.step("thêm mới 10 note có nd là tiêu đề và 1 phần ngắn (khoảng 3 dòng) tại báo vnexp",async()=>{
await page.goto("https://material.playwrightvn.com/");
await page.click('//a[@href="04-xpath-personal-notes.html"]');

for (const note of notes){
    await page.locator('//*[@id="note-title"]').fill(note.title);
await page.locator('//*[@placeholder="Enter note content"]').fill(note.content);
await page.click('//*[@id="add-note"]');
}
})

await test.step("thực hiện search theo tiêu đề bài báo bất kì", async()=>{
    await page.locator('//*[@id="search"]').fill("AI");
})


})