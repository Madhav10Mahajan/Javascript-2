# color switcher project

## javascript scode

``` javascript
let buttons = document.querySelectorAll(".button");
console.log(buttons);
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    if(event.target.id==='grey'){
        document.body.style.backgroundColor='grey';
    }
    else if(event.target.id==='blue'){
        document.body.style.backgroundColor='blue';

    }
    else if(event.target.id==='yellow'){
        document.body.style.backgroundColor='yellow';

    }
    else if(event.target.id==='purple'){
        document.body.style.backgroundColor='purple';

    }
    else{
        document.body.style.backgroundColor='white';

    }
  });
});


```