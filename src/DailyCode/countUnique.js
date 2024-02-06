//Count unique numbers
// Count unique elemets in the array. We can do it through multiple pointers and also frequency pattern

//[1,1,2,3,4,5,5,6,6,7,8,8,9] --> output: 8

//conditions
//i = 0, j = 1
//arr[i]!= arr[j]
//1. i++
//2. arr[i] = arr[j]

function countUnique(arr) {
    if(arr.length > 0) {
        let i = 0;
        for(let j=1; j<arr.length; j++) {
            if(arr[i] != arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i+1;
    }
    else {
        throw new Error("arr is empty");
    }
}

const res = countUnique([1,1,2,3,4,5,5,6,6,7,8,8,9])
console.log(res);

//Time complexity --> o(n)


function uni(arr) {
    let uniqueArr = new Set(arr);
    console.log(uniqueArr);
    return uniqueArr.size
}

const res1 = uni([1,2,2,3,4,5,5,6,7,7,8])
console.log(res1,'res')