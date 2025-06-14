const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//b1
numbers.forEach((value, index)=>{
    console.log(value);
})

//b2
let tong=0;
let max = numbers [0];// gán max cho giá trị đầu tiên trong mảng
let min = numbers [0];// gán min cho giá trị đầu tiên trong mảng
numbers.forEach((num)=>{
    if(num>max)
        max=num;
    if(num<min)
    min=num;
    tong+=num;
});
console.log("Max:", max);
console.log("Min:", min);
console.log("tổng:"+ tong);

//b3
const mangmoi = numbers.map(ptu_nhd => ptu_nhd*2);
console.log(mangmoi);

let doubled = []// tạo ra 1 mảng mới
numbers.forEach((num1)=>{
    doubled.push(num1*2);// thêm ptu vào cuối mảng và trả về mảng mới
})
console.log(doubled);

