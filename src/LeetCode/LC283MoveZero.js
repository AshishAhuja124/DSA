// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function sortZero(arr) {
    arr.sort((a,b) => a === 0 ? 1 : b === 0 ? -1 : 0);
    console.log(arr);
}

console.log(sortZero([0,1,0,3,12]));