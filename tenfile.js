const fs = require("fs")

for(let i=1;i<=10;i++){
    fs.writeFile(`file${i}.txt`, `This is file ${i}`, (err) => {
        if(err) throw err

    })
}
    console.log("10 files created")
