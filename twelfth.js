// function changetext(event) {
//   console.log(event);
//   let fpara = document.getElementById("fpara");
//   fpara.textContent = "hello madhav";
// }
// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click", changetext);
// // fpara.removeEventListener('click',changetext)
// let fanchor = document.getElementById("fanchor");
// fanchor.addEventListener("click", function (event) {
//   event.preventDefault();
//   fanchor.textContent = "done bhai";
// });
// let paras=document.querySelectorAll('p')
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',function(){
//         // console.log('hello bacho');
//         // para.textContent='hello bacho'
//         alert('hello bacho')
//     });
// }
function alertpara(event) {
  alert("you have clicked on " + event.target.textContent);
}
let wrapper = document.getElementById("wrapper");
wrapper.addEventListener("click", alertpara);
