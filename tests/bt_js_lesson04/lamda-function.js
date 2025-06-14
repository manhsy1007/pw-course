//
/*
- Viết hàm ngắn gọn, đặc biệt trong các hàm callback như map, filter, forEach.
- Cú pháp: (parameters) => {
    //code
    }

- const tenBien = (thamSo) => {
    // thân hàm
    }
*/

// Hàm có nhiều tham số
let sum = (a,b) =>{
    return a+b;
};
const total = sum(5,6);
console.log(total);

// Hàm có 1 tham số
let dup = x => {
    return x*2;
}

// Hàm chỉ có 1 biểu thức return
let dup2 = x =>x*2;

// Hàm không có tham số
() => {
    //code
    console.log("");
}