const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true)
    const pathname = parsedUrl.pathname
    const query = parsedUrl.query

    if(pathname === "/appendfile"){
        const append = query.append

        fs.appendFile("appendfile.txt",`\n${append}`, (err) => {
            if(err){
                res.end("Error while appending")
            }else{
                res.end("data appended successfully")
            }
        })
    }else{
        res.end("Route not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})