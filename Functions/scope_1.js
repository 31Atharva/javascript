// dont use var
// use let and const
// let and const are block scoped
// var is function scoped
let a = 10
const b = 20
var c = 30
d = 40

if (true){
    let a = 100
    const b = 200
    var c = 300
    d = 400
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//let and const are block scoped

let x = 10
const y = 20

if (true){
    let x = 100
    const y = 200
    console.log('Inside if block',x)
}
console.log(x)
console.log(y)

function one(){
    const username = "atharva"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

if (true){
    const username = "atharva"
    if (username === "atharva"){
        const website = " youtube"
        console.log(username + website)
    }
}

function addone(number){ // function declaration , we can access this function before it is declared
    // hoisting
    // function declaration is hoisted
    return number + 1
}

addone(10)

const addTwo = function(number){ // another method of defining a function but, it is not hoisted 
    return number + 2
}
addTwo(10) 