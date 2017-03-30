const
    http    = require('http'),
    fs      = require('fs'),
    banco   = require('./app/core/banco.js'),
    server  = http.createServer();

server.on('request', function(req, res) {

    var usuario,
        url     = req.url;

    if (url === '/') {

        res.writeHead(200);
        res.end(fs.readFileSync('view/index.html'))

    } else if (url === '/cadastro') {

        console.log(req);

        usuario = {
            nome: "Pedro Henrique",
            idade: 18,
            email: "pedro@gmail.com",
            senha: 123456789
        };
        if (req.method === 'POST') {
            banco._insert(usuario, res);
        }

    } else {

        res.writeHead(200);
        res.end('<h1>Error 404, Nada encontrado</h1>');

    }

});

server.listen(3030, 'localhost', function () {
  console.log('--- O servidor arrancou –--');
});

console.log('Servidor iniciado em localhost:3030. Ctrl+C para encerrar…');