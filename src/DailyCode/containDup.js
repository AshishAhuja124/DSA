// Leetcode 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// ----------------------------------------
// Time complexity: O(n)
// Space complexity: O(n)

var containsDuplicate = function(arr) {
    let uniueArr = new Set(arr);
    return uniueArr.size != arr.length;
}

console.log(containsDuplicate([1,2,2,4]))