const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

// Union using spread + Set
const union = [...new Set([...arr1, ...arr2])];

console.log(union);
// Output: [1, 2, 3, 4, 5]




const intersection = [...new Set(arr1)].filter(item => arr2.includes(item));

console.log(intersection);
// Output: [3, 4]
