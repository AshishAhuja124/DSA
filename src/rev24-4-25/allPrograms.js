//LC53: maxsubArraySum

// /console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])) // 6

//we can make use of kadene' algo. if sum < 0 drop else take forward the sum

function maxSubArraySum(arr) {
    let max = -Infinity;

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if(sum > max) {
            max = sum
        } 
        if(sum < 0) {
            sum = 0
        }
    }
    return max
}


console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])) // 6

//--------------------------------------------------------------------------------------------
//longest substring without repeating characters

// /Longest substring without repeating characters - Leetcode 3 Medium

// //inpput : abcabcbb
// //output : 3
// //Explanation: The answer is "abc", with the length of 3.

/// we can follow sliding window because we want part of the array

function longestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;

    let uniqueChar = new Set();

    while(end < s.length) {
        if(!uniqueChar.has(s[end])) {
            uniqueChar.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChar.size)
        }else {
            uniqueChar.delete(s[start]);
            start++;
        }
    }
    return maxLength

}

console.log(longestSubstring('abcabcdbb'))
