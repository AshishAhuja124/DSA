//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers but it will always be sorted

//CountUniqueValues([1,1,1,1,1,2]) //2
//([-2,-1,0,1,2]) //5


//using frequecny pattern

function countUnique(nums) {
    if(nums.length > 0) {
        let counter = {};
        let countArray = []

        for(let number of nums) {
            counter[number] = (counter[number] || 0) + 1
            if (counter[number] === 1) {
                countArray.push(number);
              }
        }

        console.log(countArray)
    }
}   

console.log(countUnique([1,1,2]))

//using two pointer

//logic
// console.log(countUniqueValue([1,1,2,3,4,5,5,6,7]))

//i = 0, j = 1
//// if value i, j dont do anything

//if arr[i]!= arr[j]
//1. i++
//2. arr[i] = arr[j]


function countUniquewithPointer (arr) {
    if(arr.length > 0) {
        var i = 0;

        for(let j = 1; j<arr.length; j++) {
            if(arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j]
            }
            
        }
        return i+ 1;
    }
}

console.log(countUniquewithPointer([1,1,2,3,4,5,5,6,7]))


