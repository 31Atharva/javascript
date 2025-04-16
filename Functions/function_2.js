function calculateCartPrice(...num1){ // rest parameter
    return num1;
}
console.log(calculateCartPrice(100,200,300,400,500));

const user = {
    name: 'Atharva',
    age: 22,
}

function handelObject(anyobject){
    console.log(`user name is ${anyobject.name} and age is ${anyobject.age}`);
}

handelObject(user)

handelObject({
    name:'Ajit',
    age: 23
})

const myNewArray = [1,2,3,4,5,6,7,8,9,10]
function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myNewArray))