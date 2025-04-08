//string Anagram
// hello - lloeh

//first both string length is equal
//str1.length = str2.length

//Frequency pattern

function isAnagram (str1, str2) {
    let counter = {};

    if(str1.length !== str2.length) return false;

    for(let letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1
    }
    console.log(counter)

    for(let items of str2) {
        if(!counter[items]) return false;

        counter[items] -=1;   // if string in counter is matching we remove from counter
    }
    console.log(counter)

    return true;

}

console.log(isAnagram('anagram', 'nagaram'))
