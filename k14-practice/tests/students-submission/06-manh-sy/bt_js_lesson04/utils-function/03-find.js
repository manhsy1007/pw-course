const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//b1
const scores3 = scores.find(value1 =>value1>80);
console.log(scores3);

//b2
const ages3 = ages.find(value2 =>value2>20);
console.log(ages3);

//b3
const words3 = words.find(value3 => value3.length>5);
console.log(words3);