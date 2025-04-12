"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Atharva")


let name = "atharva"
let age = 18
//let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

/****************************** Summary of Data Types ******************************/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "atharva",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//****************************** Two types of Memories ******************************// 

// Stack Memory
//  - primitive data types
//  - copy of data types
//  - fixed size
//  - stored in stack memory
//  - faster access
//  - stored in LIFO order
//  - stored in contiguous memory locations

// Heap Memory
//  - non-primitive data types
//  - reference data types
//  - dynamic size
//  - stored in heap memory
//  - slower access
//  - stored in non-contiguous memory locations
//  - stored in random order

let myName = "atharva";
let anotherName = myName;
anotherName = "IronMan";

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "atharva@gmail.com",
    upiId : "atharva@upi",
}

let userTwo = userOne;

userTwo.email = "atharvadumbre02@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);