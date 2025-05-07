let arr = [
    [1,2],
    [3,4],
    [5,6,[7,8]],
    [9,10]
]
const customFlat = (arr) => {
    let result = [];

    for(let item of arr) {
        if(Array.isArray(item)) {
            result.push(...customFlat(item))
        }
        else {
            result.push(item)
        }
    }
    return result;
}


console.log(customFlat(arr))