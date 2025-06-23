const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//b1
const scores5= scores.some(value1=>value1>80);
console.log(scores5);

//b2
const numbers5 =numbers.some(value2=>value2<18);
console.log(numbers5);

//b3
const words5= words.some(value3=>value3.length>5);
console.log(words5);