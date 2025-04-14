const myArr = [1, 2, 3, 4, 5, 'True'];
console.log(myArr)

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[3])

myArr.push(6) // add element at the end
console.log(myArr)
myArr.pop() // remove last element
console.log(myArr)

myArr.unshift(9) // add element at the beginning
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(2)) // check if element is present
console.log(myArr.indexOf(2)) // check index of element

const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)

// slice, splice

console.log("A",myArr)
const myn1 = myArr.slice(1,3) // slice from index 1 to 3

console.log(myn1)
console.log('B',myArr) // myArr is not modified

const myn2 = myArr.splice(1,3) // remove 3 elements from index 1
console.log('C',myArr)
console.log(myn2)
