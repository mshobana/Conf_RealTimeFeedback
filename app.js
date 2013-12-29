var express = require('express');
var http = require('http');
var socket = require('socket.io');
var ejs = require('ejs');

var app = express();

app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/resources/views');
app.set("view options", { layout: false });

app.configure(function(){
	app.use(express.logger());
	app.use('/static', express.static(__dirname + "/resources"))
});

var server = http.createServer(app);
var io = socket.listen(server);

io.sockets.on('connection', function(client){
	console.log("client connected");
	// client.on('join', function(name){
	// 	client.set('name', name);
	// })
});

app.get('/', function(request, response){
 	response.render('index.html');
	console.log("Entered home page");
  	response.end();

});
server.listen(8000);