// trim(): loại bỏ space ở đầu và cuối của string
let str ="   hello K14 class";
console.log(str.trim());
// xoá khoảng trắng ở đầu sử dụng trimStart()
// xoá khoảng trắng ở cuối sử dụng trimEnd()

// toLowerCase(): chuyển tất cả các ký tự sang ký tự thường
console.log(str.toLowerCase());

// toUpperCase(): chuyển tất cả các ký tự sang ký tự in hoa
console.log(str.toUpperCase());

// include(): check xem chuỗi có chứa 1 chuỗi con bên trong hay không. Return True - False
console.log(str.includes("glass"));

// replace(): thay thế 1 chuỗi con bằng 1 chuỗi khác trong chuỗi ban đầu
//có thể thay thế các string hoặc substring bằng cách sử dụng regex
// / /g: thay tất cả ký tự " " trong chuỗi.
// \s: là khoảng trắng (space, tab, xuống dòng...). 
// g: là global flag – áp dụng cho toàn chuỗi, không chỉ lần đầu.
str = str.replace("K14", "K15");
console.log(str);

// split(): chia chuỗi ban đầu thành các chuỗi con (1 mảng), dựa theo ký tự phân chia (delimiter)
let sy ="hello K14 class";
let words = sy.split(" ");// tách chuỗi theo dấu cách, còn không có dấu cách giữa"" thì tách thành mảng các chữ cái
console.log(words);

// string(): dùng để chuyển bất cứ giá trị nào (kể cả null, undefined) thành chuỗi, là hàm toàn cục
String([1, 2, 3]);      // 👉 "1,2,3"

// tostring(): phương thức của đối tượng, Chỉ dùng được với object, số, mảng để chuyển chúng thành chuỗi
// có thể sử dụng phương thức toString() để chuyển đổi 1 số thập phân sang hệ thập lục phân
const numbers = [1, 2, 3, 4, 5];
// Dùng String()
const strings = numbers.map(num => String(num));
// hoặc dùng toString()
const strings2 = numbers.map(num => num.toString());
console.log(strings);  // 👉 ["1", "2", "3", "4", "5"]
console.log(strings2); // 👉 ["1", "2", "3", "4", "5"]

// substring(): trả về 1 phần của chuỗi, bắt đầu từ số index được chỉ định đến số index kết thúc (không lấy số index kết thúc)
 console.log(sy.substring(0,11));
//nếu chi có 1 số index thì sẽ hiểu là số index bắt đầu và lấy chuỗi bắt đầu từ index đó đến hết
 console.log(sy.substring(6));

// indexOf(): trả về vị trí đầu tiên của chuỗi con trong chuỗi ban đầu, nếu không tìm thấy vị trí của chuỗi thì trả về giá trị -1
console.log(sy.indexOf("K14"));
console.log(sy.indexOf("K15"));
// Với chuỗi
const str2 = "Hello, world!";
console.log(str2.indexOf("o")); // Kết quả: 4

// lastIndexOf: tìm vị trí xuất hiện cuối cùng của 1 giá trị trong chuỗi hoặc mảng
// Với chuỗi
const str4 = "Hello, world!";
console.log(str4.lastIndexOf("o")); // Kết quả: 8
//Cả indexOf và lastIndexOf sẽ trả về -1 nếu không tìm thấy.

// Object.values(): lấy ra tất cả các giá trị trong object
const obj = {
  a: 10,
  b: 20,
  c: 'hello',
}; 
const obj2 = Object.values(obj);
console.log(obj2);

// Object.fromEntries(): chuyển đổi dữ liệu giữa array ->  object
// Object.fromEntries(): là ngược lại của Object.entries() chuyểm từ object -> array
// Dữ liệu dạng mảng các cặp key-value
const entries = [['name', 'Teo'], ['role', 'QA'], ['department', 'Testing']];
// Chuyển thành object
const userObject = Object.fromEntries(entries);
console.log(userObject); // { name: 'Teo', role: 'QA', department: 'Testing' }