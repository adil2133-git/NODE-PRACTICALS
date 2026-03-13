const fs = require("fs")

fs.writeFile("adil.txt","i am adil",(err) => {
    if(err) throw err

    console.log("file created")
})