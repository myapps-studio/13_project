var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    
    if (request.method === 'GET' && request.url === '/hello') {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            fs.readFile('index.html', 'utf8', function(err, contents) {
                response.write(contents);
                response.end();
            });       
    } else {
           response.setHeader("Content-Type", "image/jpg");
           fs.readFile('blad.jpg', 'utf8', function(err, contents) {
                response.write(contents);
                response.end();
            });  
    }
});

server.listen(9000);
