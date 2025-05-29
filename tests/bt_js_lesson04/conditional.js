/*
if..else
if (condition){

}else {
}*/
// vd: in ra màn hình 1 số là chẵn hay lẻ
let a = 7;
if (a % 2 === 0) {
  console.log("a là số chẵn");
} else {
  console.log("a là số lẻ");
}

//vd: nếu điểm<5: hs yếu, 5<=điểm<8: hs khá, điểm>=8: hs giỏi
let diem = 7;
if (diem < 5 && diem >= 0) {
  console.log("học sinh yếu");
} else if (diem >= 5 && diem < 8) {
  console.log("học sinh khá");
} else if (diem >= 8) {
  console.log("học sinh giỏi");
} else {
  console.log("điểm không hợp lệ");
}

/*vd: nhập vào 1 số, ỉn ra số đấy là tháng mấy trong năm
- switch case:
switch (tham số){
case condl://codel;
break;
case condl2//code2;
break;
...
default:
    //code default;
    break;
}*/
let month = 12;
switch (month) {
  case 1:
    console.log("tháng 1");
    break;
  case 2:
    console.log("tháng 2");
    break;
  default:
    console.log("tháng không hợp lệ");
}
