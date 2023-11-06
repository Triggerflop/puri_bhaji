const http = require("http"); 
const fs = require("fs"); 
const PORT = 5000;
const server = http.createServer((req, res) => { res.writeHead(200, {"Content-Type": "text/html;",});
fs.readFile("index.html", (err, data) => { if (err) {res.write(404); res.write("Erro:in File");} 
else { res.write(data);}res.end();});});
server.listen(PORT,  (err) => { if (err) {console.log("Error Server");} 
else { console.log(`http://localhost:${PORT}`);}});