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