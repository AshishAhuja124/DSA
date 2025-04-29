// /Longest substring without repeating characters - Leetcode 3 Medium

// //inpput : abcabcbb
// //output : 3
// //Explanation: The answer is "abc", with the length of 3.

/// we can follow sliding window because we want part of the arrau

function longestSubstring(s) {
    let end = 0;
    let start = 0;
    let maxLength = 0

    if(!s.length) return 0

    let uniqueCharacters = new Set();
    while(end < s.length) {
        if(!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
        }
        else {
            uniqueCharacters.delete(s[start]);
            start++
        }
    }
    return maxLength;
}

console.log(longestSubstring('abcabcbb'))