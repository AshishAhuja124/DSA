// abcabcbb
// output : start: 5, end: 7 max len = 3
//we can follow sliding window protocol for this

function longestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;

    let uniqueCharacters = new Set();

    while(end < s.length) {
        if(!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size)
        } else {
            uniqueCharacters.delete(s[start]);
            start++
        }
    }
    return maxLength;
}

console.log(longestSubstring('abcabcabcd'))