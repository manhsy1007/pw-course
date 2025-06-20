/* Hàm return trong JavaScript dùng để trả về giá trị từ bên trong một hàm ra bên ngoài.
- Giúp hàm đưa kết quả ra bên ngoài để lưu vào biến hoặc dùng tiếp.
- Khi gặp return, hàm sẽ ngừng chạy ngay lập tức, bỏ qua các dòng sau.
- Return chỉ dùng được bên trong một hàm.
- Return chỉ trả về giá trị, không in ra màn hình console
- Sau khi return, các dòng sau trong hàm sẽ không được thực thi.

function tenHam() {
  return gia_tri;
}
  
*/

function cong(a, b) {
  return a + b;
}

let ketQua = cong(3, 5); // ketQua = 8
console.log(ketQua);     // In ra: 8
