var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9));

//Time complexity o(n2)

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

//Refactor the code using multiple pointers
//[-5,-4, -2, 1, 0, 1, 2, 3, 4, 6]) = [-4,4]

var findSumPair = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        }
        else if(sum > 0) {
            right--;
        }
        else {
            left ++;
        }
    }
}


const res = findSumPair([-5,-4, -2, 1, 0, 1, 2, 3, 4, 6]);
console.log(res);

//Using multiple pointers
var twoSum = function(nums, target) {
    // Create a copy of the original array and sort it
    const sortedNums = [...nums].sort((a, b) => a - b);

    let left = 0;
    let right = sortedNums.length - 1;

    while(left < right) {
        let sum = sortedNums[left] + sortedNums[right];
        if(sum === target) {
            // Find the indices in the original array
           
            return [sortedNums[left], sortedNums[right]];
        } else if(sum > target) {
            right--;
        } else {
            left++;
        }
    }

    // If no pair is found, return an indicator (e.g., an empty array or null)
    return [];
};

const re = twoSum([3, 2, 4], 6);
console.log(re);
