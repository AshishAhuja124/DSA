//factorial using iteration

// function factorial(num) {
//     let total = 1;

//     for(let i=num; i>1; i--) {
//         total *= i;
//         console.log(total)
//     }
//     return total
// }

// console.log(factorial(4))

//Now using recursion
//flow
// factorial(4) returns 4 * factorial(3)
// factorial(3) returns 4 * 3 * factorial(2)
// factorial(2) returns 4 * 3 * 2 * factorial(1)
// factorial(1) returns 4 * 3 * 2 * 1 * factorial(0)
// factorial(0) returns 4 * 3 * 2 * 1 * 1


function recusiveFactorial(num) {
    // if number is 0
    if(num ===0) return 1;
    // if number is positive
    return num * recusiveFactorial(num - 1);
}
console.log(recusiveFactorial(4))