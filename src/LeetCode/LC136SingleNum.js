//Uisng frequency pattern better solution
var singleNumber = function(nums) {
    let counter = {};

    for(let val of nums) {
        counter[val] = ((counter[val] || 0) + 1)
    }
    console.log(counter);
    for(let key in counter) {
        if(counter[key] === 1) {
            return parseInt(key);
        }
        // console.log(counter[key])
    }
};

console.log(singleNumber([4,1,2,1,2]))

//Using XOR optimal solution

var singleNumber2 = function(nums) {
    let xorr = 0;
    for(let i = 0; i< nums.length; i++) {
        xorr = xorr ^ nums[i];
    }
    return xorr;
}
console.log(singleNumber2([4,1,2,1,2]))
