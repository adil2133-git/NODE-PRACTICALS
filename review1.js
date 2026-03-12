const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true)
    const pathname = parsedUrl.pathname

    if(pathname === "/createfile"){
        fs.writeFile("onbrowser.txt","Hello Node",(err) => {
            if(err){
                res.end("Error creating File")
            }else{
                res.end("File created successfully")
            }
        })
    }else{
        res.end("routing is not found")
    }    
})

server.listen(3000, () => {
    console.log("Server is running in port 3000")
})