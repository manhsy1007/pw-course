class Customer {
    id;
    name;
    email;
    phone;
    constructor(id, name, email, phone){
        this.id = id;
        this.name =name;
        this.email = email;
        this.phone = phone;
    }
    disolayInfo(){
        console.log(`Thông tin khách hàng: ${this.id}, ${this.name}, ${this.email}, ${this.phone}`);
    }
    updateEmail(newEmail){
this.email = newEmail;
        
    }
}
const khachhang = new Customer(1, "sỹ", "sy@gmail.com",112 );
khachhang.disolayInfo();
khachhang.updateEmail("sy123@getMaxListeners.com");
khachhang.disolayInfo();