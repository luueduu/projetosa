const http = require('http');
const fs = require('fs');

fs.readFile(__dirname + "/index.html", function (err, html){

    if (err) {
        throw err;
    }
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'text/html' });
        
        res.end(html);

    });

    server.listen(8081, "127.0.0.1");
    console.log("Servidor rodando!");

});