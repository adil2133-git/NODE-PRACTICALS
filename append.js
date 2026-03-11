const fs = require("fs")

fs.appendFile("data.txt","\n Learning Node.js fs module","utf8", (err) => {
    if(err) throw err

    console.log("Appended Successfully")
})