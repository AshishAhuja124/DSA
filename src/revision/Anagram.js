//Anagram
// hello - lohel

//logic 
//length should be same for bith strings
//{h:1, e:1, l:2, o:1}
//We use frequency pattern for this
// function isAnagram(string1, string2) {
//     if(string1.length !== string2.length) return false;
//     let counter = {}

//     for(let letter of string1) {
//         counter[letter] = (counter[letter] || 0 ) + 1;
//         console.log(counter[letter]);
//     }
//     console.log(counter);

//     for(let items of string2) {
//         if(!counter[items]) return false;
//         counter[items] -= 1;
//     }
//     return true;
// }

// const check = isAnagram('hello', 'lohel');
// console.log(check);

//Time complexity o(n);


const validAn = function (str1, str2) {

    if(str1.length != str2.length) return false;

    let counter = {};

    for(let element of str1) {
        counter[element] = (counter[element] || 0) + 1;
    }
    console.log(counter)

    for(let item of str2) {
        if(!counter[item]) return false;
        counter[item] -= 1;
    }
    return true;
}
const check = validAn('hello', 'lohel');
console.log(check);

