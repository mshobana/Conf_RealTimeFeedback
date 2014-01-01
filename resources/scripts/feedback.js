var appendFeedback = function(name, feedback){
    $('#summary').val($('#summary').val() + "\n" + name + " : " + feedback);
}

var clearFeedbackWindow = function(){
	$('#summary').val("");
}

var populateFeedbackWindowWith = function(feedbackList){
	for (var feedback in feedbackList){
		appendFeedback(feedback.name, feedback.message);
	}
}