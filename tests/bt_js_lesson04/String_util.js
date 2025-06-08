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

// replace(): thay thế 1 chuỗi con bằng 1 chuỗi khác trong chuõi ban đầu
str = str.replace("K14", "K15");
console.log(str);

// split(): chia chuỗi ban đầu thành các chuỗi con (1 mảng), dựa theo ký tự phân chia (delimiter)
let sy ="hello K14 class";
let words = sy.split(" ");
console.log(words);

// substring(): trả về 1 phần của chuỗi, bắt đầu từ số index được chỉ định đến số index kết thúc (không lấy số index kết thúc)
 console.log(sy.substring(0,11));
//nếu chi có 1 số index thì sẽ hiểu là số index bắt đầu và lấy chuỗi bắt đầu từ index đó đến hết
 console.log(sy.substring(6));

// indexOf(): trả về vị trí đầu tiên của chuỗi con trong chuỗi ban đầu, nếu không tìm thấy vị trí của chuỗi thì trả về giá trị -1
console.log(sy.indexOf("K14"));
console.log(sy.indexOf("K15"));