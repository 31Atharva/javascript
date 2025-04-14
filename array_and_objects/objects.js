//singleton 

// object literal

const JsUser = {
    name: "Atharva",
    age: 20,
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
