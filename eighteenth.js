function multiplyby5(num){
    return num*5;
}

multiplyby5.power=2;
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createuser(username,price){
    this.username=username;
    this.price=price;
}

createuser.prototype.increment=function(){
    this.price++;
}
createuser.prototype.printme=function(){
    console.log(`price of ${this.username} is ${this.price}`)
}
let chai=new createuser('chai',10);
let coffee=new createuser('coffee',100);

chai.increment();
coffee.increment();
chai.printme();
coffee.printme();