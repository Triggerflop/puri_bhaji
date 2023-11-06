const fs = require('fs'); 
const path = require('path'); 
const dirpath = path.join(__dirname, 'curd'); 
const filepath = `${dirpath}/sample.txt`; 
fs.writeFileSync(filepath, 'This is sample text file created') 
fs.readFile(filepath, 'utf-8', (err, item) => { console.log(item) }) 
fs.appendFile(filepath, "To read and append something on these files",(err) => { if(!err) console.log("sample.txt File is updated")}); 
fs.rename(filepath, `${dirpath}/example.txt`,(err) =>  
{if(!err) 
console.log("filename is updated")}); 
fs.unlinkSync(`${dirpath}/sample.txt`); 
