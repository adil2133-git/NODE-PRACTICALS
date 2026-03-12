const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true)
    const pathname = parsedUrl.pathname

    if(pathname === "/remove"){
        fs.unlink("deletefile.txt",(err) => {
            if(err){
                res.end("Error while deleting file")
            }else{
                res.end("File deleted successfully")
            }
        })

    }else{
        res.end("Route not found")
    }

})

server.listen(3000, () => {
    console.log("server running on port 3000")
})