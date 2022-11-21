// Given an integer array nums, find the subarray which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {
    let temp = 0
    let max = nums[0];

    for(let i=0; i< nums.length; i++) {
        temp += nums[i];
        console.log(temp,'tempSUm');
        if(temp > max) {
            max = temp;
            console.log(max, 'max');
        }
        if(temp < 0) {
            temp = 0
        }
    }return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6