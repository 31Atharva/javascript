const name = "atharva"
const age = 18

console.log(name + age + " is my name and age");

// String Interpolation
console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String('cricket-ipl')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(0));
console.log(gameName.indexOf('c'));
console.log(gameName.lastIndexOf('c'));

const newString = gameName.substring(0, 6)
console.log(newString)

console.log(gameName.slice(-7, 6));

const newStringOne = "      Atharva     ";
console.log(newStringOne);
console.log(newStringOne.trim());