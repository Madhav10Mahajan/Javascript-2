let randomcolor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomcolor());
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let changecolor;
start.addEventListener("click", function () {
  if (changecolor==null) {
    changecolor = setInterval(function () {
      document.body.style.backgroundColor = randomcolor();
    }, 100);
  }
});
stop.addEventListener("click", function () {
  clearInterval(changecolor);
  changecolor = null;
});
