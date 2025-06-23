for (let i=0; i<=10; i++){
if (i%2 ===0){
    console.log(`${i} là số chẵn`);
    continue;// bỏ qua số chẵn
    //Dùng để bỏ qua phần còn lại của lần lặp hiện tại và tiếp tục với lần lặp kế tiếp
}
console.log(`${i} là số lẻ`);
}

for (let i = 0; i < 5; i++) { 
  if (i === 2) { 
       continue; 
   } 
  console.log(i); //0,1,3,4
}

for (let j=1; j<=10; j++){
if (j%2 ===0){
    console.log(`${j} là số chẵn`);
    break; // khi j chia hết cho 2 là số chẵn thì dừng vòng lặp
    //Dùng để thoát khỏi vòng lặp ngay lập tức, không chạy các bước còn lại trong vòng lặp nữa.
}
console.log(`${j} là số lẻ`);
}

for (let i = 0; i < 5; i++) { 
  if (i === 3) { 
       break; 
 } 
  console.log(i); // 0, 1, 2
}