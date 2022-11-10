// write a function called same, which accepts two arrays. the function should return true 
// if every value in the array has its corresponding value  squared in the second array. The frequency of values must be the same
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false


//Traditional approach  O(n2) 
// function same1(arr1, arr2){
//     if(arr1.length !== arr2.length) return false

//     for(let i = 0; i< arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex == -1) return false;
//         console.log(arr2);
//         arr2.splice(correctIndex,1);
    
//     }
//     return true
// }

// same1([1,2,3,2], [9,1,4,4])

//Frequency Counter Method   Complexity : O(n)
 

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false

//     let fq1 = {};
//     let fq2 = {};

//     for(let val of arr1) {
//         fq1[val] = (fq1[val] || 0) + 1
//     }
//     for(let val of arr2) {
//         fq2[val] = (fq2[val] || 0) + 1
//     }
//     console.log(fq1);
//     console.log(fq2)
//     for(let key in fq1) {
//         if(!(key ** 2 in fq2)) {
//             return false;
//         }
//         if(fq2[key ** 2] !== fq1[key]){
//             return false
//         }
//     }
//     return true
// }

// same([1,2,3,2], [9,1,4,4])

