const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//b1
for (let hocsinh in student){
    console.log("tên thuộc tính", hocsinh , `giá trị của thuộc tính ${student[hocsinh]}`);
}

//b2
const sum1 = Object.values(student).filter(value => typeof value === 'number')
.reduce((sokhoitao,giatrisotrong_obj)=>sokhoitao+giatrisotrong_obj,0)// 0 là giá trị của biến sokhoitao, khởi tạo giá trị =0 khi tính tổng
console.log(sum1);

//b3
const mang = Object.keys(student)
console.log(mang)

const keyArray = [];
for (let key in student) {
  keyArray.push(key);  // thêm từng key vào mảng mới
}
console.log(keyArray);