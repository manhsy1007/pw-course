//bt1
const departurePlane = "Trái Đất";
const mission = "Khám phá Vũ trụ K14";
const crew = ["Sỹ", "Huế", "Huệ", "Thơm", "Linh"];
function launchShip(crew12345) {
  const crewlist = crew12345.join(",");
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewlist} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}`;
}
console.log(launchShip(crew));

//bt2
function calculateDistance(speed, time) {
  const quangduong = speed * time;
  console.log(quangduong);
}
calculateDistance(1000, 24);

//bt3
function convertTimeToHex(time3) {
  const time_moi = time3.toString(16);
  return time_moi;
}
console.log(convertTimeToHex(120));

//bt4
function decryptCode(code) {
  let code_moi = "";
  for (let code2 of code) {
    if (code2 === code2.toUpperCase() && code2.match(/[a-zA-Z]/)) {
      //đảm bảo chỉ đổi chữ cái, không đổi số hoặc ký tự đặc biệt.
      code_moi += code2.toLowerCase();
    } else {
      code_moi += code2.toUpperCase();
    }
  }
  return code_moi;
}
console.log(decryptCode("K14 Challenge")); // ➜ "k14 cHALLENGE"

//bt5
function returnToEarth() {
  console.log("Chuẩn bị trở về trái đất!");
}
returnToEarth();
