var mongodb = require('mongodb').MongoClient;

exports.renderAllTalks = function(response){
	mongodb.connect('mongodb://localhost:27017/feedback', function(err, db){
		if(err){
			console.log(err);
			response.send(404);
		}
		console.log("Connected to Feedback db...");

		//TODO : Avoid The usage of toArray function
		db.collection('talks').find().toArray(function(err, allTalks){
			if(err){
				console.log(err);
				response.send(404);
			}

			if(allTalks!=null && allTalks.length > 0){
				response.json(JSON.stringify(allTalks));
			}
		});
	})
};

exports.getTalk = function(id, response){
	mongodb.connect('mongodb://localhost:27017/feedback', function(err, db) {
		if(err){
				console.log("Error in Mongodb connection : " + err);
			response.send(404);
		}

		console.log("Connected to Feedback db...");

		db.collection('talks').findOne({"id" : id}, function(err, talk){
			if(err){
				console.log("Error in Mongodb Collection talks : " + err);
				response.send(404);
			}

			console.log("Searching talk with the id : " + id);

			if(talk!=null){
				response.json(JSON.stringify(talk));
			}
			else{
				response.send(404);
			}
		});
   });
}