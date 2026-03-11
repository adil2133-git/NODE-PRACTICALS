const fs = require("fs")

fs.readdir("newfolder", (err, files) => {
    if(err) throw err

    files.forEach(file => {
        console.log(file)
    })
})