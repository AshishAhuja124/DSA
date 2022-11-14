// function removeDuplicates(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     console.log(nums)
//     return nums.length
// };

// var res = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
// console.log(res);
//two  pointer approach all test cases passed

var removeDuplicates = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
            console.log(count)
        } else {
            nums[i - count] = nums[i];
        }
    }
    return nums.length - count;
};
var res = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(res);
