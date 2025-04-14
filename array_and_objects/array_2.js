const marval_heros = ["Thor", "Hulk", "Ironman", "Captain America"];
const dc_heros = ["Superman", "Batman", "Flash"]

marval_heros.push(dc_heros) // add dc_heros to marval_heros
console.log(marval_heros)
console.log(marval_heros[4][1]) // access dc_heros
console.log(marval_heros[4]) // access dc_heros

const allHeros = marval_heros.concat(dc_heros) // concatenate dc_heros to marval_heros
console.log(allHeros) // marval_heros is not modified

const all_new_heros = [...marval_heros, ...dc_heros] // spread operator
console.log(all_new_heros) // marval_heros is not modified

const another_array = [1,2,3,[4,5,6,[7,8,9]]]
const real_another_array = another_array.flat(2) // flatten the array
console.log(real_another_array) // flatten the array

console.log(Array.isArray("Atharva")) // check if it is an array
console.log(Array.from("Atharva")) // convert string to array
console.log(Array.isArray(marval_heros)) // check if it is an array

console.log(Array.from({name: "Atharva", age: 20})) // convert object to array
console.log(Array.from({length: 5})) // create array of length 5

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // create array of scores