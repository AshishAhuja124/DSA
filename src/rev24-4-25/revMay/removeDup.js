let arr = [0,0,1,1,1,2,2,4,4,5,6,7,8,8,9]

let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

//using two pointers

function uni(arr) {
    let i = 0;
    for(let j = 1; j<arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

// console.log(uni(arr))

//using frequency pattern

function uniFreq(arr) {
    let count = {};
    let uniqueArr = [];

    for(let item of arr) {
        count[item] = (count[item] || 0 ) + 1;
        // console.log(count)

        if(count[item] === 1) {
            uniqueArr.push(item)
        }
    }
    return uniqueArr
}

console.log(uniFreq(arr))

//unique elements

function uniqueElements(arr) {
    let count = {}
    for(let ele of arr) {
        count[ele] = (count[ele] || 0) + 1
    }
    return arr.filter(item => count[item] === 1)
}

console.log(uniqueElements(arr)) //[ 5, 6, 7, 9 ]