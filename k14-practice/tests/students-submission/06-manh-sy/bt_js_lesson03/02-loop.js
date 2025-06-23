//B1
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  console.log(sum, i);
}
console.log("Tổng từ 1 đến 100 là:", sum);

//B2
for (let a = 2; a <= 9; a++) {
  console.log("bảng cửu chương:" + a);
  for (let b = 1; b <= 10; b++) {
    console.log(`${a}*${b} = ${a * b}`);
  }
  console.log("\n");
}

//B3
let arr = [];
for (let c = 1; c <= 99; c += 2) {
  arr.push(c);
}
console.log(arr);

//B4
for (let d = 1; d <= 10; d++) {
  console.log(`user${d}@example.com`);
}

//B5
const mangdt = [
  { month: 1, total: 120 },
  { month: 2, total: 120 },
  { month: 3, total: 120 },
];
let tongdt = 0;
for (let e = 0; e < mangdt.length; e++) {
  tongdt += mangdt[e].total;
}
console.log(`tổng doanh thu của năm ${tongdt}`);
