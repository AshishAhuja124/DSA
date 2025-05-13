let arr = [0,0,1,1,1,2,2,4,4,5,6,7,8,8,9]

function nonRepeat(arr) {
    let count = {}

    for(let item of arr) {
        count[item] = (count[item] || 0) + 1;
        console.log(count)
    }
    for(let char of arr) {
        if(count[char] === 1) {
            return char
        }
    }
}

console.log(nonRepeat(arr)) //5 it is the firsr non repeating char