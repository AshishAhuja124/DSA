let arr = [0,0,1,1,1,2,2,4,4,5,6,7,8,8,9]

let uniqueArr = [...new Set(arr)];
console.log(uniqueArr)


const removeDup = (arr) => {
    let i = 0;
    for(let j = 1; j< arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
            console.log(arr[i])
        }
    }
    return i+1;
}

console.log(removeDup(arr));