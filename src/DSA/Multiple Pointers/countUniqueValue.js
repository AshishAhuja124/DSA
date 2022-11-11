//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers but it will always be sorted

//CountUniqueValues([1,1,1,1,1,2]) //2
//([-2,-1,0,1,2]) //5

//Using freuqncy pattern method
// function countUniqueValue(arr){
//     var counts = {}
//     for(var val of arr) {
//         counts[val] = 1+ (counts[val] ||0);
//     }
//     console.log(counts)
// }
// countUniqueValue([-2,-1,1,0,1]);

// function countUniqueValue2(arr){
// let counter= {}
// arr.forEach(el => counter[el] =  1 + (counter(el) || 0));        
//     console.log(counter);
// }

// countUniqueValue2([-2,-1,1,0,1]);

//Two pointer method
//...............................................................
// console.log(countUniqueValue([1,1,2,3,4,5,5,6,7]))

//Count Unique values
// conditions
//arr[i] !== arr[j];
// i++
// arr[i] = arr[j]

function unique(arr) {
    if(arr.length > 0) {
        var i = 0;
        for(let j=1; j<arr.length; j++) {
            if(arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1;
    } else {
        throw new Error("Array is empty");
    }
}
console.log(unique([1,1,2,3,4,5,5,6,7]),'Unique count')
//Time complexity o(n)


