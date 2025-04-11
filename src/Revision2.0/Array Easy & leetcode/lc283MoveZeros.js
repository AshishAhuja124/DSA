// move zeroes to end
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//brute force

function moveZeroes(arr) {
  // step 1: I would create a temp array to store the non zero elements
  //Extract all the non zero elements to temp
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
    console.log(temp);
  }

  //step 2 : copy the non zero elements to the array

  let nz = temp.length; //length of non zero
  for (let i = 0; i < nz; i++) {
    arr[i] = temp[i];
  }

  //step3: Fill the zeroes in remaining position
  for (let i = nz; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

// console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]

//time complexity: O(n) + O(n) = O(2n) = O(n)
//space complexity: O(n) for temp array

//Optimal solution using two pointers

function moveZerosOptimal(arr) {
  //find first zero

  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }

  //now if j == -1, then there are no zeroes in the array
  if (j == -1) return arr;

  //step 2: If the i is non zero then swap it with j and increment j
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}

console.log(moveZerosOptimal([0, 1, 0, 3, 12])); //[1,3,12,0,0]

//time complexity: O(n) + O(n) = O(2n) = O(n)
//space complexity: O(1) for swapping