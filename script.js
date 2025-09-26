// var a = 7;
// console.log(a);

// function demo() {
//   var a = 45;
//   console.log(a);
// }

// demo();
// console.log(a);

// const c = true;
// demo();

// function add() {
//   console.log("addition");
// }
// add();

// variables
// var - global scope
// we can reassign the value and redeclare the variable

// console.log(a);

// var a = 34;
// var a = 56;

// function add() {
//   var a = 67;
//   console.log(a);
// }

// add();
// console.log(a);
// let
// let is block scope
// we cannot redeclare a variable but we can reassign the value
// console.log(b);

// let b = 99;
// b = 477;
// b=57847;

// function add2() {
//   let b = 33;

//   console.log(b);
// }

// add2();
// console.log(b);

// const
// const is a block scope
// we cannot reassign the value and we cannot redeclare the variable
// console.log(PI);

const PI = 3.14;
// PI = 3.15;
// console.log(PI);

// add(4, 4);
// add(7, 5);
// c=48598;
// var e = 74;
// var b = 33;
// function sub() {
//   console.log(e - b);
// }
// sub();
// console.log(c);

// Data Types
// - Primitive Data Type
// Number,String,null,undefined,BigInt,True/False

// Number =378.58;
// String = "umesh";
// null =null;
// undefined= "undefined";
// BigInt=65789463567894504837;
// Boolean=True/False

// Non Primitive
// -Object, Array [no limit]

// let student = [];
// console.log(typeof student);

// if (isNaN(34)) {
//   console.log("Is Number");
// } else {
//   console.log("");
// }

// Functions

const mobilememory = "iphone";
const mobilemodel = "128";

// Object
// is collection of properties

const mobile1 = {};
const mobile = {
  model: "Iphone",
  memory: "128GB",
  ram: "8GB",
  battery: "7000mah",
  wallpaper: {
    nature1: "nature1",
    nature2: "nature2",
    nature3: "nature3",
  },
  getMemoryandRam: function () {
    return (
      "Memory is" + " " + this.memory + " " + "and RAM is" + " " + this.ram
    );
  },
  getbatteryandmodel: function () {
    return (
      "battery is" +
      " " +
      this.battery +
      " " +
      "and Model is" +
      " " +
      this.model
    );
  },
};

// to get value inside the object
// console.log(mobile.model);
// console.log(mobile.battery);
// console.log(mobile.wallpaper.nature1);

// console.log(mobile["model"]);
// console.log(mobile.getMemoryandRam());
// console.log(mobile.getbatteryandmodel());

// To update value inside the object
// console.log("before update " + mobile.memory);
// mobile.memory = "256GB";

// console.log("after update " + mobile.memory);

// To add properties inside object
// mobile.processor = "snapdragon";
// console.log(mobile.processor);

// console.log(mobile.ram);
// delete mobile.ram;
// console.log(mobile.ram);

// Array
// type of object
// no a fixed length
// it is always start from 0 index
// const array2 = ["maxx", 2378, false, true, null, undefined, 7897673];

// console.log(array2[2]);

// console.log(typeof array2);

// Method

// const mobile = {
//   model: "iphone",
//   memory: 128,
//   ram: 8,
//   getmomoryandram: function () {
//     return (
//       "Memory is" +
//       " " +
//       this.memory +
//       "GB" +
//       " " +
//       "and RAM is" +
//       " " +
//       this.ram +
//       "GB"
//     );
//   },
//   getModelandram: function () {
//     return (
//       "Model is" + " " + this.model + " " + "and RAM is" + " " + this.ram + "GB"
//     );
//   },
// };

// Get value
// console.log(mobile.model);
// console.log(mobile["model"]);

// console.log(mobile.getmomoryandram());
// console.log(mobile.getModelandram());

// // Update value inside the object
// console.log("before update" + mobile.ram);
// mobile.ram = "16";
// console.log("after update" + mobile.ram);

// // Add properties inside the object
// mobile.display = "gorila glass";
// console.log(mobile.display);

// // delete the propery
// delete mobile.ram;
// console.log(mobile.ram);

// Array
// is type of object
// there is no limit

// const array2 = [];
// array2[3] = "maxx";

// console.log(array2);

// push() - it use to push data at last index

// console.log(array1.push("maxx"));
// console.log(array1);

// pop()- it use remove the data at last index
// array1.pop();
// console.log(array1);

// shift() - it use to remove the data at first index
// array1.shift();
// console.log(array1);

// unshift()- it use to add the data at first index
// array1.unshift("",898)

// console.log(array1);

// join() - use to join the data in array
// const joinarray = array1.join(" ");
// console.log(joinarray);

// const array1 = ["umesh", 28, true, undefined, null, false, 329839283];
// console.log(array1.toString());
// console.log(array1);
// splice() - it will remove the data and delete the data from existing array and it will give new array
// const arrsplice = array1.splice(3, 0, "item3 ", "item4");
// console.log(arrsplice);
// console.log(array1);

// slice() - it will remove data in existing array from start index and until end index and it will give new array
// const arrslice = array1.slice(1, 6);
// console.log(arrslice);

// Function
// console.log(a);

// var a = 4;
// var b = 47;
// add(56, 38);

// function add(b, c, d, e, f, g, h) {
//   return b + c + d + e + f + g + h;
// }

// console.log(add(false, 8, 5, "38", 6, 5, "maxx"));

// function sub(n, m, o, p) {
//   return n - m - o - p;
// }
// console.log(sub(5, 6, "7", 3));
// 0                               9
// const array1 = [34, 66, 86, 33, 3, 7, 12, 97, 22, 64];
const array2 = ["umesh", 28, true, undefined, null, false, 329839283];

// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

// forEach() - it wont return new array
// array1.forEach((data) => {
//   console.log(data);
// });

// map() - it will return new array
// const maparr = array1.map((n) => {
//   return n + 2;
// });
// console.log(array1);
// console.log(maparr);

// filter() -

// const filterarr = array1.filter((number) => {
//   return number > 30;
// });

// console.log(filterarr);

// Array of objects
// const students = [
//   { id: 1, name: "yash", game: "cricket" },
//   { id: 2, name: "sakshi", game: "basketball" },
//   { id: 3, name: "priyanka", game: "basketball" },
//   { id: 4, name: "sudhanshu", game: "cricket" },
//   { id: 5, name: "arjun", game: "cricket" },
// ];

// const gameplayer = students.filter((student) => {
//   return student.game === "cricket";
// });
// console.log(gameplayer);

const array1 = [34, 66, 86, 33, 3, 7, 33, 12, 97, 22, 33, 64];

// find() -
// const is33 = array1.find((number) => {
//   return number === 33;
// });
// console.log(is33);

// indexOf() -
const isfirstindex = array1.indexOf(33);
console.log(isfirstindex);

// lastindexOf() -

const lastindexof = array1.lastIndexOf(33);
console.log(lastindexof);

// reduce() -
const reducearr = array1.reduce((sum, number) => {
  // sum = sum+number;
  // sum = 5+34; = 39;
  // sum = 39 +66 = 105;
  // sum = 105 + 86 =

  return sum + number;
}, 5);
console.log(reducearr);
