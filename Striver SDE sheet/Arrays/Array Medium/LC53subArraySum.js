function maxSubArray(nums) {
    //Using sliding window kadene's algo
    let temp = 0
    let max = -Infinity;

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