function searchAlgo(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let midIndex = Math.floor((min + max)/ 2);
        console.log(midIndex,'MidIndex', max,'max', min,'min');
        if(arr[midIndex] < num) {
            min = midIndex + 1;
        }
        else if (arr[midIndex] > num) {
            min = midIndex - 1;
        }
         else {
            return midIndex
         }
    }
}

console.log(searchAlgo([1,2,3,4,,5,6,7,8,9,10,11,12,13,14,15],7))