import goodbye, { add, greet } from "./utils.js";

let a = document.getElementById("a");
let b = document.getElementById("b");

document.getElementById("add").addEventListener("click", () => {
  document.getElementById("total").innerHTML = add(a.value, b.value);
});

console.log(greet("Sudanshu"));
console.log(goodbye());


