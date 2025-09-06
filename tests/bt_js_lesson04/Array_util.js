// Arry util
let str ="hello K14 class";
let arr =["Nhung", "Nhi", "Tài", "Hằng", "Quang"];
// map(): tạo ra 1 mảng mới bằng cách áp 1 hàm lên từng phần tử của mảng gốc, dùng khi bạn biến đổi từng phần tử thành giá trị mới, map sẽ duyệt qua từng phần tử.
//Hàm .map() phải nhận một giá trị trả về từ mỗi lần gọi callback, để tạo ra một phần tử tương ứng trong mảng mới, nên phải có return.
//Không có return, thì callback không trả lại giá trị nào → .map() mặc định hiểu là undefined.
//.map() dùng để tạo ra một mảng mới dựa trên mảng cũ → nên nó cần bạn return từng phần tử mới.
//Có dấu {} trong arrow function → phải có return
//Không có {} → JavaScript sẽ ngầm hiểu return, return ngầm
//vd: có return
const arr7 = [1, 2, 3];
const newArr = arr7.map(x => {
  return x * 2; // cần return ở đây, không có return giá trị trả về sẽ là undefined
});

//vd: không có return
console.log(newArr); // 👉 [2, 4, 6]
let upperName = arr.map(nameValue => nameValue.toLocaleUpperCase());
console.log(upperName);

// filter(): tạo 1 mảng mới, chỉ bao gồm phần tử thoả mãn điều kiện được chỉ định, dùng khi bạn chọn phần tử theo điều kiện đúng/sai.
// filter() chỉ giữ lại phần tử nếu giá trị trả về là true. Nếu không có return, mặc định là undefined, nên mọi phần tử sẽ bị loại bỏ.
let hue = [1,2,3,4,5,6];
let evenNumber = hue.filter(num => num%2 ===0);
console.log(evenNumber);

// find(): trả về giá trị phần tử đầu tiên mà thoả mãn điều kiện trong mảng, nếu không có phần từ thoả mãn thì trả về undefined
let thom = [8,7,6,5,4,3,2,1];
let evenNumber2= thom.find(num => num%2===0);
console.log(evenNumber2);

// reduce(): áp dụng từng phần từ trong mảng và trả về 1 kết quả duy nhất, dùng để tính toán, gom nhóm, tổng hợp dữ liệu trong mảng
// áp dụng 1 hàm lên từng phần tử (từ trái qua phải) để trả về 1 giá trị duy nhất
let sum = thom.reduce((total, num) => total + num,0);// total: biến nhận giá trị duy nhất, num: phần tử của mảng, 0 là giá trị khởi tạo cho biến totals 
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

// slice(): được dùng để trích xuất 1 phần của mảng hoặc chuỗi, mà không làm thay đổi giá trị gốc
array.slice(start, end);//start: vị trị bắt đầu , end: vị trí kết thúc(không bao gồm phần tử ở chỉ số này)-có thể bỏ qua
// nếu giá trị end bị bỏ qua sẽ cắt tới cuối mảng / chuỗi
const fruits1 = ["Táo", "Cam", "Chuối", "Xoài", "Ổi"];
const result12 = fruits.slice(1, 4); // Lấy từ vị trí 1 đến trước 4
console.log(result12);       // ["Cam", "Chuối", "Xoài"]
console.log(fruits1); // mảng gốc không đổi
// Chỉ số âm: slice(-2): chỉ số âm trong slice có nghĩa là tính từ cuối mảng hoặc chuỗi về đầu
const arr4 = [10, 20, 30, 40, 50];
const lastTwo = arr4.slice(-2); // Lấy 2 phần tử cuối
console.log(lastTwo); // [40, 50]
const middle = arr4.slice(-4, -1); // Tính từ phần tử thứ 4 từ cuối đến phần tử thứ 1 từ cuối (không bao gồm -1)
console.log(middle); // [20, 30, 40]

// match(): là hàm dùng để tìm kiếm chuỗi con phù hợp với regex(biểu thức chính quy)
//Dùng để lọc hoặc xử lý riêng các ký tự là chữ cái, bỏ qua số, khoảng trắng, ký hiệu.
console.log("A".match(/[a-zA-Z]/));  // ✅ ['A']
console.log("1".match(/[a-zA-Z]/));  // ❌ null

// split(): sử dụng để chia 1 chuỗi thành 1 mảng các chuỗi con
const str3 = "Xin chào thế giới";
const result = str3.split(" ");
console.log(result); // ["Xin", "chào", "thế", "giới"]

// reverse(): sử dụng để đảo ngược thứ tự các phần tử trong 1 mảng
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// join(): sử dụng để nối các phần tử của mảng thành 1 chuỗi string và ngăn cách nhau bởi dấu phân cách tương ứng
const fruits = ['Apple', 'Banana', 'Cherry'];
const result1 = fruits.join(' - ');
console.log(result1); // Output: "Apple - Banana - Cherry"

// indexOf: tìm vị trí xuất hiện đầu tiên của 1 giá trị trong chuỗi hoặc mảng
// Với mảng
const arr1 = [1, 2, 3, 2, 1];
console.log(arr1.indexOf(2)); // Kết quả: 1
// Với chuỗi
const str5 = "Hello, world!";
console.log(str5.indexOf("o")); // Kết quả: 4

// lastIndexOf: tìm vị trí xuất hiện cuối cùng của 1 giá trị trong chuỗi hoặc mảng
// Với mảng
const ar3 = [1, 2, 3, 2, 1];
console.log(ar3.lastIndexOf(2)); // Kết quả: 3
//Cả indexOf và lastIndexOf sẽ trả về -1 nếu không tìm thấy.

// Object.values(): lấy ra tất cả các giá trị trong object
const obj = {
  a: 10,
  b: 20,
  c: 'hello',
}; 
const obj2 = Object.values(obj);
console.log(obj2);

// Object.keys(): lấy ra tên thuộc tính keys trong object
const person = {
  name: "John",
  age: 30,
  country: "USA"
};
const keys = Object.keys(person);
console.log(keys); 

// Typeof: được dùng để kiểm tra kiểu dữ liệu (data type) của một giá trị, cú pháp: typeof(<giá_trị>)
console.log(typeof 123);           // "number"
console.log(typeof "Hello");       // "string"
console.log(typeof true);          // "boolean"

// Object.fromEntries(): chuyển đổi dữ liệu giữa array ->  object
// Object.fromEntries(): là ngược lại của Object.entries() chuyểm từ object -> array
// Dữ liệu dạng mảng các cặp key-value
const entries = [['name', 'Teo'], ['role', 'QA'], ['department', 'Testing']];
// Chuyển thành object
const userObject = Object.fromEntries(entries);
console.log(userObject); // { name: 'Teo', role: 'QA', department: 'Testing' }