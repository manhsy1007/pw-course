let chieucao = 176;
console.log("chiều cao của tôi là: " + chieucao + " cm");
// cân nặng lý tưởng
let cntd = chieucao.toString().slice(1);
console.log(cntd);
let cnlt = (cntd * 9) / 10;
let cntt = (cntd * 8) / 10;
console.log(cnlt);
console.log(cntt);
console.log(
  " cân nặng tối đa là:" +
    cntd +
    "kg" +
    "," +
    "cân nặng lý tưởng là:" +
    cnlt +
    "kg" +
    "," +
    "cân nặng tối thiểu là:" +
    cntt +
    "kg"
);
console.log(`cân nặng tối đa là ${cntt}`);
