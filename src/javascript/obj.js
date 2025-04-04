const obj = {
    a: "one",
    b: "two",
    a: "three"
}

// console.log(obj)

const a = {};
const b = {key: "b"};
const c = {key: "c"};
//we are trying the convert obj and we try to convert to string it becomes object object
// a["[object object]"] = 123;
// a["[object object]"] = 456;
// console.log(a)
a[b] = 123;
a[c] = 456;

// console.log(a[b]);

//json.stringify and json.parse
//json.stringy is used to convert obj as string
const user = {
    name: 'ashish',
    age: '25'
}

const strObj =  JSON.stringify(user)
// console.log(strObj)

//Json.parse used to convert str to obj
// console.log(JSON.parse(strObj));


console.log([..."Ashish"]) //[ 'A', 's', 'h', 'i', 's', 'h' ]

const user1 = {name: "Ashish", age: 25};
const admin = { admin: true, ...user1};
// console.log(admin);

// destructure
let user12 = {
    name: "Ashish",
    age: '28',
    fullName: {
        first: 'Ashihs',
        last: 'Ahuja'
    }
}

const {name, age} = user12; //"Ashish 28"
const {fullName: {first}} = user12  //Ashihs


let x = { greeting: 'Hey'};
let y;

y = x; //referencing 
// console.log(y,'x')
x.greeting = "Hello";
// console.log(y.greeting); //hello


console.log({a:1} == {a:1}); //false
console.log({a:1} == {a:1}); //false

let person = {
    name: "Lydia"
}

const members = [person];
person = null;

console.log(members)  //[ { name: 'Lydia' } ]


let value = { num: 10};

let multiply = (x = {...value}) => {
    console.log(x.num *= 2)
}

multiply();  //20
multiply();  //20
multiply(value);  //20
multiply(value); //20 * 2 = 40
multiply(null) // error
multiply(undefined) // 80

// deepcopy(clone a obj) and shallow copy
let user30 = {
    name: 'Ashshshshsh',
    age: '28'
}

const objClone = Object.assign({}, user30)
objClone.name='aadkadakdakdd'
console.log(user30)
console.log(objClone)

const objCloneWithJson = JSON.parse(JSON.stringify(user30))

const destrute = {...user30}
//It wont affect the original objj
//{ name: 'Ashshshshsh', age: '28' }
// { name: 'aadkadakdakdd', age: '28' }