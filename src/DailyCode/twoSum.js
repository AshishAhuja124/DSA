// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
//time complexity is o(n2)

//optimal approach using two pointers
//time complexity o(n)
function twoSumOp(arr, target) {
    let left = 0;
    let right = arr.length - 1

    while(left < right) {
        let sum = arr[left] + arr[right];

        if(sum === target) {
            return [arr[left], arr[right]]
        }
        else if(sum > target) {
            right--;
        }else {
            left ++
        }
    }
}

console.log(twoSumOp([2,7,11,15], 9))

