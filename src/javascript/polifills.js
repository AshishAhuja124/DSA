//map

var arr = [1,2,3,4,5]
var modifiedArr = arr.map((x) => x * 2);

// console.log(modifiedArr);

//Polyfill for map()  array.map(num, i , arr)

Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}

var modifiedArrbyMao = arr.myMap((num, i, arr) => num * 2);
// console.log(modifiedArrbyMao) // [2,4,6,8, 10]

//----------Filter----------------------------------------------

var filterArr = arr.filter((x) => x > 2);
console.log(filterArr)

//polyfill for filter

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i< this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

var myFilterLogic = arr.myFilter(x => x > 3);
console.log(myFilterLogic)

//-----------------------bind------------

let obj1 = {
    fName: "Ashish",
    lName: "Ahuja"
}

let printFullName = function() {
    console.log(this.fName + " " + this.lName)
}

let printMyName = printFullName.bind(obj1);
printMyName();

Function.prototype.myBind = function(context, ...args1) {
    const fn = this;

    return function(...args2) {
      return fn.apply(context, [...args1, ...args2]);
    };
  };

let printMyName2 = printFullName.myBind(obj1);
printMyName2()