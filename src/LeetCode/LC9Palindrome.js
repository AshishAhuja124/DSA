function isPalindrome(string) {
    let left = 0;
    let newRevString = string.toString().toLowerCase()
    let right = newRevString.length - 1;
    while(left < right) {
        if(newRevString[left] !== newRevString[right]) return false;
        left ++
        right --
    }
    return true;
};
isPalindrome('121')

//Using built in js functions
// var isPalindrome = function(x) {
//     if (x < 0) return false;
    
//    return x.toString().split('').reverse().join('') === x.toString(); 
// };