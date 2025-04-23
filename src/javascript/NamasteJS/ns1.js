// var x = 7;

// function getName() {
//     console.log("hello world")
// }

// getName();


// var x = 5;
// a(); //10
// b(); //3
// console.log(x); //5

// function a() {
//     var x = 10;
//     console.log(x); // 10
// }

// function b() {
//     var x = 3;
//     console.log(x); //3
// }

//-------------------------------

// let a = 10;
// a = 100;
// console.log(a);

// const b = 1000;
// b = 8;

// console.log(b)

// var a  =100;
// {
//     var a = 10;
//     let b = 1;
//     const c = 20;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// console.log(a);
// let b = 2;
// console.log(b)

// let a = 100;
// function x() {
//     // let a = 10;
//     console.log(a);
// }
// x();
// console.log(a);

//--------------closures
// var a = 8;
// function x() {
//     let a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function x() {
//     let a = 7;
//     function y() {
//         console.log(a);  //100
//     }
//     a = 100;
//    return y;
// }
// var z = x();
// z();

// function x() {
//     let a = 7;
//     return function y() {
//         console.log(a);
//     }
// }
// var z = x();
// z();

//----------------------------------

// function x() {
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }
// x();

//prints value of i after 1 sec

// function x() {
//     for(var i =0; i<=5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// x();


// function x() {
//     for(let i = 1; i<5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// x();

// function x() {
//     for(var i = 1; i<5; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, x * 1000)
//         }
//         close(i)
//     }
// }
// x();


// function outer() {
//     var a = 10;
//     function inner() {
//         var a = 100;
//         console.log(a);
//     }
//     return inner;
// }
// var close = outer();
// close(); //100

// outer()(); //100

function counter() {
    var count = 0;
    return function incrementcounter() {
        count++;
        console.log(count)
    }
    
}

var c = counter();
c(); //1
c(); //2

var c2 = counter();
c2(); //1 forms a new counter again