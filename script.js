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

var a = 34;
var a = 56;

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
const mobile = {
  model: "iphone",
  memory: 128,
  ram: 8,
  getmomoryandram: function () {
    return (
      "Memory is" +
      " " +
      this.memory +
      "GB" +
      " " +
      "and RAM is" +
      " " +
      this.ram +
      "GB"
    );
  },
  getModelandram: function () {
    return (
      "Model is" + " " + this.model + " " + "and RAM is" + " " + this.ram + "GB"
    );
  },
};

// Get value
// console.log(mobile.model);
// console.log(mobile["model"]);

console.log(mobile.getmomoryandram());
console.log(mobile.getModelandram());

// Update value inside the object
console.log("before update" + mobile.ram);
mobile.ram = "16";
console.log("after update" + mobile.ram);

// Add properties inside the object
mobile.display = "gorila glass";
console.log(mobile.display);

// delete the propery
delete mobile.ram;
console.log(mobile.ram);

// Array
// is type of object 
// there is no limit
const array1 = ["umesh", 28, true, undefined, null, false, 329839283];

const array2=[];
array2[3]="maxx";

console.log(array2);



console.log(array1);
