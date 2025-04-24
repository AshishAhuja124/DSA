// const check = isAnagram('hello', 'lohel');

//use frequency pattern o(n)
const isAnagram = (str1, str2) => {
    let counter = {};

    if(str1.length !== str2.length) return false

    for(let letter of str1) {
        counter[letter] = (counter[letter] || 0 ) + 1;
        console.log(counter)
    }

    for(let item of str2) {
        if(!counter[item]) return false
        counter[item] -= 1
    }
    console.log(counter)

    return true;

}

console.log(isAnagram('hello', 'lohel'))