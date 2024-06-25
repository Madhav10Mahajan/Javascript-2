// let user = {
//   username: "madhav",
//   age: 22,
//   email: "madhav.mhjn01@gmail.com",
//   getdetails: function(){
//     // console.log('username: ',username)
//     console.log('username:',this.username)
//     console.log(this);
//   }
// };

// user.getdetails();
// // console.log(user.username);
// console.log(this);
// let user2={...user}
// let user3=Object.assign({},user)
// console.log(user2);
// console.log(user3);

function user(username, age, email) {
  this.username = username;
  this.age = age;
  this.email = email;
  return this;
}
let user1 = new user("madhav", 22, "madhav.mhjn01@gmail.com");
let user2 = new user("kashan", 21, "kashan123akram456@gmail.com");
console.log(user1);
// console.log(user2);
