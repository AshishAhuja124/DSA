//USing Dutch National flag algorithm , 3pointers
var sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            //swap low, mid
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }
        else if (nums[mid] === 1) {
            //no action for 1
            mid++;

        }
        else {
            // Swap current element with the element at highindex

            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums

};

console.log(sortColors([2,0,2,1,1,0])) //[ 0, 0, 1, 1, 2, 2 ]