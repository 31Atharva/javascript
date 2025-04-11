// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is hat an equality check (==) and comparisions (>, <, >=, <=) are different.
// The equality check (==) converts both operands to the same type before comparing them.
// Comparisons (>, <, >=, <=) convert the null to 0 before comparing them.
// this is why null == 0 is true, but null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict equality) checks for both value and type

console.log("2" === 2);