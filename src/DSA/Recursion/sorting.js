//Sorting using recursion
//array = [2,3,1,4]
//[2,1,3,4] - 1
//[1,2,3,4] - final output
let i=0;
let j=1;
let myArray = [2,3,1,4];
let myList = [];

function isSorted(array) {
 for(let i=0; i<array.length; i++) {
    if(array[i] > array[i+1]) {
        return false
    }
 }return true;
}



function sorting(array) {

    if (isSorted(array)) {
        myList = array;
        return;
    }
    else if (array[i] < array[j]) {
        i++;
        j++;
        sorting(array)
    }
    else {
        [array[i], array[j]] = [array[j], array[i]];
        i = 0;
        j = 1;
        sorting(array)
    }
}
sorting(myArray);
console.log(myList);