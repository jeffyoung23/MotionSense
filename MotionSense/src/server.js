var http = require('http'),
url = require('url'),
path = require('path'),
fs = require('fs'),
io = require('../lib/socket.io'),
sys = require('sys');

//Custom model module
var user = require('./Models/User');

//Require the mongoose driver for MongoDB
//http://github.com/LearnBoost/mongoose API for mongoose
require.paths.unshift('../drivers/mongoose');
var mongoose = require('mongoose').Mongoose;

//Connect to the database, the string after the slash is the db
var db = mongoose.connect('mongodb://localhost/motionsensetest');

//Create a model - analogous to collection - model.(name, then definition)
mongoose.model('User_Model', user.user_definition);

//grab the model from the database
var User_Model = db.model('User_Model');

//Create a new instance of the model
var u = new User_Model();

//set values in the model
u.first = 'Jimbo';
u.last = 'Fisher';
u.age = 54;

//save, fires the callback
u.save(function(){
    sys.puts('Saved!');
});

//create a node server
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

//socket listen
var socket = io.listen(server);

//Socket events
socket.on('connection', function(client){
  client.on('message', function(data){console.log(data[0]);});
  client.on('disconnect', function(){socket.broadcast('byyyyy');})
});
