const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];


//b1
const scores6 = scores.reduce((tong,num1)=>tong+num1,0);
console.log(scores6);

//b2
const numbers6 = numbers.reduce((tich, num2)=>tich*num2);
console.log(numbers6);

//b3
const expenses6  = expenses.reduce((tong,num3)=>tong+num3,0);
console.log(expenses6);