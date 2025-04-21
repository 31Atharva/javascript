const myObject = {
    js : "JavaScript",
    py : "Python",
    rb : "Ruby",
    cpp : "C++",
}

// for in

for (const key in myObject){
    console.log(myObject[key]);
    console.log(key, '=>', myObject[key]);
}