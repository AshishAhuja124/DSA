// write a function called same, which accepts two arrays. the function should return true 
// if every value in the array has its corresponding value  squared in the second array. The frequency of values must be the same
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false


function frequecySame(arr1, arr2) {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // console.log(frequencyCounter1)

    for(let val2 of arr2) {
        frequencyCounter2[val2] = (frequencyCounter2[val2] || 0 ) + 1;

    }
    console.log(frequencyCounter2)

    for(let key in frequencyCounter1) {
        console.log(key);

        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if(frequencyCounter2[key **2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true

}

console.log(frequecySame([1, 2, 3], [4, 1, 9]));