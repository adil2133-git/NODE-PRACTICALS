const http = require("http")

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
    if(req.url === "/users"){
        res.write(JSON.stringify(users))
        res.end()
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})