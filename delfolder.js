const fs = require("fs")

fs.rmdir("newfolder",{recursive: true}, (err) => {
    if(err) throw err

    console.log("Folder deleted successfully")
})