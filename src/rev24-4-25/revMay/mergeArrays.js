let arr1 = [1,3,5,7]
let arr2 = [2,4,5,6,7]

let merged = [...arr1, ...arr2]
merged.sort((a,b) => a - b);
console.log(merged)

let uniqueArr  = [...new Set(merged)];
console.log(uniqueArr)