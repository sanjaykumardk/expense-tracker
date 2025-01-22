// const http = require('http'); // http is an inbuild module(like library in c) in node js to import module we will using require() here we importing http module
// const calculate = require("./calculator")
// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type": "text/html"});
//     // res.end("<h1>Hello Beauty World</h1>");
//     res.end(`<h1>A=10 b=2</h1> 
//         <h1>Add: ${calculate.add(10,2)}</h1>
//         <h1>Sub: ${calculate.sub(10,2)}</h1>
//         <h1>Mul: ${calculate.mul(10,2)}</h1>
//         <h1>Div: ${calculate.div(10,2)}</h1>`);

// });

// server.listen(3000, () => {
//     console.log("Server running at http://127.0.0.1:3000/");
// })


// console.log(calculate.add(10,2));
// console.log(calculate.sub(10,2));
// console.log(calculate.mul(10,2));
// console.log(calculate.div(10,2));


// ////////////////////File Read/Write/Append
const fs = require('fs')
// fs.readFile('sample.txt',"utf8",(err,data) => {
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
// })
// fs.writeFile('sample.txt',"Hi I am try to Write",(err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("data write successfully")
// })
// fs.appendFile('sample.txt',"\nHi I am try to append",(err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("data append successfully")
// })

// For JSON File
// const newPerson = {
//     name:"John",
//     age:25,
//     city:"New York",
//     amount:1500
// }

//add New Person
// fs.readFile('sample.json',"utf8",(err,data) => {
//     if(err){
//         console.error(err)
//         return
//     }
//     const json=JSON.parse(data)
//     const newList=[...json,newPerson]
//     fs.writeFile('sample.json',JSON.stringify(newList),(err)=>{
//         if(err){
//             console.error(err)
//             return
//         }
//         console.log("Written Successfully");
//     })
// })


fs.readFile('sample.json',"utf8",(err,data) => {
    if(err){
        console.error(err)
        return
    }
    const json=JSON.parse(data)
    const newList=json.filter((data) => data.id !== 3)
    fs.writeFile('sample.json',JSON.stringify(newList),(err)=>{
        if(err){
            console.error(err)
            return
        }
        console.log("Deleted Successfully");
    })
})
