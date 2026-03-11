const fs = require("fs")

fs.mkdir("newfolder",{recursive: true}, (err) => {
    if(err) throw err

    console.log("Folder created successfully")
})