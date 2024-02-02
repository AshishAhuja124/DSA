// Write a function called sumZero which accepts  a sorted Array of integrers. The function should find the first pair where the sum is 0. 
// Return an array that includes both the values that sum to zero or undefined if a pair doesnt exist

// sumZero([-3-2,-1,0,1,2,3]) // [-3,3]
//sumZero([-2,0,1,3]) // Undefined
//sumZero([1,2,3]) // Undefined

//Naive Solution  //O(n2)

// function sumZero(arr) {
//     for(let i =0; i<arr.length; i++) {
//         for(let j = i+1; j< arr.length; j++) {
//             if(arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//         console.log('No pair found')

//     }
// }
//  console.log(sumZero([-3,-2,1,0,1,2,3]));



// function sumZero(arr) {
//     for(let val1 of arr) {
//         for (let j=val1+1; j<arr.length; j++) {
//             if(val1 + arr[j] === 0) {
//                 console.log(val1, arr[j])
//                 return (val1, arr[j])
//             }
//         }
//     }
// }
//  console.log(sumZero([-3,-2,1,0])); Time complexity O(n2)

// Using multiple pointers
//Refactor to two pointers method : TIme complexity: O(n) Space compexity : O(1)

function isSumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right],'These are the first pair having sum zero']
        }else if(sum > 0) {
            right --;
        }
        else {
            left ++;
        }
    }
    console.log('no pair')
}
console.log(isSumZero([-3,-2,1,0,1,2,3]));
