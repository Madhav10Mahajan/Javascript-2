// global scope
var age=10; // can be accessed anywhere within the file irrespective of var,let const keyword
console.log(age);
for(let i=0;i<10;i++){
    console.log(age);
}
function print(){
    console.log(age);
}
print();
// function scope

console.log(marks);
console.log("hello") // temoparal dead zone you cant access the variable marks before line no 16 because hoisting 
// doesnt work in case of let and const  
console.log("madhav")
let marks=100;