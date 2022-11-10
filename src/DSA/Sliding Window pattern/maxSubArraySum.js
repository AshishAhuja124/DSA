//Write a function maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in the array,
//maxSubArraySum([1,2,5,2,8,1,5],2)  //10
//([1,2,5,2,8,1,5],4) //17
//([4,2,1,6],1) //6
//General solution but not preferred
// function maxSubArraySum(arr, num) {
//     if(num > arr.length ) {
//         return null
//     }
//     var max = -Infinity;
//     for(let i = 0; i < arr.length - num + 1; i ++) {
//         temp = 0;
//         for(let j = 0; j< num; j++) {
//             temp += arr[i + j];
//         }
//          if(temp > max) {
//              max = temp;

//          }
//          console.log(temp, max);
//     }

// }
// console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3))

//Refactor using Sliding window pattern - Time complexity - O(n)

function maxSubArraySum(arr, num) {
    if (num > arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
        console.log(maxSum)
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
        console.log(tempSum,maxSum,"temp,max")
    }

    return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 6))
