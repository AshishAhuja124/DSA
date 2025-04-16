// sum(1)(2)(3)(4) // 10


let sum = function (a) {
    return function (b) {
        if(b) {
            return sum( a + b) // 1 + 2 = 3
        }
        return a; // 3 + 0 = 3
    }
}

let sum2 = function(a) {
    return function (b) {
        if(b) {
            return sum2(a + b);
        }
        return a;
    }
}

console.log(sum2(1)(2)(3)(4)())

let sum3 = a => b => b ? sum3(a+b) : a;
console.log(sum3(1)(2)(3)(4)())
