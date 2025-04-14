// 268. Missing Number
// Solved
// Easy
// Topics
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

//Brute force

// Approach parse through the array 

function missing(arr) {
    for(let i =0; i<arr.length; i++) { //n
        if(!arr.includes(i)) { //n
            return i;
        }
    }
}

console.log(missing([3,0,1]))  //2

//time complexity O(n^2) and space complexity O(1)

//Optimal solution
// Approach 1: Using sum formula

// The sum of the first n natural numbers is given by the formula n*(n+1)/2.

function missingOptimal(arr) {
    let n = arr.length; 

    let sum = (n*(n+1))/2;

    let sumofArray = 0;

    for(let ele of arr) {
        sumofArray += ele
    }
    console.log(sumofArray)

    return sum - sumofArray
}

console.log(missingOptimal([3,0,1]))

//time complexity O(n) and space complexity O(1)

//XOR approach

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

//time complexity O(n) and space complexity O(1)