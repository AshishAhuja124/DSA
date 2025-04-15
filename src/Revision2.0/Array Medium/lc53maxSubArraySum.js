// we would be using kadene' s algorithm to find the maximum subarray sum
// time complexity is O(n) and space complexity is O(1)

function maxSubArraySum(arr) {
    let max = - Infinity;
    let sum = 0;

    for(let i = 0; i< arr.length; i++) {
        sum += arr[i];
        console.log(sum, 'sum');

        if(sum > max) {
            max = sum;
            console.log(max, 'max');
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return max;
}

console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])) // 6