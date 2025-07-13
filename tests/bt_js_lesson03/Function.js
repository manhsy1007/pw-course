// hàm định danh namefunction
// function tenHam(thamSo){ // thân hàm }
function helloworld() {
  console.log("hello world!");
}
helloworld(); // gọi hàm và thực thi nội dung bên trong hàm

function studentName(student) {
  console.log(`tên học viên: ${student}`);
}
const student = "Huệ";
studentName(student);

//return value
//viết hàm tính tổng
function sum(a, b) {
  const sum = a + b;
  const e = a * b;
  return [sum,e]; // cái nào cần trả ra thì mới cần return
}
let total = sum(5, 6);
console.log(total);

const studenArr = [
  "Huệ",
  "Thơm",
  "Mai",
  "My",]
  for ( let i=0; i<studenArr.length;i++){
    //gọi hàm
    studentName(studenArr[i])
  }

// tạo tên ngẫu nhiên
function generateNameFromList() {
  const names = ['Manh', 'Sy', 'Linh', 'Hoa', 'Minh', 'Tuan', 'Thơm', 'Huệ'];
  const lastNames = ['Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Trần', 'Vũ'];
  
  const first = names[Math.floor(Math.random() * names.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];

  return [`${first} ${last}`, `${first}-${last}`];
}
const [tagname, tagname1] = generateNameFromList();

