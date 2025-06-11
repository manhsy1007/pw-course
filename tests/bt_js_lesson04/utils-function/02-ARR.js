const number = [1,2,3];
const names = ["Alice", "Bob", "Charlie"];

//b1 
number.push(4);
console.log(number);
names.push("David");
console.log(names);

//b2
let numbers = number.pop();
console.log(number)
console.log(numbers);

//b3
number.unshift(0);
console.log(number);
names.unshift("David");
console.log(names);

//b4
console.log(number.shift());
console.log(number);