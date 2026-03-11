const fs = require("fs")

fs.stat("data.txt", (err, stats) => {
    if(err) throw err

    console.log(stats)
})