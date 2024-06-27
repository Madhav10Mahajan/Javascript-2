let sample=Object.getOwnPropertyDescriptor(Math,'PI');
console.log(sample);

console.log(Math.PI);
Math.Pi=4;
console.log(Math.PI)

let chai={
    name: 'masalachai',
    price: 250,
    isavaiable: true,
    display: function(){
        console.log(`name is ${name} and price is ${price}`);
    }
}
console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// Object.defineProperty(chai,'name',{
//     enumerable: false,
//     writable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai,'name'))

for (const key in chai) {
    let property=key;
    console.log(property);
    let value=chai[key];
    console.log(value);
}