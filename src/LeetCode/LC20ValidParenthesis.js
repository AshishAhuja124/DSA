// 20. Valid Parentheses
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = function (s) {
    let stack = [];

    for (let val of s) {
        let top = stack[stack.length - 1];

        if (['(', '{', '['].includes(val)) {
            stack.push(val);
            console.log(val);
        } else if (val == ')' && top == '(') {
            stack.pop();
        } else if (val === '}' && top === '{') {
            stack.pop();
        }
        else if (val === ']' && top === '[') {
            stack.pop();
        } else {
            return false
        }
    }
    return stack.length === 0

}

console.log(isValid('()[]{}'))