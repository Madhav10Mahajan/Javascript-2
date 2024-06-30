// let owl = document.getElementById("owl");
// owl.addEventListener("click", function (event) {
//   // console.log(event);
//   // console.log(event.target);
//   // alert('owl');
//   console.log("you have clicked on owl");
//   event.stopPropagation();
// });

// let images = document.getElementById("images");
// images.addEventListener("click", function () {
//   console.log("you have clicked on an image");
// });

let google = document.getElementById("google");
google.addEventListener("click", function (event) {
  event.preventDefault();
//   event.stopPropagation();
//   google.textContent = "mastii bhai";
});

let images=document.getElementById('images')
console.log(images);
images=document.querySelector('#images');
// console.log(images);
images.addEventListener('click',function(event){
    console.log(event.target.parentNode);
    let child=event.target.parentNode;
    console.log(child.tagName)
    if(child.tagName==='LI'){
        child.remove()
        console.log(child.id)
    }
    // console.log(child.nextSibling);
    // images.removeChild(child);
})