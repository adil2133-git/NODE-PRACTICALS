const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer((req,res) => {

    const parsedUrl = url.parse(req.url,true)
    const pathname = parsedUrl.pathname

    if(pathname === "/createfile"){
        fs.writeFile("browserfile.txt","File created from url",(err) => {
            if(err){
                res.end("Error while creating file")
            }else{
                res.end("File created successfully")
            }
        })
    }else{
        res.end("Route not found")
    }
})

server.listen(3000, () => {
    console.log("server running on port 3000")
})