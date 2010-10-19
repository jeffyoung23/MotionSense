var http = require('http'),
url = require('url'),
path = require('path'),
fs = require('fs'),
io = require('../lib/socket.io'),
sys = require('sys');

server = http.createServer(function(request, response){
	var uri = url.parse(request.url).pathname;
	var filename = path.join(process.cwd(), uri);
	path.exists(filename, function(exists) {
		if (!exists) {
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end("Can''t find it...");
		}
		fs.readFile(filename, 'binary',function(err, file){
			if (err) {
				response.writeHead(500, {'Content-Type':'text/plain'});
				response.end(err + "\n");
				return;
			}
			response.writeHead(200);
			response.write(file, 'binary');
			response.end();

		});
	});
});

server.listen(8080);

var socket = io.listen(server);

socket.on('connection', function(client){
  client.on('message', function(data){console.log(data);});
  client.on('disconnect', function(){socket.broadcast('byyyyy');})
});
