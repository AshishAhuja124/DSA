// /console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])) // 6

//intuition is if sum < o then sum = 0, else pass and add
//kadene' algorithm


function maxSubArraySum(arr) {
    let max = -Infinity;
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        // console.log(sum, 'sum')

        if(sum > max) {
            max = sum
        } 
        if(sum < 0) {
            sum = 0
        }
    }
    return max;
}

console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))