{
  // function shifts automatically to the top of the scope at compile time both defination and declaration
  saymyname("madhav");
  function saymyname(a) {
    console.log(a);
  }
}

console.log(age);
var age = 25; // gives undefined scope shifts to tope only redeclaration not defination in case of variables

// console.log(a) doesnt  work for let and const only applicabel for var keyword
// let a=10;

// console.log(B); doesnt wirk for const keyword
// const B=10;

// sayhello(); // doesnt work for function expression and arrow functions
// let sayhello=()=>{
//     console.log("Hello");
// }
// let obj = new human(); // not possible
// class human {

// }
// let fullname ="madhav"
// function greetme(greet,fullname){
//     console.log("hello",fullname,greet());
//     // greet();
// }
// greetme(greet,fullname);
// function greet(){
//     console.log("greetings of the day");
// }
// // greet();
function factorial(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return factorial(num - 1) * num;
}
console.log(factorial(5));
const arr = [
  function(a, b) {
    return a + b;
  },
  function(a, b) {
    return a - b;
  },
  function(a, b) {
    return a * b;
  },
];

let first = arr[0];
let ans = first(2, 34);
console.log(ans);
let second = arr[1];
ans = second(2, 34);
console.log(ans);
let third = arr[2];
ans = third(2, 34);
console.log(ans);
