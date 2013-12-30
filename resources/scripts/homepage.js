var server = io.connect("http://localhost:8000");

server.on('connect', function(data){
   var userName = prompt("Enter your name please!", null);
   server.emit("join", userName);
});

server.on('feedback', function(name, feedback){
   appendFeedback(name, feedback);
});

var talksList = GetTalks();
AddTalks(talksList);

$('#feedbackSubmit').click(function(){
   var feedback = $('#feedback').val();
   server.emit("feedback", feedback);
   appendFeedback("Me", feedback);
   $('#feedback').val("");
});