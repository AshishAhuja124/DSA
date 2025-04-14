//call apply and bind used for function burrowing

let name1 = {
    firstName: 'Ashish',
    lastName: 'Ahuja'
}

let name2 = {
    firstName: 'Virat',
    lastName: 'Kohli'
}

let printfullName = function(homeTown, country) {
    console.log(this.firstName + " " + this.lastName + " " + homeTown + "," + country);
}

printfullName.call(name2, 'Delhi', 'India')   //Virat Kohli Delhi,India
printfullName.apply(name1, ['Delhi', 'India']) //Ashish Ahuja Delhi,India

let bindPrintFullName = printfullName.bind(name1, 'Hyderabad', "India");
console.log(bindPrintFullName);  //Ashish Ahuja Hyderabad,India

bindPrintFullName();


// Bind is a method available on every JavaScript function.
// It is used to permanently set the value of this inside a function.

// Unlike call and apply, bind does not execute the function immediately.
// Instead, it returns a new function that we can call later with the correct this context.


// Method	What it does	                                        When it runs
// call()	Calls the function immediately, with a specific this	Immediately
// apply()	Same as call(), but arguments are passed as an array	Immediately
// bind()	Returns a new function with a specific this	Later,      when you want
