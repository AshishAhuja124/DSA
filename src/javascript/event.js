document.querySelector("#grandParent")
.addEventListener("click", (e) => {
  console.log("grandParent clicked");
}, false); // false means the bubbling phase


document.querySelector("#parent")
.addEventListener("click", (e) => {
  console.log("parent clicked");
}, false);  // false means the bubbling phase

document.querySelector("#child")
.addEventListener("click", (e) => {
  console.log("child clicked");
}, false);  // false means the bubbling phase

//-----------------------------

document.querySelector("#grandParent")
.addEventListener("click", (e) => {
  console.log("grandParent clicked");
}, true); // true means the capturing phase


document.querySelector("#parent")
.addEventListener("click", (e) => {
  console.log("parent clicked");
}, true);  // true means the capturing phase

document.querySelector("#child")
.addEventListener("click", (e) => {
  console.log("child clicked");
}, true);  // true means the capturing phase

