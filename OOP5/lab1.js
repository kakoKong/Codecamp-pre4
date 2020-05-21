class userTemplate{

    constructor(name, password, age){
        this.name = name;
        this.password = password;
        this.age = age;
        this.connected = false;
    }

    login(){
        this.connected = true;
        console.log('your login status : ', this.connected)
    }
}

let user = new userTemplate(me, 123, 15);
console.log(user.name);