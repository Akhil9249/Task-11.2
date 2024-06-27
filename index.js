const fs = require("fs");

// Create
fs.writeFileSync("file.txt","This is sample")

fs.writeFile("file.txt","This is sample",(err)=>{
        if(err) throw err
})

// Read
const data = fs.readFileSync("file.txt", "utf-8")
console.log(data);

fs.readFile("file.txt","utf8",(err,data)=>{
        if(err) throw err
        console.log(data);
})

// Append
fs.appendFileSync("file.txt","This is sample append")

fs.appendFile('file.txt', 'This is sample append \n', (err) => {
        if (err) throw err;
        console.log('Data appended to file successfully.');
      });



