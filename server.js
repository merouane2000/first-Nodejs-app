const http = require("http")
const fs = require("fs")
const _ = require('lodash')
const { random } = require("lodash")

const server = http.createServer( (req,res)=>{ 
    const num = _.random(0,20)
    console.log(num)


    res.setHeader("Content-Type" , "text/html")
    let path ="./views/"
    switch(req.url){
        case "/" :
            path +="index.html";
            res.statusCode=200
            break;
            case "/about":
                path += "about.html";
                res.statusCode=200
                break;
            case "/about-us":
                res.statusCode=301
                res.setHeader("Location" , "/about")
                res.end()
                break;
                default:
                path += "404.html";
                res.statusCode=404
                break;
    }
    

    fs.readFile(path , (err,data)=>{
        if (err){
            console.log(err)
            res.end()
        } else{
           
            res.end(data)
        }
    })



    // res.write("<h1>hello nika</h1>")
    // res.write("<h2>hello nika</h2>")
    // res.end()
})
server.listen(3000 , "localhost" , ()=>{
    console.log("res from the port 3000")
})