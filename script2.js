// let a = 2,
//   b = 3,
//   c = 7;

// console.log(a);
// var a = 20;
// // Async
// setTimeout(() => {
//   console.log("setTimout");
// }, 1000);
// setTimeout(() => {
//   console.log("setTimout2");
// }, 1000);
// // setInterval(() => {});

// console.log(b);
// console.log(c);

// function add() {
//   console.log(a);
// }

// var a = "yash";
// // global scope

// let b = null;
// console.log(b);

// const PI = 3.14;
// block scope

// if (data === undefined) {
//   console.log("error in db");
// }

// Data types

// Primite
// String
// Number
// Boolean
// BigInt
// Symbol
// undefined
// null

// Non primitive
// Array, Objects

// let arr = [];
// let std1 = {};

//normal func
// function add(f, s) {
//   return f + s;
// }
// // Arrow func
// const add2 = (f, s) => f + s;

// IIF
// (function () {
//   console.log("IIFE");
// })();

// // Callback
// const add3 = () => {};

// console.log(add(3, 5));
// console.log(add2(6, 8));

// for

// let arr = [1];
// for (i = 0; i <= 5; i++) {
//   console.log(arr[i]);
//   // 0,
// }

// let sum = 0;
// for (i = 0; i > 5; i--) {
//   sum = sum + i;
//   console.log(sum);
//   // sum=0+0 = 0
//   // sum=0+1 = 1
//   // sum=1+2 = 3
//   // sum=3+3 = 6
//   // sum=5+4 = 10
//   // sum=9+5 = 15
// }

// while

// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
//   // 1,2,3,4,5,6
// }

// do while

// let k = 0;
// do {
//   // 0,1,2,3,4,5
//   k++;
//   console.log(k);
//   // 1,2,3,4,5,6
// } while (k <= 5);

// let day = 6;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("another day");
// }

// // Function scope(local)
// function myfun() {
//   var first="umesh"
// }

// myfun()
// console.log(first);

// // Block scope {}

// // var is function scope, not block scoped
// for(let i=0;i<5;i++){
//   var firstN="umesh"
// }
// console.log(firstN);

// Hoisting

// console.log(a);

// var a = 30;

// function add() {
//   console.log("add");
//   console.log("add");
//   console.log("add");
//   console.log("add");
//   console.log("add");
//   console.log("add");
//   let a = 3;
//   let b = 3;
//   return a + b;
// }
// function add2() {}

// if (true) {
//   console.log(a + b);
//   console.log("add");
//   console.log("add");
//   console.log("add");
//   var a = 3;
//   var b = 3;
//   // return a + b;
// }
// let b = 30;

// function add3(a, b) {
//   a + b;
// }

const add4 = (a, b) => a + b;

// IIFE(Immediate involke function execution)

// console.log(add3(4, 6));
// console.log(add4(4, 6));

// (function () {
//   console.log("test");
// })();

// Promise - is a object it has 2 parameter (resolve,reject)

// console.log("a");

// Promise.resolve().then(() => {
//   console.log("Promise resolved");
// });

// setTimeout(() => {
//   console.log("setTimeOut");
// }, 0);
// console.log("b");

// function getname(firstname) {
//   return firstname;
// }

// console.log(getname("yash"));
// console.log(getname("priyanka"));

// console.log(3 + undefined + false + true + "4" + false + true + 4);

// async function getdata() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const res = await response.json();
//   console.log(res);
// }
// getdata();

// const arr = [];

// arr.map(() => {});

function map(total) {
  let discount = 0.1;
  let actualvalue = total - total * discount;
  callback(actualvalue);
}

function callback(actual) {
  console.log(actual);
}

console.log(map(100));

// function
// async function
// fetch
// switch
// promise
// hoisting
// IIFC
// function scope(local)
// block scope
