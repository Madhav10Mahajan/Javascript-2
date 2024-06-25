// const promiseone = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task 1 is completed");
//     resolve();
//   }, 1000);
// });

// promiseone.then(function () {
//   console.log("promise one has been completed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async2 task 2 is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise two has been completed");
// });

// let promisethree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "madhav", emailid: "madhav.mhj01@gmail.com" });
//   }, 1000);
// });
// promisethree.then(function (object) {
//   console.log(object);
// });

let promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (error == false) {
      resolve({ username: "madhav", password: "hello123" });
    } else {
      reject("ERROR something went wrong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("the program has been executed"); // runs irrespective of error or not
  });

let promisefive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (error == false) {
      resolve({ username: "madhavmahajan", password: "particle" });
    } else {
      reject("an error has occured");
    }
  }, 1000);
});

async function promisefive() {
  try {
    let response = await promisefive;
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}
