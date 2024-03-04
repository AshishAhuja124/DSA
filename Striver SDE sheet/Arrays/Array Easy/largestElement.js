//Brute force 

var largestBrute = function(arr) {
    let sortedArr = arr.sort((a,b)=> a - b);
    console.log(sortedArr)
    return sortedArr[sortedArr.length - 1]
}

// var largestBrute = function(arr) {
//     return Math.max(...arr); // Return the maximum element in the array
// }


console.log(largestBrute([3,2,1,5,2]))
var largestElement = function(arr) {
    let largest = arr[0];
    for(i=0; i< arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}


console.log(largestElement([3,2,1,5,2]))