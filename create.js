// const fs = require("fs")

// fs.writeFile("data.txt", "Hello from node.js", (err) => {
//     if (err) throw err
// })

// console.log("file created")


const fs = require("fs")

fs.writeFile("daaata.txt","Node.js File system practice", (err) => {
    if(err) throw err

    console.log("File created successfully")
})
