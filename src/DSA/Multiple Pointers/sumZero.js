// Write a function called sumZero which accepts  a sorted Array of integrers. The function should find the first pair where the sum is 0. 
// Return an array that includes both the values that sum to zero or undefined if a pair doesnt exist

// sumZero([-3-2,-1,0,1,2,3]) // [-3,3]
//sumZero([-2,0,1,3]) // Undefined
//sumZero([1,2,3]) // Undefined

//Naive Solution  //O(n2)

// function sumZero(arr) {
//     for(let i =0; i<arr.length; i++) {
//         for(let j = 0; j< arr.length; j++) {
//             if(arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// function sumZero(arr) {
//     for(let val of arr) {
//         for(let val2 of arr) {
//             if(val + val2 === 0) {
//                 return [val, val2]
//             }
//         }
//     }
// }
//  console.log(sumZero([-3,-2,1,0,2,3]));


//Refactor to two pointers method : TIme complexity: O(n) Space compexity : O(1)

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum == 0) {
            return [arr[left], arr[right]]
        }
        else if(sum > 0 ) {
            right--
        }
        else {
            left++;
        }
    }
}
 console.log(sumZero([-2,1,0,3]))
