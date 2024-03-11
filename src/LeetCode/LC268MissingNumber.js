// 268. Missing Number
// Easy
// Topics
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i<nums.length; i++) {
        if(!nums.includes(i)) {
            return i;
        }
    }
    return nums.length;
};
console.log(missingNumber([3,0,1]));

//Optimal solution

var missNum = function(nums) {
    const n = nums.length;

    let s1 = (n*(n+1))/2;
    let s2 = 0;

    for(let i = 0; i<nums.length; i++) {
        s2 += nums[i];
    }
    // console.log(s2)

    const missing = s1 - s2;
    return missing;

}

console.log(missNum([3,0,1]));
