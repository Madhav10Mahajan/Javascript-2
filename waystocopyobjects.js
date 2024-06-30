let obj = {
  age: 100,
  height: 90,
  weight: 100,
};
let obj2 = { ...obj }; // deep copy
obj.age=18;
// obj2=obj; // shallow copy
let obj3=Object.assign({},obj);
console.log("obj :", obj);
console.log("obj2 :", obj2);
console.log("obj3 :",obj3);
let dest={};
for(let key in obj){
    // console.log(key);
    let newkey=key;
    let newvalue=obj[key];
    dest[newkey]=newvalue;
}
console.log("dest :", dest);