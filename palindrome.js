const http = require("http")

const url = require("url")

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const pathname = parsedUrl.pathname
    const query = parsedUrl.query

    if (pathname === "/palindrome") {
        const str = query.str

        if (!str) {
            res.writeHead(400,{"content-type":"text/plain"})
            res.end("Please provide a string")
            return;
        }

        let cleanstr = str.toLowerCase().replace(/\s/g,"")

        let reversed = ""
        for (let i = cleanstr.length - 1; i >= 0; i--) {
            reversed += cleanstr[i]
        }

        res.writeHead(200,{"content-type":"text/plain"})

        if (cleanstr === reversed) {
            res.end(`${cleanstr} is palindrome`)
        } else {
            res.end(`${cleanstr} is not a palindrome`)
        }
    } else {
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("route not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})