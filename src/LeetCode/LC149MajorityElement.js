// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


var majorityElement = function(nums) {
    const halfLength = nums.length / 2;
    const count = {};

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > halfLength) {
            return num;
        }
    }
};