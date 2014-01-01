var express = require('express');
var http = require('http');
var socket = require('socket.io');
var ejs = require('ejs');
var mongodb = require('mongodb').MongoClient;

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

	client.on('join', function(name){
	  client.set('name', name);
	  console.log(name + " has joined");
    })

    client.on('feedback', function(feedback){
		client.get('name', function(err, name){
			console.log(name + " said: " + feedback)
			client.broadcast.emit('feedback', name, feedback);
		})
    });
});

app.get('/', function(request, response){
 	response.render('index.html');
	console.log("Entered home page");
  	response.end();
});

app.get('/talks/:id', function(request, response){
	mongodb.connect('mongodb://localhost:27017/feedback', function(err, db) {
		if(err){
				console.log(err);
			response.send(404);
		}

		console.log("Connected to Feedback db...");

		db.collection('talks').find({"id" : request.params.id}).toArray(function(err, talks){
			if(err){
				console.log(err);
				response.send(404);
			}

			console.log("Searching talk with the id : " + request.params.id);

			if(talks!=null && talks.length > 0){
				response.json(JSON.stringify(talks[0]));
			}
			else{
				response.send(404);
			}
		});
   });
});

server.listen(8000);