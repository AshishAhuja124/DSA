//Write a function maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in the array,
//maxSubArraySum([1,2,5,2,8,1,5],2)  //10
//([1,2,5,2,8,1,5],4) //17
//([4,2,1,6],1) //6
//General solution but not preferred
// function maxSubArraySum(arr, num) {
//     if(num > arr.length) {
//         throw new Error ("Number should be less than lenght of array")
//     }else {
//         let max = 0;
//         for(let i = 0; i< arr.length -num+1; i++) {
//             let temp = 0;
//             for(let j = 0; j < num; j++) {
//                 temp += arr[i + j];
//             }
//             if(temp > max) {
//                 max = temp;
//             }
//             console.log(max,temp)
//         }
//         return max;
//     }

// }
// console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3))

//Refactor using Sliding window pattern - Time complexity - O(n)

function maxSubArraySum(arr, num) {
    let tempSum = 0;
    let maxSum = 0;
    if (arr.length < num) {
        throw new Error("Number should be less than lenght of array")
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
        console.log(maxSum,'max')
    }
    tempSum = maxSum;
    for(let i =0; i< num; i++) {
        tempSum = (tempSum -arr[i - num] + arr[i]);
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
