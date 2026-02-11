// let p = new Promise((resolve) => {
//   resolve("Hello Promise");
// });

// p.then((res) => {
//   console.log(res);
// });





// let p = new Promise((resolve, reject) => {
//   reject("wrong code ");
// });

// p.catch((err) => {
//   console.log(err);
// });






// let a = Promise.resolve("A");
// let b = Promise.resolve("B");
// let c = Promise.resolve("C");

// Promise.all([a, b, c])
//   .then(console.log);



// function check(num) {

//   return new Promise((resolve, reject) => {

//     if (num % 2 === 0) {
//       resolve("Even Number");
//     } else {
//       reject("Odd Number");
//     }

//   });

// }

// check(0)
//   .then(console.log)
//   .catch(console.log);






// function checkMarks(marks) {

//   return new Promise((resolve, reject) => {

//     if (marks >= 40) {
//       resolve("Pass");
//     } else {
//       reject("Fail");
//     }

//   });

// }

// checkMarks(55)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));








// function Msg() {

//   return new Promise((resolve) => {
//     resolve("welcome to anchal`s world");
//   });

// }

// async function show() {

//   let data = await Msg();
//   console.log(data);

// }

// show();





// function add() {

//   return new Promise((resolve) => {

//     setTimeout(() => {
//       resolve("time over");
//     }, 3000);

//   });

// }

// add().then(console.log);





let p7 = new Promise((resolve) => {
  resolve(5);
});

p7
  .then((num) => num * 2)
  .then((res) => console.log(res));