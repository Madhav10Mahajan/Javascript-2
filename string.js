let string1="madhav"
let string2=" mahajan"
// console.log(string1+string2);
console.log(`hello my name is ${string1} and my surname is${string2}`); // tring interpolation this is a better
// to concatenate strings rather than using the + symbol

const gamename=new String("yvbnmwdfggfds")
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.__proto__); 
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt('3'));
console.log(gamename.indexOf('z'));
console.log(gamename.indexOf('r'));
console.log(gamename.indexOf('t'));
console.log(gamename.indexOf('g'));
console.log(gamename.substring(1,4));
const anotherstring=gamename.slice(-4,4)
// console.log(anotherstring);
const str = "Hello, world!";
const last5Chars = str.slice(-5);
console.log(last5Chars)
// console.log(anothergamename.slice(-2,3));
// negative parameter denotes an offset from the end for eg id start index=-1 start from the last char and if 
// it is -2 start from the second last character in the string
const string="madhav"
const s=string.slice(-1,3)
console.log(s);
// basic difference between substring ans slice if the option of negative indices present in slice function where as no this type of option is there in subtring function
let t="    madhav  "
console.log(t.trim());
let url="https://youtube.com"
console.log(url.replace("youtube","google"));
console.log(url.includes("madhav"));
let temp="madhav"
console.log(temp.split('')); // converts string into array