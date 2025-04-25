function countZeroes(start, end) {
    let count = 1;

    let countFrequency = {}
    for(let i = start; i <= end; i++) {
        // const zeroCount = i.toString().split('').filter((x) => x === '0');
        // console.log(zeroCount.length)
        // count += zeroCount;

        // console.log(count.length )

        for(i = start; i< end ; i++) {
            countFrequency[end] = (countFrequency[end] || 0) + 1
        }
    }
    return count;
}



console.log(countZeroes(1, 110))
//1, 10, 2 0