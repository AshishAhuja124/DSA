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
var containsDuplicate = function(nums) {
    const s = new Set(nums); 
    return s.size !== nums.length
}
// ----------------------------------------
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};
// ----------------------------------------
var containsDuplicate = function(nums) {
    const s = new Set(nums);
    if(s.size !== nums.length)
        return true
    return false;
   
};
// ----------------------------------------
var containsDuplicate = function (nums) {
  return [...new Set(nums)].length !== nums.length;
};

//---------------------------
//Using map
//COntains duplicate using map
function dup(nums) {

    let myMap = new Map();
    for(const n of nums) {
        if(myMap.has(n)) return true;
        myMap.set(n, true);
    }
    return false
}

const res  = dup([1,2,3,1])
console.log(res);