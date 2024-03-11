var findMaxConsecutiveOnes = function(arr) {
    let count = 0;
    let max = 0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 1) {
            count += 1;
        }
        else {
            count = 0;
        }
        if(count > max) {
            max = count;
        }

    }
    // console.log(max)

    return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1 ]))