// console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])) // 6
//we can use kadene' algo. If sum < 0 drop else proceed

function maxSubArraySum(arr) {
    let max = -Infinity;
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if(sum > max) {
            max = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return max
}

console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))  // 6