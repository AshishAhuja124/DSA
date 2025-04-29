function miss(arr) {
    for(let i = 1; i<arr.length; i++) {  //n
        if(!arr.includes(i)) { //n
            return i
        }
    }
}

console.log(miss([1,2,4,5]))

//time complexity: o(n2);
//Better solution using n natural numver formula

function missNo(arr) {
    let n = arr.length;
    let sum = (n*(n+1))/2;
    let sumofArray = 0

    for(let num of arr) {
        sumofArray += num;
    }
    return sum - sumofArray

}

//time complexity O(n) and space complexity O(1)

//xor operation - bit manupulation

function missingXor(arr) {
    let xor1 = 0;
    let n = arr.length;

    for(let i = 0; i<=n; i++) {
        xor1 = xor1 ^ i; //XOR of all numbers from 0 to n
    }

    for(let num of arr) {
        xor1 = xor1 ^ num; //XOR of all numbers in the array
    }

    return xor1; //XOR of the two results will give the missing number
}

console.log(missingXor([3,0,1])) //2
