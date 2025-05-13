//two sum arr = [2,5,7,9] target = 9

//brute force time complexity o(n2)
function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(twoSum([2,5,7,9], 9))

//using two pointers : it gives time complexity o(n)

function twoSumUsingPointer(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === target) {
            return [arr[left], arr[right]]
        } else if(sum > target) {
            right --
        } else {
            left ++
        }
    }

}

console.log(twoSumUsingPointer([2,5,7,9], 9))

