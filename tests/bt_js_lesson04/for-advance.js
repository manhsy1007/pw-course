/*
- for... in sẽ dùng để lặp các thuộc tính trong 1 object
-  cú pháp:
for (let i in object){
//code here
}
*/
const student = {
    "name": "Sỹ",
    "age": 24,
    "address": "Hà Nội",
    "job":{
        "job_title": "QE",
        "companyAddress": "Cầu Giấy"
    }
}
for (let property in student){
    // code sử dụng key hoặc object[key]
    //key: là tên (tên thuộc tính) của mỗi thuộc tính trong object (kiểu string).
//object[key]: giá trị tương ứng với key đó.
    console.log(property);
    console.log(student[property])// lấy giá trị của thuộc tính trong object
}

let arr = [10, 20, 30];
for (let i in arr) {
    console.log(i);// lấy chỉ số của phần tử
    console.log(arr[i]); //lấy giá trị của phần tử
}

/*
- forEach là 1 hàm được hỗ trợ để dùng cho mảng
- Cú pháp:
arr.forEach((value, index))=>{
//code here
})
*/
let fruits =["banana", "orange", "apple"];
fruits.forEach((value, index) =>{
    console.log(value, index);
})

/*
- for... of sẽ dùng để lặp các giá trị trong mảng /string
-  cú pháp:
for (let i of object){
//code here
}
*/
for( let fruit of fruits){
    console.log(fruit);
}

let string1 = 'banana';
for(let char of string1){
    console.log(char);
}
// string.length để lấy độ dài của chuỗi và lấy ra từng phần tử 1 theo index
const str ="k14 2024";
for (let i =0; i<str.length; i++){
    console.log(str[i]);
}