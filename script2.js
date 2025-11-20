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

// function map(total) {
//   let discount = 0.1;
//   let actualvalue = total - total * discount;
//   callback(actualvalue);
// }

// function callback(actual) {
//   console.log(actual);
// }

// console.log(map(100));

// function
// async function
// fetch
// switch
// promise
// hoisting
// IIFC
// function scope(local)
// block scope

// Callback -

// function getName(name, getFulldetails) {
//   console.log(name);
//   getFulldetails(name);
// }

// function getFulldetails(firstname) {
//   console.log(firstname, 23);
// }

// getName("sakshi", getFulldetails);

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("set 3");
//     }, 1000);
//     console.log("set 2");
//   }, 500);
//   console.log("set 1");
// }, 100);

// function getName(name, callback) {
//   console.log(name);
//   setTimeout(() => {
//     // console.log(callback(name));
//   }, 1000);
// }

// function getFulldetails(firstname) {
//   console.log(firstname, 23);
// }

// getName("sakshi", getFulldetails);

// const numbers = [5, 25, 33, 40, 52];

// map()
// const mapparr = numbers.map((value, index) => value < 30);

// console.log(numbers);
// console.log(mapparr);

// filter()
//  value>26 ? true :false
// const filterarr = numbers.filter((value) => value > 26 );
// console.log(filterarr);
// 7,27,33,40,52

// reduce()

// const numbers = [10, 20, 30, 40, 50];
// const total = numbers.reduce((acc, value) => acc + value, 0);
// console.log(total);

// Maximum number
// const scores = [39, 58, 27, 94, 63];

// const maxnum = scores.reduce((acc, val) => (val < acc ? val : acc));

// console.log(maxnum);

//  val > acc ? true : false
// 39 > 0 ? 39 : 0
// 58 > 39 ? 58 : 39
// 27 > 58 ? 27 : 58
// 94 > 58 ? 94 : 58
// 63> 94 ? 63 : 94
// acc = 94

// const arr = [
//   [2, 3],
//   [4, 5],
//   [6, 7],
// ];

// const addedarr = arr.reduce((acc, value) => acc.concat(value), []);

// console.log(arr);
// console.log(addedarr);

//

// const fruits = ["banana", "mango", "apple", "apple", "banana", "apple"];

// const fruitscount = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// acc[apple]= 1
// "apple"= 1
// "mango"=1
// "apple"=1+1 =2;
// "banana"= 1;
// "mango"=1+1=2;
// "apple"= 2+1=3
// {apple: 3, mango:2,banan:1}
// }, {});

// console.log(fruitscount);

// const people = [
//   { name: "sakshi", age: 23 },
//   { name: "yash", age: 24 },
//   { name: "priyanka", age: 23 },
//   { name: "sudhanshu", age: 24 },
//   { name: "arjun", age: 25 },
//   { name: "swapnil", age: 23 },
// ];

// const grouped = people.reduce((acc, person) => {
//   const age = person.age;
//   if (!acc[age]) acc[age] = [];
//   acc[age].push(person);
//   return acc;
// }, {});
// console.log(grouped);

// 23=[{ name: "sakshi", age: 23 },{ name: "priyanka", age: 23 },{ name: "swapnil", age: 23 }]
// 24 = [{ name: "yash", age: 24 },{ name: "sudhanshu", age: 24 },{ name: "arjun", age: 24 }]

// Promise -

// const promise = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) resolve("task success");
//   else reject("task failed");
// });

// promise.then((result) => console.log(result)).catch((err) => console.log(err));

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("data fetched"), 4000);
//   });
// }

// fetchData().then((data) => console.log(data));

// new Promise((resolve) => resolve(2))
//   .then((num) => num * 2)
//   .then((number) => number * 4)
//   .then((result) => console.log(result));

// DOM (basic)

// Select by ID
// const title = document.getElementById("main-title");
// const title2 = document.getElementById("main-title2");
// const title3 = document.getElementById("main-title3");

// Select by class
// const items = document.getElementsByClassName("list-item");

// Modern querySelector
// const button = document.querySelector(".btn");

// Selecting by tag
// const button2 = document.getElementsByTagName("button");
// console.log(title, items, button2);

// Template literals
// let firstname = "umesh";
// console.log(`Hello, ${firstname} `);

// let msg = ` This is line 1
// This is line 2`;
// console.log(msg);

// let a = 2,
//   b = 4;

// console.log(`Sum = ${a + b}`);

// function greet() {
//   return "Welcome";
// }

// console.log(`Message: ${greet()}`);

// Destructure
// const colors = ["red", "green", "blue"];
// const [a, c, b] = colors;
// console.log(a, b);

// object destruture

// const user = { name: "sudanshu", age: 24 };
// const { age } = user;
// console.log(age);

// const [x = 10, y]=[5]
// console.log(x, y);

const emp = {
  id: 101,
  address: { city: "pune", pin: 413001 },
};

const {
  id,
  address: { city },
} = emp;

console.log(id, city);

// Fetch

