// console.log("madhav");
//  operators
// artimatic operators
console.log(2 + 3);
console.log(2 * 3);
console.log(2 - 3);
console.log(2 / 3);
console.log(2 % 3);
console.log(2 ** 3);
let a = 5; // assignment operator
console.log(++a); // pre increment
console.log(a++); // post increment
console.log(a);
let b = 7; // assignment operator
console.log(--b); // pre decrement
console.log(b--); // post decrement
console.log(b);
console.log(a == b); // equality operator
// comparitor operator
console.log(4 >= 5);
console.log(3 <= 5);
console.log(4 > 5);
console.log(4 < 5);
console.log(3 >= 3);
console.log(2 != 3);
// == loose equality only checks the value of the variables
// === strict equality checks the value as well as the data type of the variables
a = 3;
b = "3";
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(3 !== "3");
console.log(3 >= 5 ? "yes" : "no");
// logical operators
// and or xor neagtion/not
console.log(false || "madhav");
console.log(false && true);
console.log(true && "3");
// bitwise operators
console.log(2 & 5);
console.log(2 | 5);
console.log(2 ^ 2);
console.log(0 ^ 2);

// conditionals
// if else and switch statements
let age = 15;
if (age >= 18) {
  console.log("you can vote");
} else if ((age >= 15) & (age <= 18)) {
  console.log("yes mastii");
} else {
  console.log("you can't vote");
}
switch (age) {
  case 19:
    console.log("you can vote");
    break;
  case 17:
    console.log("you can vote");
    break;
  case 12:
    console.log("you cant't vote");
    break;
  case 15:
    console.log("you can't vote");
    break;
  default:
    if (age > 18) {
      console.log("you can vote");
    } else {
      console.log("you cant't vote");
    }
}
