const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true)
    const pathname = parsedUrl.pathname
    const query = parsedUrl.query

    if(pathname === "/writefile"){
        const text = query.text

        fs.writeFile("newfile.txt", `${text}`, (err) => {
            if(err){
                res.end("error creating file")
            }else{
                res.end("File created successfully")
            }
        })
    }else{
        res.end("Route not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})