let multiply = function (x, y) {
    return x * y;
}

let multiplyByTwo = multiply.bind(this,2);

console.log(multiplyByTwo(3)); // 2 * 3 = 6
console.log(multiplyByTwo(4)); // 2 * 4 = 8
console.log(multiplyByTwo(5)); // 2 * 5 = 10

let multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(3)); // 3 * 3 = 9
console.log(multiplyByThree(4)); // 3 * 4 = 12

let sum = function (x, y) {
  return x + y;
};

let sumWithTen = sum.bind(this, 10);
let sumWithFive = sum.bind(this, 5);
console.log(sumWithTen(5)); // 10 + 5 = 15
console.log(sumWithFive(5)); // 5 + 5 = 10