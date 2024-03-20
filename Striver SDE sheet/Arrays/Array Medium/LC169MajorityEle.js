// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
//Using frequency pattern
var majorityElement = function (nums) {
    let n = nums.length;
    let counter = {};
    for (let val of nums) {
        counter[val] = ((counter[val] || 0) + 1)
        // console.log(val);
        if(counter[val] > n / 2) {
            console.log(val);
            return val;
        }
    }
    return null;
    // console.log(counter);
}

console.log(majorityElement([3,2,3])) 