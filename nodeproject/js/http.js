const http = require('http');
const server = http.createServer((req,res) =>{
    res.writeHead(404,{'Content-type':'text/plain'});
    res.end('Hello, NOde JS');
});

const port = 3000;
server.listen(port,() =>{
    console.log(`Sever listening on port ${port}`);
}
)