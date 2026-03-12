const http = require("http")

const users = [
    {"id" : 1, "name" : "Aadiyy"},
    {"id" : 2, "name" : "Zayaa"},
    {"id" : 3, "name" : "Sarji"},
]

const server = http.createServer((req,res) => {
    if(req.method === "GET" && req.url.startsWith("/users/")){
        const id = parseInt(req.url.split("/")[2])
        const user = users.find(u => u.id === id)

        if(user){
            res.write(JSON.stringify(user))
            res.end()
        }else{
            res.statusCode = 404
            res.end("User not found")
        }
    }
    else if(req.method === "GET" && req.url === "/users"){
        res.write(JSON.stringify(users))
        res.end()
    }
    else{
        res.statusCode = 404
        res.end("Route not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})