// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello Atharva"
for (const char of greeting) {
    if (char ===" "){
        continue
    }
    //console.log(`each character is ${char}`);
}

//Maps 

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("AU", "Australia")

//console.log(map);

// by using for of
for (const [key,value] of map){
    console.log(key, '=>', value);
}
