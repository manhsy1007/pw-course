class team {
    name; 
    players;
    constructor (name){
        this.name = name;
        this.players = [];
    }
    addPlayer(ten, tuoi, vitri, quequan){
        const cauthu = {
            ten,
            tuoi,
            vitri,
            quequan
        }
        this.players.push(cauthu);
        }
        listPlayer(){  
console.log(`Đội bóng ${this.name} gồm các thành viên:`); 
            this.players.forEach((cauthu1, index)=>{
 console.log(`${index+1}. ${cauthu1.ten}  ${cauthu1.tuoi}  ${cauthu1.vitri}  ${cauthu1.quequan}`)
            })
            console.log(this.players)
        }
}
const cauthu ={ten:"huệ", tuoi: 25, vitri: "tiền vệ", quequan: "hà nội"}
const cauthu2 = new team("Đội bóng thiếu lâm");
cauthu2.addPlayer("Mạnh sỹ", "24", "tiền đạo", "hà nội");
cauthu2.addPlayer("Phương hiệp", "22", "tiền vệ", "hà nội");
cauthu2.addPlayer(cauthu.ten, cauthu.tuoi, cauthu.vitri, cauthu.quequan);
cauthu2.listPlayer();