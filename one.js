// console.log("hello madhav")

// 3 ways to declare varibale si njs let,const,var
/* var is functiopn and global scoped only and not blocked scoped because of
which it leasde to unexpected results sometimes */

// var age=25; // global scoped
// if(true){
//     console.log(age);
// }
// function solve(){  // function scoped
//     var age=25;
//     console.log(age);
// }
// console.log(age);
// solve();

// redeclaration is possible 
// var x=10;
// var x=29;

// {  // block scoped
//     let a=10;
//     console.log(a)
// }

// no redeclaration
// let x=10;
// let x=20;

let a=10;
a="madhav" // dynamically typed language the data type of the variable is define dat the run time

const x=10;
// const x="madhav"

// 2 types of data 
// primitive and non primitive 
/*
number
string 
character
boolean
symbol 
*/
let age=10;
age="madhav"
console.log(age)

let value=null
console.log(value);
