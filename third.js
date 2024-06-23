// loops
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log();
for (let i = 10; i >= 1; i--) {
  if (i == 9) {
    continue;
  }
  if (i == 5) {
    break;
  }
  console.log(i);
}
// while loop
console.log()
let i=0;
while(i<10){
    console.log(i);
    i++;
}
// do while
console.log()
i=0;
do{
    console.log(i);
    i++;
}while(i>1);

// strings
let name="madhav mahajan";
console.log(name);
let s=`madhav 
mahajan`;
console.log(s);
let s1="hello"
let s2=" world"
console.log(s1+s2);
// console.log(`${s1}${s2}`)
console.log(s1.length);
console.log(s1.toUpperCase( ))
console.log(s1.substring(1));
console.log(s1.substring(1,4));
let sentecne="hello \\ji \\kaise \\ho \\saare"
let words=sentecne.split('\\');
console.log(words);
console.log(words.join('\\'))