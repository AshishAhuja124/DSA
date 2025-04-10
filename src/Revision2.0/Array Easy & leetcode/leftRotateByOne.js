function leftRotateByOne(arr) {
    let temp = arr[0];
    let n = arr.length;

    for(let i = 1; i<n ; i++) {
        arr[i - 1] = arr[i];
    }
    arr[n - 1] = temp;
    return arr;
}

console.log(leftRotateByOne([1, 2, 3, 4, 5]));
// Output: [2, 3, 4, 5, 1]