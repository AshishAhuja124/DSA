//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Not preferred
function arrayRotate(arr, k) {
    for(let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
        console.log(arr);
    }
}

// console.log(arrayRotate([1,2,3,4,5,6,7], 3));

const arr = [1, 3, 6, 5, 4];
const rotatedArr = arr.map((e, i) => arr[arr.length-i-1])
// console.log(rotatedArr)


//Using splice
function arrayRotate2(arr, k) {
    let deletedArray = arr.splice(arr.length - k) //[5,6,7]
    console.log(deletedArray, 'deletedArray')
    for(let i = 0; i< deletedArray.length; i++) {
        arr.splice(i, 0, deletedArray[i]);
        console.log(arr);
    }
}
// console.log(arrayRotate2([1,2,3,4,5,6,7],3))

//Optimal solution
const revNums = (nums, start, end) => {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;

    }
}

function rotate(nums, k){
    
    k = k % nums.length;

    nums.reverse();
    revNums(nums, 0, k-1);
    revNums(nums, k , nums.length - 1)
    return nums
}

const res = (rotate([1,2,3,4,5,6,7],3))
console.log(res)

//Another solution

const arr1 = [1, 3, 6, 5, 4];
const k = 2; // Number of elements to rotate

const rotatedArr1 = [...arr.slice(k), ...arr.slice(0, k)];

console.log(rotatedArr1); // Output: [6, 5, 4, 1, 3]