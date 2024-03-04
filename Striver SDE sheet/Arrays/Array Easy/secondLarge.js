const secondLarge = function(arr) {
    let max = arr[0];
    let secondMax = -Infinity;

    for(let num of arr) {
        if(num > max) {
            secondMax = max;
            max = num;
        } else if( num > secondMax && num != max) {
            secondMax = num
        }
    }
    return secondMax
}

const arr = [3, 2, 1, 5, 2];
console.log(secondLarge(arr)); 
