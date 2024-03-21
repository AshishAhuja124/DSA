// 2149. Rearrange Array Elements by Sign

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:
// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]

//brute force

var rearrangeArr = function(arr) {
    let pos = [];
    let neg = [];
    let n = arr.length;
    for(let val of arr) {
        if(val > 0) {
            pos.push(val);
            console.log(pos);

        }
        else {
            neg.push(val);
            console.log(neg);

        }
    }
    //positives on even indices and negative on odd

    for(let i = 0; i< n/2; i++) {
        arr[2 * i] = pos[i];
        arr[2*i+1] = neg[i];
    }
    return arr;
}

console.log(rearrangeArr([3,1,-2,-5,2,-4])) //[ 3, -2, 1, -5, 2, -4 ]

//using 2 pointers
var rearrangeArray = function(nums) {
    const n = nums.length;
    const output = new Array(n);
    let i = 0, pos = 0, neg = 1;
    
    while (i < n) {
        if (nums[i++] > 0) {
            output[pos] = nums[i - 1];
            console.log(output)
            pos += 2;
        } else {
            output[neg] = nums[i - 1];
            neg += 2;
        }
    }
    
    return output;
};
console.log(rearrangeArray([3,1,-2,-5,2,-4])) //[ 3, -2, 1, -5, 2, -4 ]
