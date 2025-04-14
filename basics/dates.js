let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof (myDate))

let myCreatedDate = new Date(2025, 14, 4, 5, 3) //moths strts from 0-11
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myNewDate = new Date("2025-4-14")
console.log(myNewDate.toDateString())
console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp / 1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)

console.log(newDate.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
}
))