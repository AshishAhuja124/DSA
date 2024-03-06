function countUnique(arr) {
    const unique = new Set(arr) ;
    
    return {
        unique: [...unique],
        count: unique.size
    }
}

const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 4];
const { unique, count } = countUnique(arrayWithDuplicates);

console.log(count, unique);

//Using two pointers approach

//let i = 0; j = 1
//if arr[i] != arr[j] ..
//i++
// arr[i] = arr[j]

const uniqueC = function(arr) {
    let i = 0;
    for(let j = 1; j< arr.length; j++) {
        if(arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
            console.log(arr,'arr')
        }
    }
    return i + 1;
    
}
console.log(uniqueC([1,1,2,3,4,5,5,6,7]),'Unique count')
