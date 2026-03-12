const http = require("http")
const { json } = require("stream/consumers")

const users = [
    {
        "id" : 1,
        "name" : "Adil"
    },
    {
        "id" : 2,
        "name" : "Zayaa"
    }
]

const server = http.createServer((req,res) => {
    if(req.url === "/users" && req.method === "GET"){
        res.write(JSON.stringify(users))
        res.end()
    }

    else if(req.url === "/users" && req.method === "POST"){
        res.end("User Created")
    }

    else{
        res.statusCode = 404
        res.end("Route not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})