//const http = require('http');  Esto es para "type": "commonjs"
import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); //puedo poner text/plain
    res.end('<h1>Hola, mundo!</h1>'); //acá con text/plain seria res.end('Hola, mundo!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});