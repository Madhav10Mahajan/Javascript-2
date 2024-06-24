# digital Clock

## soltuion code

``` javascript
let clock = document.querySelector("#clock");
let date = new Date();
setInterval(function () {
  console.log(date.toLocaleTimeString());
  clock.textContent=date.toLocaleTimeString();
}, 100);
```