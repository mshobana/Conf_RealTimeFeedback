var RenderTalkLinks = function(){
    $.get("/alltalks", function(talks){
		var talksList = jQuery.parseJSON(talks);
		AddTalks(talksList);
		bindTalkSelectEvent();
	});
}

var AddTalks = function(talks){ 
    $.each(talks, function(index, talk){
      $("#talks").append("<li><a class=\"talk\" id=" + talk.id + " href=\"#\">" + talk.name + "</a></li>");
    });
}

var bindTalkSelectEvent = function(){
	$('.talk').click(function(event){
		event.preventDefault();
		var talkId = event.currentTarget.id;
		$.get("/talks/" + talkId,function(talkJson){
			var talk = jQuery.parseJSON(talkJson);
			clearFeedbackWindow();
			populateFeedbackWindowWith(talk.feedbacks);
		});
	});
}