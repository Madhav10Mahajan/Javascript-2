function setusername(username){
    this.username=username;
    console.log('called');
}
function createuser(username,email,password){

    setusername.call(this,username); // passes the current execution context to another function
    this.email=email;
    this.password=password;
}

let chai=new createuser('chai','chai@gmail.com','bling');
console.log(chai);