Conf_RealTimeFeedback:
=====================

Node js app for providing and monitoring real time feedback and rating for the talks in conferences.

DEV MACHINE SETUP:
==================

1.Install node js
2.Install mongodb
3.Clone the repo (Run 'git clone git@github.com:MShobana/Conf_RealTimeFeedback.git')
4.Run 'mongod'
5.Go to git folder
6.Run 'npm install'
7.Run 'node app.js'
8.Hit 'localhost:8000' in browser and the you should see the app running.

Mongo db structure:
===================

DB NAME : feedback
COLLECTION : talks
STRUCTURE :
 <id> - string
 <name> - string
 <feedbacks> - list of <feedback>
	<feedback> structure
		<name> - string
		<message> - string


Eg: db.talks.insert({id:"2",name:"Scala", feedbacks:[{name:"Shobana",message:"bad"},{name:"Sabeena",message:"bad"}]})
