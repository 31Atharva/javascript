// Immidiately Invoked Function Expression
// IIFE is a function that runs as soon as it is defined

(function chai(){
    console.log(`DB connected`)

})(); // IIFE

(function aurCode() {
    console.log(`DB connected two`)
})(); //semi colon is important in IIFE

(()=> { // IIFE with arrow function
    console.log(`DB connected two`)
})()

((name)=> { // IIFE with arrow function
    console.log(`DB connected two ${name}`)
})("atharva") // IIFE with arrow function