const http = require("http")

const url = require("url")

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url,true)
    const pathname = parsedUrl.pathname
    const query = parsedUrl.query

    if(pathname === "/sum"){
        const a = Number(query.a)
        const b = Number(query.b)

        const sum = a+b

        res.writeHead(200,{"content-type":"text/plain"})
        res.end(sum.toString())
    }else{
        res.writeHead(400,{"content-type":"text/plain"})
        res.end("Routing not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})