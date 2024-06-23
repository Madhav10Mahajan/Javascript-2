class human {
  age = 20; // public
  weight = 100;
  #height = 10; // private
  constructor(newage,newweight){
    this.age=newage;
    this.weight=newweight;
  }
  running() {
    console.log("I am running", this.#height);
  }
  walking() {
    console.log("I am walking");
  }
  set setheight(num) {
    this.#height = num;
  }
  get fecthheight() {
    console.log(this.#height);
  }
  
}
let obj = new human(78,90);
// console.log(obj.fecthheight);
console.log(obj.weight);
console.log(obj.age);
// obj.running();
// obj.walking();
// console.log(obj.age);
// // console.log(obj.#height)
// console.log(obj.weight);
function printname(name="default"){
    console.log("my name is :", name);
}
printname();