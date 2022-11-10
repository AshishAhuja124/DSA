function addNumber(n){
    let total = 0;
    for(i=0; i<=n; i++) {
        total += i;
    }
    return total;
}
console.log(addNumber(3));

function addNum(n) {
    return n * (n+1) / 2;
}
console.log(addNum(3));

// const today = new Date();
// const quarter = Math.floor((today.getMonth() / 3));
// console.log(today);
// const startFullQuarter = new Date(today.getFullYear(), quarter * 3, 1);
// console.log(startFullQuarter);

list = [1,2,3,4,5,6,7,8,9,10,11,12];



//   if (n == 1) {
//     list.slice(6, 9);
//   } else if (n == 2) {
//     list.slice(3, 9);
//   } else {
//     list.slice(0, 9);
//   }
 

//   var today = new Date();
//   var quarter = Math.floor((today.getMonth() + 3) / 3);
//   var prior = quarter - 1;
//  console.log(list.slice(prior,3)) 
//  console.log(quarter)  