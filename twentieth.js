// class user{

//     constructor(username,email,password){
//         this.email=email;
//         this.password=password;
//         this.username=username;
//     }
      
//     encryptpassword(){
//         return this.password+'abc';

//     }

//     display(){
//         console.log(this);
//     }

//     changeusername(){
//         return `${username.toUpperCase()}`
//     }
// }

// let chai=new user('chai','chai@gmail.com','123');
// // console.log(chai.unsername);
// chai.display();
// console.log(chai.encryptpassword());

class user{

    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(this.username)
    }
}

class teacher extends user{

    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
        // user.call(this,username);
    }

    addcourse(){
        console.log('this is course is added by user', this.username);
    }
}

let chai=new user('chai');
let masalachai=new teacher('masalachai','masalachai@gmail.com','123');
chai.logme();
masalachai.addcourse();
console.log(chai===masalachai);
console.log(masalachai instanceof teacher);
console.log(chai instanceof user);
console.log(masalachai instanceof user);

