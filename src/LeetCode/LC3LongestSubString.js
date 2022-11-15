//Longest substring without repeating characters - Leetcode 3 Medium

//inpput : abcabcbb
//output : 3
//Explanation: The answer is "abc", with the length of 3.

//We can follow sliding window pattern for this kind of problem
//let end = 0;
//let start = 0;
//let maxLength = 0;

//working
//Final string - abcabcbb - length (7)

// //abcabcbb
// start : 0
// end: 0

// //After entering unique values:
// // abcabcbb
// start: 0
// end: 2
// max: 3

// //after we get reapeted character a
// // bcabcbb
// start: 1
// end: 3
// max: 3

// //cabcbb
// start: 2
// end: 4
// max: 3

// //abcbb
// start: 3
// end: 5
// max: 3

// //abcb
// start: 4
// end: 6
// max: 3

// //abc
// start: 5
// end: 7
// max: 3


function lenghtOfLongestSubString(str) {
    let end = 0;
    let start = 0;
    let maxLength = 0;
    if (!str) {
        return 0;
    }
    //Lets define a set to store unique characters

    let uniqueCharacters = new Set();

    while (end < str.length) {
        if (!uniqueCharacters.has(str[end])) {
            uniqueCharacters.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
            console.log(maxLength, uniqueCharacters);
        } else {
            uniqueCharacters.delete(str[start]);
            start++
        }
    }
    return maxLength;
}


console.log(lenghtOfLongestSubString('abcabcbb'));