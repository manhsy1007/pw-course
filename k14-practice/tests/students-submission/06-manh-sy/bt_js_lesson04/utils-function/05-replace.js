const phoneNumber = "0123 456 789";
const report = "Có 1 lỗi trong hệ thống";
const numbersStr = "1,234,567";

//b1
console.log(phoneNumber.replace(/ /g, ".")); // / /g: thay tất cả ký tự " " trong chuỗi.
console.log(phoneNumber.replace(/\s/g, "."));// \s: là khoảng trắng (space, tab, xuống dòng...). 
                                             // g: là global flag – áp dụng cho toàn chuỗi, không chỉ lần đầu.

//b2
console.log(report.replace("lỗi","bug"));

//b3
console.log(numbersStr.replace(/,/g,"."));
