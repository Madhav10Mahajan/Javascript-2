class user {
  constructor(email, password) {
    this.password = password;
    this.email = email;
  }

  get email() {
    return `mahdhhwbs@gmail.comvbdbb2n3@hotmail.combvb78@yahoo.com${this._email}`;
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `madhavabc627t2${this._password}bfvbswb1244mahajan`;
  }

  set password(value) {
    this._password = value;
  }
}

let user1 = new user("madhav.mhjn01@gmail.com", "abc123");
console.log(user1.password);
console.log(user1.email);

let human = {
  name: "madhav",
  aga: 21,
  _emailid: "madhav.mhjn01@gmail.com",
  get emailid() {
    return this._emailid.toUpperCase();
  },
  set emailid(value) {
    this._emailid = value;
  },
};
let human1=Object.create(human)
console.log(human1.emailid);
console.log(human1.name);
// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

// Math.PI=4;
// console.log(Math.PI);

// let user={
//     name:'madhav',email:'madhav.nhjn01@gmail.com', passwrod: 'abc123',
// }
// console.log(Object.getOwnPropertyDescriptor(user,'name'));
// Object.defineProperty(user,'name',{
//     writable: false,configurable: false, enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(user,'name'));

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }
