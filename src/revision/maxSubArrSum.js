// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
const maxSubArraySum = function(arr,k) {
    let tempsum = 0;
    let maxsum = 0;

    for(i = 0; i< k; i++) {
        maxsum += arr[i];
        console.log(maxsum, 'max');
    }
    tempsum = maxsum;

    for(let i=0; i< arr.length; i++) {
        tempsum = (tempsum - arr[i - k] + arr[i]);;
        if(tempsum > maxsum) {
            maxsum = tempsum
        }
    }
    return maxsum;

}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 17
