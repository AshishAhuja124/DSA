//Checking sum zero
//[-5,-4,-3,-2,1,2,4,6,8]

var sumzero2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [i, j];
            }
        }
        console.log('No pair found')

    }
}

//Usinf for of loop
var sumZero = (arr) => {
    for (let num of arr) {
        for (let j = 1; j < arr.length; j++) {
            if (num + arr[j] === 0) {
                console.log(num, arr[j])
                return [num, arr[j]]
            }
        }
    }
}

console.log(sumZero([-3, -2, 1, 0, 1, 2, 3]));

//

//Time complexity o(n2);