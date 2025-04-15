var singleNumber = function (nums) {
  let counter = {};

  for (let val of nums) {
    counter[val] = (counter[val] || 0) + 1;
  }

  console.log("Frequency map:", counter);

  for (let val in counter) {
    if (counter[val] === 1) {
      return Number(val); // convert back to number
    }
  }
};

console.log(singleNumber([2, 2, 1])); // Output: 1

//using xor

function singleNumberXORR(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  console.log("XOR result:", xor);
  return xor;
}

console.log(singleNumberXORR([2, 2, 1])); // Output: 1