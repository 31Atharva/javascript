const tinderUser = new Object();

tinderUser.ID = 1
tinderUser.name = "Atharva"
tinderUser.age = 20
tinderUser.isLoggedIn = true

console.log(tinderUser); // empty object

const regularUser = {
    email : "atharvadumbre02@gmail.com",
    fullname : {
        userFullName:{
        firstName : "Atharva",
        lastName : "Dumbre"
    }
}
}

console.log(regularUser.fullname.userFullName)

const obj1 = { 1:"a", 2:"b", 3:"c" }
const obj2 = { 4:"a", 5:"b", 6:"c" }

//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3); // { 1: 'a', 2: 'b', 3: 'c', 4: 'a', 5: 'b', 6: 'c' }

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const user = [
    {
        id : 1,
        name : "Atharva",
        age : 20,
    },
    {
        id : 2,
        name : "Sakshi",
        age : 20,
    },
    {
        id : 3,
        name : "Ajit",
        age : 20,
    },
    {
        id : 4,
        name : "Abhishek",
        age : 20,
    }
]

console.log(user[1].name)

console.log(Object.keys(tinderUser)) // [ 'ID', 'name', 'age', 'isLoggedIn' ]

const course = {
    name : "Javascript",
    price : 199,
    isPaid : true,
    courseDetails : {
        duration : 3,
        level : "beginner"
    }
}

const {name} = course
console.log(name) // Javascript