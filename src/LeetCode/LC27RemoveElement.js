// Remove element 
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

function removeEle(nums,val) {
    if(nums.length > 0) {
        let i = 0;
        for(let j = 0; j< nums.length; j++) {
            if(nums[j] !== val) {
                 //Swap numbers if current value is not equal to val
                nums[i] = nums[j];
                i++;
            }
        }
        // console.log(nums)
        return i;
    }
    else {
        throw new Error("Array is empty");
    }
}
// console.log(removeEle([3,2,2,3],3));

//Using filter 

function remove(nums,val) {
    nums = [...nums.filter((el => el !== val))];
    console.log(nums);
    return nums
}
console.log(remove([3,2,2,3],3))
