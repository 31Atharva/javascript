//singleton 

// object literal

const mySym = Symbol("Key1")
const JsUser = {
    name: "Atharva",
    age: 20,
    [mySym]: "Key1", //declare symbol
    isStudent: true,
    hobbies: ["coding", "reading"],
    address: {
        city: "Pune",
        state: "Maharashtra"
    },
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(JsUser.name) // access object property
console.log(JsUser["name"]) // access object property
console.log(JsUser[mySym]) // access symbol property
console.log(typeof([mySym])) // check type of symbol

JsUser.name = "Atharva" // update object property
console.log(JsUser.name) // access object property

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

Object.freeze(JsUser); // freeze object after adding methods

console.log(JsUser.greeting()); // access object property
console.log(JsUser.greetingTwo()); // access object property