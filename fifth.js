let obj={

    name: "madhav",
    age: "22",
    height: "5 feet 11 inches",
    weight: "91",
    greet: function(){
        console.log("hello ji kaise ho saare");
    }
}
console.log(obj);
obj.greet();
console.log(typeof(obj))

// creating an array
let arr=[1,2,3,4,5];
function printarr(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
console.log(typeof(arr));
arr.push("madhav");
// printarr(arr);
// arr.pop();
// printarr(arr);
// arr.shift();
// printarr(arr);
// arr.unshift(1);
// console.log();
// printarr(arr);
// console.log(arr.slice(2,4));
// printarr(arr);
// arr.splice(1,2,'kunal');
// printarr(arr);
console.log();
printarr(arr);
arr.pop();
function squarearray(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]**2;
    }
}
// squarearray(arr);
// let finalarr=arr.map((number)=>{
//     return number**2;
// })
// printarr(finalarr);
// arr.sort();
// printarr(arr);
// arr.reverse();
// printarr(arr);
// console.log(arr.indexOf(5));
function getsum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(getsum(arr)); 