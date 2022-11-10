// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// 'nana' , 'nana
//Using built in js functions
// function palindrome(str) {
//  if(str < 0) return false
//  let reverseString = str.toString().split('').reverse().join('');
//  console.log(reverseString);
//  return reverseString === str;
// }
// console.log(palindrome('nana'));

function palindrome2 (str) {
    let left = 0;
    let newRevString = str.toLowerCase();
    let right = newRevString.length - 1;
    while(left < right) {
        if(newRevString[left] !== newRevString[right]) return false
        left ++;
        right --
    }
    return true;
}

console.log(palindrome2('madam'))
