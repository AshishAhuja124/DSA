//Checking array in other array
//array1 = [1,2,3,4] array2 = [1,9,4,16]
//if[arr1[i] * arr1[j] === arr2[j]
//let isSquare= true

// function isSquareCheck(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         let isSquare = false;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] * arr1[i] === arr2[j]) {
//                 isSquare = true
//             }
//             if (j === arr2.length - 1) {
//                 if (!isSquare) {
//                     return false;
//                 }
//             }
//         }
//     }
//     return true
// }

// console.log(isSquareCheck([1,2,3,4],[1,9,4,16]))

// Time complexity of this method is O(n2);

//We can use frequency pattern and creating 2 objects
//arr1 = [1,2,4,2] arr2 = [1,4,4,16]
//let map1={}
//let map2 = {}
function isSquareCheck(arr1, arr2) {
    let map1 = {}
    let map2 = {}

    for(let item1 of arr1) { // n times
        map1[item1] = (map1[item1] ||0) + 1;
    }
    console.log("map1",map1);
    for(let item2 of arr2) { // n times
        map2[item2]  = (map2[item2] || 0) + 1;
    }
    console.log("map2",map2);

    for(let key in map1) {
        console.log("key", key);
        if(!map2[key * key]) {           // Obj keys compare in terms of square
            return false
        }
        if(map1[key] !== map2[key * key]) { // Value compare
            return false
        }
    }
    return true
}
console.log(isSquareCheck([1,2,4,2],[1,4,4,16]))

// Time complexity O(n)
