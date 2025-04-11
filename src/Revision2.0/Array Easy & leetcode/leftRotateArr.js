//brute force

function leftRotate(arr, d) {
    let n = arr.length;
    let temp = [];

    //store the first d elements in temp array
    for (let i = 0; i < d; i++) {
        temp.push(arr[i]); 
    }
    //shift the rest of the elements to the left by d positions
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }
    //copy the elements from temp to the end of the array   

    for (let i = 0; i < d; i++) {
        arr[(n - d + i) ] = temp[i];
    }

    return arr;
}

// console.log(leftRotate([1, 2, 3, 4, 5,6,7], 2)); // Output: [3, 4, 5,6, 7,  1, 2]

//Time complexity : O(n) space complexity : O(d)

//Optimized approach

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
