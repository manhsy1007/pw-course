const sy ={
    name: "nhung",
    age: 20,
    job_title: "tester"
}
const hue ={
    name: "hue",
    age: 20,
    job_title: "QC"
}
const thom ={
    name: "thom",
    age: 20,
    job_title: "leder"
}

class K14StudentPlaywright {
    // thuộc tính: có những thuộc tính không cần cho ngay vào hàm khởi tạo, có thể  gán giá trị sau bằng cách không dùng hàm khởi tạo
    name;
    age;
    job_title;

// hàm khởi tạo
constructor( name, age, job_title){
    this.name = name;
    this.age = age;
    this.job_title = job_title;
}
// phương thức = Method của class, các hành động trong class
doExercise(){
    console.log("Do exercise")
}
sum(a,b){
    return a+b;
}
}
const TrucMai = new K14StudentPlaywright("trúc mai", 23, "BA");// giá trị truyền vào this.name
// không dùng hàm khởi tạo
//TrucMai.name = "trúc mai";
//TrucMai.age = 23;
//TrucMai.job_title = "BA";
console.log(TrucMai);
TrucMai.doExercise();
const sy1 = TrucMai.sum(6,8);
console.log(sy1);