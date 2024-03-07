// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function sortZero(arr) {
    arr.sort((a,b) => a === 0 ? 1 : b === 0 ? -1 : 0);
    console.log(arr);
}

// console.log(sortZero([0,1,0,3,12]));
//Optimal solution
function sumZero2(arr) {
    let insertPosition = 0;
    for (let i = 0; i < arr.length; i++) {
        // Fill all non-zero elements
        if (arr[i] !== 0) {
            arr[insertPosition] = arr[i];
            insertPosition++
        }
    }

    // Fill the remaining elements with zeroes
    while (insertPosition < arr.length) {
        arr[insertPosition] = 0;
        insertPosition++
    }
    
    console.log(arr);
}

// sumZero2([0, 1, 0, 3, 12]);//[1,3,12,0,0]

//Brute force 

function sumZero3(arr) {
    let temp = [];

    //Extract all the non zero elements to temp

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] != 0) {
            temp.push(arr[i]);
        
        }
        console.log(temp)
    }

    let nz = temp.length; //length of non zero

    //copy elements from temp & fill them in first posotions in the array
    for(let i=0; i< nz; i++) {
        arr[i] = temp[i];
    }
    console.log(arr)

    //Fill the zeroes in remaining position
    for(let i = nz; i< arr.length; i++) {
        arr[i] = 0;
    }
    console.log(arr)
}
sumZero3([0, 1, 0, 3, 12]);//[1,3,12,0,0]
