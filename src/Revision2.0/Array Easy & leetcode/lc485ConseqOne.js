 //We are using kadene' algo

function findConseqNumbers(nums) {
    let max = 0;
    let count = 0;

    for( let num of nums) {
        if(num === 1) {
            count += 1;
            max = Math.max(max, count);
        }
        else {
            count = 0;
        }

    }
    return max
}

console.log(findConseqNumbers([1, 1, 0, 1, 1, 1 ])) // 3