let string = "https://api.github.com/users/hiteshchoudhary";
let xhr = new XMLHttpRequest();
xhr.open("GET", string);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  //   console.log(performance.now());
  if (xhr.readyState === 4) {
    let data = JSON.parse(this.responseText);
    console.log(typeof(data));
    console.log(data.followers);
  }
};
xhr.send();
