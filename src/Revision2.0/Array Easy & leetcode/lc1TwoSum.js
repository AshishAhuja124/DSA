// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//For loop
//time compelxity = o(n2)
var twoSum = function(nums, target) {
    for(let number of nums) {
        for(let j = 1; j<nums.length; j++) {
            if(number + nums[j] == target) {
                return [number, nums[j]]
            }
        }
    }
};
console.log(twoSum([2,7,11,15], 9));  //[2,7]


// Two pointer complexity o(n)
var twoSumWithPointer = (arr, target) =>  {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];

        if(sum === target) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--
        } else  {
            left++
        }
    }
}

console.log(twoSumWithPointer([2,7,11,15], 9));