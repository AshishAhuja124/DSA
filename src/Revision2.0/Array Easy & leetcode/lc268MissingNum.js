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