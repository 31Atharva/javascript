function sayMyName(name){
    console.log('A'),
    console.log('T'),
    console.log('H'),
    console.log('A'),
    console.log('R'),
    console.log('V'),
    console.log('A')
}

//sayMyName()

// function add(a, b){
//     console.log(a + b);
// }

// add(2, 3)
// add(5," 10")
// add(5,'a')

// function add(a, b){
//     let result = a + b;
//     return result;
// }

// const result = add(2,4)
// console.log(result)

// function add(a, b){
//     return (a+b)
// }

//const result = add(2,4)
//console.log(result)

function loginUserMessage(userName){
    if(userName === undefined){
        console.log( 'pleasee provide a username');
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage())