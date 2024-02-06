//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;
    for (let i = 0; i < s.length; i++) {

        let curr = s[i];
        
        let next = s[i + 1];
        if (romanValues[curr] < romanValues[next]) {
            total -= romanValues[curr]
        } else {
            total += romanValues[curr]
        }
    }
    return total;
};
const str = "III"; // Example Roman numeral
console.log(romanToInt(str));

