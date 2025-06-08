// Arry util
let str ="hello K14 class";
let arr =["Nhung", "Nhi", "Tài", "Hằng", "Quang"];
// map(): tạo ra 1 mảng mới bằng cách áp 1 hàm lên từng phần tử của mảng gốc
let upperName = arr.map(nameValue => nameValue.toLocaleUpperCase());
console.log(upperName);

// filter(): tạo 1 mảng mới, chỉ bao gồm phần tử thoả mãn điều kiện được chỉ định
let hue = [1,2,3,4,5,6];
let evenNumber = hue.filter(num => num%2 ===0);
console.log(evenNumber);

// find(): trả về giá trị phần tử đầu tiên mà thoả mãn điều kiện trong mảng, nếu không có phần từ thoả mãn thì trả về undefined
let thom = [8,7,6,5,4,3,2,1];
let evenNumber2= thom.find(num => num%2===0);
console.log(evenNumber2);

// reduce(): áp dụng từng phần từ trong mảng và trả về 1 kết quả duy nhất
let sum = thom.reduce((total, num) => total + num,0);
console.log(sum);

// some(): check có tồn tại phần tử nào trong mảng thoả mãn đk không, có thì trả về true, không thì trả về false
let checkNum = thom.some(num => num>=6);
console.log(checkNum);

// every(): check toàn bộ phần tử trong mảng xem có thoả mãn đk không, có thì trả về true, không thì trả về false
let checkNum2 = thom.every(num => num %2 ===0);
console.log(checkNum2);

// push(): thêm 1 hoặc nhiều phần từ vào phía cuối mảng và trả về độ dài của mảng mới
thom.push(1,3);
console.log(thom);
// trả vè độ dài mảng
console.log(thom.push(1,3));

// shift(): loại bỏ phần từ đầu tiên của mảng và trả về phần tử đấy, có thay đổi mảng
console.log(thom.shift());
console.log(thom);

// sort(): sắp xếp các phần tử trong mảng theo từ điển Unicode, chuyển từng phần tử về dạng chuỗi, sau đó so sánh chuỗi rồi mới sắp xếp
console.log(thom.sort());

// pop(): xoá và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
let arr5 = [1,2,3];
let last = arr5.pop();
console.log(arr5);//[1,2]
console.log(last);//3

// unshift(): thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc
let arr6 = [1,2,3];
arr.unshift(0); //[0,1,2,3]
console.log(arr6);