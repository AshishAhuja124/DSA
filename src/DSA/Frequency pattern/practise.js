//Frequency pattern..............
//.............................................................
// write a function called same, which accepts two arrays. the function should return true 
// if every value in the array has its corresponding value  squared in the second array. The frequency of values must be the same
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false

//Frequency Counter Method   Complexity : O(n)
// function frequencyCounter(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for(let val1 of arr1) {
//     frequencyCounter1[val1] = (frequencyCounter1[val1] || 0) + 1;
//   }
//   for(let val2 of arr2) {
//     frequencyCounter2[val2] = (frequencyCounter2[val2] || 0) + 1;
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);

//   for(let key in frequencyCounter1) {
//     if(!(key ** 2 in frequencyCounter2)) {
//         return false
//     }
//     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//         return false
//     }
//   }
//   return true;
// }

// console.log(frequencyCounter([1,2,3,2,5], [9,1,4,4,11]))
//......................................................................
//Anagram

// validAnagram('aaz','zza') // false
// validAnagram('anagram','nagaram')// true
// 'hello', 'lleoh'
//logic {h: 1, e: 1, l: 2, o: 1} we would have this in our first set and we compare it with second and decrement value from 1st
// {h: 0, e: 0, l: 0, o: 0} then its anagram
// function anagram2(first, second ) { 
//     if(first.length !== second.length) return false;
//     let counter = {};
//     for(let letter of first) {
//         counter[letter] = (counter[letter] || 0) + 1
//         // counter[letter] ? counter[letter] +=1 : counter[letter]
//         console.log(counter[letter])
//     }
//     console.log(counter);

//     for(let items of second) {
//         if(!counter[items]) return false
//         counter[items] -=1;
//     }
//     return true
// }
// console.log(anagram2('anagram','nagaram'), 'is truue')

// String count 
//Write a function which takes in a string and returns counts of each character in the string
function charCount(str) {
 let count = {};
 for(let letter of str) {
    count[letter] = (count[letter] || 0 ) + 1;
    console.log(count[letter])
 }
 console.log(count);
}

console.log(charCount('Ashish'));
