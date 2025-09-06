const studenArr = [
  "Huệ",
  "Thơm",
  "Mai",
  "My",
  17,
  23,
  { student: { age: 18 } },
];// trong mảng có thể chứa các ký tự và object, mảng chứa mảng
console.log(studenArr);
// độ dài của mảng
const count = studenArr.length;
console.log(count);
//lấy phần tử theo index
console.log(studenArr[1]);
console.log(studenArr[6])
//thêm phần tử vào mảng ta dùng hàm push
const arr = [1,2];
arr.push(3);
console.log(arr);
// mảng các object 
let studentlist = [
    {name: "sỹ", score:17},
    {name: "huệ", score:18},
    {name: "thơm", score:19},
];

const fruits = ["apple", "banana", "mango"];
// Cách thường
const f1 = fruits[0];
const f2 = fruits[1];
// Dùng destructuring
const [first, second] = fruits;
console.log(first);  // apple
console.log(second); // banana