// code 1
let time1=performance.now();

for(let i=0;i<100;i++){
    let child=document.createElement('p');
    child.textContent='this is para '+(i+1);
    document.body.append(child);
}
let time2=performance.now();
console.log('time taken by code1 is '+ Math.abs(time2-time1))

// code 2
time1=performance.now();
let mydiv=document.createElement('div');
for(let i=0;i<100;i++){
    let child=document.createElement('p');
    child.textContent='this is para '+(i+1);
    mydiv.appendChild(child);
}
document.body.appendChild(mydiv);
time2=performance.now();
console.log('time taken by code2 is '+ Math.abs(time1-time2));

// best code
time1=performance.now();
let fragment=document.createDocumentFragment();
for(let i=0;i<100;i++){
    let para=document.createElement('p');
    para.textContent='this is para '+(i+1);
    fragment.appendChild(para);
}
document.body.append(fragment);
time2=performance.now();
console.log('time taken by best code is '+ Math.abs(time1-time2));