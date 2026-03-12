const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("Home Page")
    }else if(req.url === "/about"){
        res.write("About Page")
    }else if(req.url === "/contact"){
        res.write("Contact Page")
    }
    res.end()
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})