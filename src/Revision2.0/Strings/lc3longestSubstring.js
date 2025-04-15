//we can use sliding window

function longestSubstring(str) {
    let start = 0;
    let end = 0;
    let maxLength = 0;

    if(!str) return 0;

    let uniqueCharacters = new Set();

    while( end < str.length) {
        if(!uniqueCharacters.has(str[end])) {
            uniqueCharacters.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);

        }
        else {
            uniqueCharacters.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}

console.log(longestSubstring('abcabcbb'));
