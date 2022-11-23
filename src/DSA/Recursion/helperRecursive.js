//Find odd numbers in the array using recusrion

//array = [1,2,3,4,5,6,7,8,9,10]
//number %2 !== 0
function findOdd(array) {
    let result = [] // initialise empty array
    function helperRecursive(inputArray) {
        if(inputArray.length === 0){
            return
        }
        if(inputArray[0] % 2 !== 0) {
            result.push(inputArray[0]);
            console.log(result); 
        }
        helperRecursive(inputArray.slice(1))
    }
    helperRecursive(array);
    return result
}

console.log(findOdd([1,2,3,4,5,6,7,8,9,10]));