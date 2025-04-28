//input abcabcbb
//output: 3

function lenghtOfLongestSubString(s) {
    if(!s) return 0;

    let end = 0;
    let start = 0;
    let maxLength = 0;

    let uniqueChar = new Set();

    while(end < s.length) {
        if(!uniqueChar.has(s[end])) {
            uniqueChar.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChar.size);
        } else {
            uniqueChar.delete(s[start]);
            start++
        }
    }
    return maxLength;
}

console.log(lenghtOfLongestSubString('abcabcbb')) // 3 start: 5 end : 7 maxlength: 3