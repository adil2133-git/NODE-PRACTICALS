const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true)
    const pathname = parsedUrl.pathname
    
    if(pathname === "/readfile"){
        fs.readFile("readfile.txt", "utf8", (err,data) => {
            if(err){
                res.end("Cannot read file")
            }else{
                res.end(data)
            }
        })
    }else{
        res.end("Routing not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})