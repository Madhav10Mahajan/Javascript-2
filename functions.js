function hello(){ // function defination 
    console.log("hello world");
}
hello(); // function call 
function counting(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
counting();
function addition(a,b){
    console.log(a+b);
}
addition(2,3);
function getavg(a,b){
    console.log((a+b)/2);
}
getavg(3,7);

// return function : returns something not void
function getsum(a,b){
    let sum=(a+b)/2;
    return sum;
}
console.log(getsum(2,3));

function getfullname(s,t){
    return s+" "+t;
    let a=10;
    let b=90;
    return a+b;
}
let fullname=getfullname("madhav","mahajan")
console.log(fullname);

let squarenumber=function(num){
    return num**2;
}
console.log(squarenumber(4));

let getexponent=(x,y)=>{
    return x**y;
}
let ans=getexponent(2,3);
console.log(ans);