/*
- Hàm ẩn danh (hàm không có tên, thường gán cho biến)
- Gán hàm vào 1 biến hoặc gán làm tham số cho hàm khác
- Không cần gọi trước khi khai báo 
- Không cần đặt tên
- Cú pháp:function (parameters) {}
*/

// const tenBien = function(thamSo){ // thân hàm }

// làm tham số cho 1 hàm khác
let sum = function(a,b){
    return a+b;
};
function sum(a,b){
    return a+b
}

const tinhHieu = function(a, b) {
  return a - b;
};
console.log(tinhHieu(5, 3)); // 2
