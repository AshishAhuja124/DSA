//Brute force 

function sumZero3(arr) {
    let temp = [];

    //Extract all the non zero elements to temp

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] != 0) {
            temp.push(arr[i]);
        
        }
        console.log(temp)
    }

    let nz = temp.length; //length of non zero

    //copy elements from temp & fill them in first posotions in the array
    for(let i=0; i< nz; i++) {
        arr[i] = temp[i];
    }
    console.log(arr)

    //Fill the zeroes in remaining position
    for(let i = nz; i< arr.length; i++) {
        arr[i] = 0;
    }
    console.log(arr)
}
// sumZero3([0, 1, 0, 3, 12]);//[1,3,12,0,0]

//Optimal solution using two pointers

function moveZeros(n, a) {
    let j = -1;
    
    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }
    
    // No non-zero elements
    if (j === -1) return a;
    
    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]];
            j++;
        }
    }    
    return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans);
