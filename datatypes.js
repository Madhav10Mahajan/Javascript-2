"use strict" // we are using newer version of javascript
// alert(3+3) we are using nodejs not browser so the compiler shows an error instead of undefined
let name="madhav" // string
let age=22 // integer
let isloggedin="true" // boolean

// integer
// string
// char
// boolean
// undefined (you haven't assigned any value to the variable declared earlier)
// null standalone value
// symbol mostly used in react for uniqueness when using different components
// objects
console.log(typeof undefined)

// primitive and non primitive data types depending upon how the data is stored and accessed from the memory

// primitive
// 7 types-> string,number,boolean,null,undefined,symbol,Bigint

// non primitive
// arrays,objects,functions

// javascript is dynamically typed language meaning we dont need to pre define the data type of the variable it changes dynamically as and when we assign values to the variable

let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id===anotherid);

let heros=["iron man","captain america","hulk","thor","black widow"]
console.table(heros);

let myobj={

    name:"madhav",
    age:12,
}

let myfunction=function(){
    console.log("hello world");
}

console.log(typeof null);
console.log(typeof myfunction);

/* 
stack and heap
stack(primitive) , heap(non primitive)
in stack we get a copy of the variable where as we get refrence of the original variable from heap so whatever changes we make in that variable will be reflected in the original variable
*/
