let arr = [2,5,7,9] 
let target = 9

//brute approach
const twoSum = (arr, target) => {
    for(let i = 0; i<arr.length; i++) {
        for(let j = 1; j<arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(twoSum([2,5,7,9], target))

//two pointers approach o(n)

const twoSumOptimised = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === target) {
            return [arr[left], arr[right]]
        }else if(sum > 0) {
            right --
        } else {
            left ++
        }
    }

}
console.log(twoSumOptimised([2,5,7,9], target))