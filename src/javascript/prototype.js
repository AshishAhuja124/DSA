let obj1 = {
    name: "John",
    age: 30,
    city: "New York",
    getIntro: function() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

let obj2 = {
    name: "Ashish"
}

obj2.__proto__ = obj1; // Inherit properties from obj1
console.log(obj2.getIntro()); // My name is Ashish and I am 30 years old.
console.log(obj2.city); // New York
console.log(obj2.name) //Ashish
console.log(obj2.age) //30
console.log(obj1.getIntro()); // My name is John and I am 30 years old.
console.log(obj2.city); // New York