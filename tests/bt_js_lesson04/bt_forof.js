const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//b1
for( let string of str){
    console.log(string);
}

//b2
const str2 =str.split("").reverse();
console.log(str2);

//b3
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));

//b4
const arr1 = dupArr.filter((value)=>{
    return dupArr.indexOf(value)===dupArr.lastIndexOf(value)
})
console.log(arr1);
