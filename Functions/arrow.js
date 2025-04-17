const username ={
    name: "atharva",
    age: 20,
    website: "youtube",
    welcomeMessage : function(){
        console.log(`${this.name} is ${this.age} years old and his website is ${this.website}`)
    }
}

username.welcomeMessage()
username.name = "Ajit"
username.welcomeMessage()

console.log(this)

const chai = function (){
    let username = "atharva"
    console.log(this.username)
}

chai()

console.log("------------------------------------------------------")
const arrow = () =>{
    let username = "atharva"
    console.log(this.username)
}
arrow()

const addTwo = (num1,num2)=>{
    return num1 + num2
}
console.log(addTwo(2,3))

const subTwo = (a,b) =>  a - b
console.log(subTwo(7,8))

const name = ()=>({username: "atharva"})
console.log(name())