const fs = require("fs")

fs.rename("renamed.txt", "data.txt", (err) => {
    if(err) throw err

    console.log("Renamed Successfully")
})