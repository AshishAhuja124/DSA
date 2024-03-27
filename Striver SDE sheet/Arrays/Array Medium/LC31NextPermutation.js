var nextPermutation  = function(arr) {
    let n = arr.length;

    let ind = -1; //break point

    for(let i=n-2; i>=0; i--) {
        if(arr[i] < arr[i+1]) {
            ind = i;
            break;
        }
    }
    //If break point doesnt exist

    if(ind === -1) {
        //reverse the whole array
        arr.reverse();
        return arr;
    }

    //Step 2 find the next greater element and swap it with arr[ind]

    for(let i = n-1; i> ind; i--) {
        if(arr[i] > arr[ind]) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]] //swap arr[i], arr[ind]
            break;
        }
    }
    //step 3 reverse the right half part of array

    arr.splice(ind + 1,n - ind - 1, ...arr.slice(ind + 1).reverse())
    return arr;
}

console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));