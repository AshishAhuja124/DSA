// "use strict"
//this in global
// console.log(this) //window


//this called from a function
// function gfFunction() {
//     console.log(this) //window in non strict , undefined in strict
// }

// gfFunction();

//called with obj

let bfObj = {
    name: "Ashish",
    age: 21,
    gfFunction: function () {
        console.log(this) //bfobj
    }
}

// bfObj.gfFunction();

//called with window by passinf ref

const gfrefFun = bfObj.gfFunction();
gfrefFun(); // window