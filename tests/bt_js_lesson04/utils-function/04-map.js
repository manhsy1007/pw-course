const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//b1
let mangmoi=[];
mangmoi = scores.map(value1 =>{
    if(value1<90){
        return value1*1.10;
    } else{
        return value1*0.95;
    }
});
console.log(mangmoi);

//b2
const numbers4 =numbers.map(value2=>String(value2));
console.log(numbers4);

//b3
const numbers5 = numbers.map(value3 => value3*2);
console.log(numbers5);