const myObject = {
    js : "JavaScript",
    py : "Python",
    rb : "Ruby",
    cpp : "C++",
}

// for in

for (const key in myObject){
    //console.log(myObject[key]);
    //console.log(key, '=>', myObject[key]);
}

const programming = ['JavaScript', 'Python', 'Ruby', 'C++'];

for (const index in programming){
    console.log(programming[index]);
    console.log(index, '=>', programming[index]);
}