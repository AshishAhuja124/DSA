// Count unique elemets in the array. We can do it through multiple pointers and also frequency pattern

// function unique(arr) {
//     var counts = {}
//     for(var val of arr) {
//         counts[val] = 1+ (counts[val] ||0);
//     }
//     console.log(counts)

// }
// console.log(unique([-2,-1,1,0,1]))

// const arr = ["hi", "hello", "hi"];
// const countUnique = arr => {
//    const counts = {};
//    for (var val of arr) {
//       counts[val] = 1 + (counts[val] || 0);
//       console.log(counts)
//    };
//    return counts;
// };
// console.log(countUnique(arr));
    
var twoSum = function(nums, target) {
   for(let i=0; i<nums.length; i++) {
       for(j=i+1; j<nums.length; j++){
           if(nums[i] + nums[j] == target) {
               console.log(nums[i],nums[j])
               return [i,j]
           }
       }
   }
}
console.log(twoSum([2,7,11,15],9))