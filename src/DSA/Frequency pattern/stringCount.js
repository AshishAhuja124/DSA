// let instructor = {
//     fName: 'Ashish',
//     isInstructor: true,
//     favNum: [1,2,3,4]
// }

// console.log(Object.keys(instructor));
// console.log(Object.entries(instructor))
// console.log(instructor.fName)
// console.log(Object.hasOwnProperty("fName"))

//Write a function which takes in a string and returns counts of each character in the string

function charCount(string) {
    let count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}
console.log(charCount('Ashish'));

function charC(str) {
    let result = {};
    for(i=0; i< str.length; i++) {
        var char = str[i];
        if(result[char] > 0) {
            result[char]++;

        }
        else {
            result[char] = 1;
        };
    }
    return result;
}


function charC(str) {
    let result = {};
    for(var char of str) {
         char = char.toLowerCase();
        result[char] = ++result[char] || 1;
        // result[char] ? ++result[char] : 1
        console.log(result)
    }
    return result;
}

console.log(charC('hello'));
