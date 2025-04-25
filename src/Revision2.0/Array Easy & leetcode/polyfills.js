// map polyfill

Array.prototype.myMap = function(cb) {
    let temp = [];

    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }

    return temp;
}

let arr = [1,2,3,4,5];
let newArr = arr.myMap((x) => x * 10);

console.log(newArr)

//------------filter

Array.prototype.myFilter = function(cb) {
    let temp = [];

    for(let i = 0; i< this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp
}

let filteredArr = arr.myFilter((x) => x > 2);

console.log(filteredArr)

let mapandfilter = arr.myMap((x) => x * 2).myFilter((x) => x > 5);
console.log(mapandfilter)