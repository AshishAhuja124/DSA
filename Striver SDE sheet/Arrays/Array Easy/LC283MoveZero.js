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
sumZero3([0, 1, 0, 3, 12]);//[1,3,12,0,0]
