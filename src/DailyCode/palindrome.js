function isPalindrome(str) {
    if(str.length < 0) return false;

    return str.toString().split('').reverse().join('') === str.toString();
}

console.log(isPalindrome('madam'))

//using two pointer 

function isPalin(str) {
    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if(str[left] != str[right]) return false;
        
        left++
        right --;
    }
    return true;
}

console.log(isPalin('madaam'))
