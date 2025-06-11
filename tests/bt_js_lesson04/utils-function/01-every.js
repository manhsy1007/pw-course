const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//b1
const scores1 = scores.every(value1 => value1>70);
console.log(scores1);
// lấy giá trị thoả mãn đk dung filter


//b2
const ages1 = ages.every(value2 => value2>15);
console.log(ages1);

//b3
const words1 = words.map(value3=> value3.length).every(length1=>length1>5);
console.log(words1);
