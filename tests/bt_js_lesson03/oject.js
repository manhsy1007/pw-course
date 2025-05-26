const student = {
    "name": "Sỹ",
    "age": 24,
    "address": "Hà Nội",
    "job":{
        "job_title": "QE",
        "companyAddress": "Cầu Giấy"
    }
}
console.log("name:" + student.name);
console.log("job:"+ student.job.job_title);
console.log("job:", student["job"]["companyAddress"]);
console.log("job:", student["job"].companyAddress);
console.log(`job: ${student.job.job_title}`)
console.log(`job: ${student["job"]["job_title"]}`)
// gán lại
student.age = 25;
student["name"] = "Mạnh Sỹ";
const hue = student["job"].companyAddress;
console.log(student)
console.log(hue)

/* dấu [] được sử dụng khi tên biến trong oject được đặt có dấu cách, vd: nam student
lúc đó thì mình không thể dùng dấu . để trỏ đến biến được vì có dấu cách ở giữ tên biến, nên TH đấy sẽ phải dùng []*/

/* đối với oject có kiểu dl là const thì có thể gán lại giá trị trong oject được
Nhưng không được thêm thuộc tính trong oject có kiểu dl là const
Thay object bằng một object mới, bạn cũng sẽ gặp lỗi.
const student = {“name”: “alex”, “age”: 20}
student = {“name”: “Nagi”, “age”: 18} // lỗi
Tuy nhiên, nếu bạn chỉ thay đổi các thuộc tính của object thì hoàn toàn hợp lệ. Ví dụ mình sẽ
chỉ thay giá trị của name trong object student:
const student = {“name”: “alex”, “age”: 20}
student.name = “Nagi”; // Hợp lệ */

/* Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng dấu . hoặc ngoặc vuông [] để định
nghĩa thuộc tính mới. Ví dụ:
let bike = {
make: 'Yamaha',
model: 'YZF-R3'
};
bike.color = “Blue”;
bike[“price new”] = 100;
console.log(bike);
{make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}*/

/*Để xóa thuộc tính của object, chúng ta dùng hàm delete:
let employee = {
name: 'Le Van C',
age: 30,
department: 'HR'
};
delete employee.age;
console.log(employee);
Kết quả:
{name: 'Le Van C', department: 'HR'}*/