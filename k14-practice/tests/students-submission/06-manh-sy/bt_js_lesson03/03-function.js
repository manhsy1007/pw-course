//B1
function multiply (a,b){
    return a*b;
}
console.log(multiply(10,10));
console.log(multiply(7,8));

//B2
function findmin(a,b,c){
    let min=a;
    if (b<min){
        min=b;
    }
    if (c<min){
        min=c;
    }
    return min;
}
console.log(findmin(5,10,15));
console.log(findmin(25,30,35));

//B3
function getTopStudents(students, threshold){
    let mangmoi = [];
    for (let i=0; i<students.length;i++){
        if(students[i].score>=threshold){
        mangmoi.push(students[i].name)}
    }
    return mangmoi
}
let studentlist = [
    {name: "sỹ", score:17},
    {name: "huệ", score:18},
    {name: "thơm", score:19},
];
let result = getTopStudents(studentlist, 16);
console.log(result);

//B4
function calculateInterest(principal, rate, years){
    const total = principal+principal*rate*years/100;
    return total;

}
console.log(calculateInterest(100000,2,2));