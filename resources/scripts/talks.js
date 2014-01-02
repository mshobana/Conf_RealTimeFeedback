var RenderTalkLinks = function(){
  	var talksList = [{id : 1, name : "talk1"}, {id : 2, name : "talk2"}];
    AddTalks(talksList);
    // $.get("/alltalks", function(talks){
    // 	var talksList = jQuery.parseJSON(talks);
    // 	AddTalks(talksList);
    // });
}

var AddTalks = function(talks){ 
    $.each(talks, function(index, talk){
      $("#talks").append("<li><a class=\"talk\" id=" + talk.id + " href=\"#\">" + talk.name + "</a></li>");
    });
}

$(document).ready(function(){
	$('.talk').click(function(event){
		event.preventDefault();
		var talkId = event.currentTarget.id;
		$.get("/talks/" + talkId,function(talkJson){
			var talk = jQuery.parseJSON(talkJson);
			clearFeedbackWindow();
			populateFeedbackWindowWith(talk.feedback);
		});
	});
});