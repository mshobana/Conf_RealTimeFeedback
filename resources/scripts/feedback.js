var appendFeedback = function(name, feedback){
    $('#summary').val($('#summary').val() + "\n" + name + " : " + feedback);
}

var clearFeedbackWindow = function(){
	$('#summary').val("");
}

var populateFeedbackWindowWith = function(feedbackList){
	$.each(feedbackList, function(index,feedback){
		appendFeedback(feedback.name, feedback.message);
	});
}