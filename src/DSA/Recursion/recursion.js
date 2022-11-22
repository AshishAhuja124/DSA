//If a function calls itself - REcursion
// If a function calls itself , it should have an endpoint
let counter = 1;
function demo(num) {  
    if (counter > num) {
        return
    }
    console.log('This is a recursive example' + counter);
    counter++;
    demo(num)  // Recursive function
}

demo(10); //Function calling

function countDown(nums) {
    if(nums <=0) {
        console.log("we are done");
        return
    }
    console.log(nums);
    nums--
    countDown(nums); // Recusrive function
}
countDown(3);

//flow
//print 3
//num-- = 2
//countDown(2)
//print2
//num-- = 1
//coundDonw(1)
//print1
//num-- = 0
//CountDonw(0)
//Print all done