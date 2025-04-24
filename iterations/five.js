 const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

 coding.forEach(function(item){
    //console.log(item);
    //console.log(index
 })

 coding.forEach((item) => {
    //console.log(item);
    //console.log(index
 })

 function printMe(item){
    console.log(item);
 }
coding.forEach(printMe);

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
   {
       languageName: "javascript",
       languageFileName: "js"
   },
   {
       languageName: "java",
       languageFileName: "java"
   },
   {
       languageName: "python",
       languageFileName: "py"
   },
]

myCoding.forEach( (item) => {
   
   console.log(item.languageName);
} )