var appendFeedback = function(name, feedback){
	feedback = feedback || '';
	feedback = feedback.replace('\n', '<br/>')
    $('#summary').html( $('#summary').html() + '<br>' + name + ' : ' + feedback );
    $('#summary').scrollTop( $('#summary')[0].scrollHeight );
}

var clearFeedbackWindow = function(){
	$('#summary').val("");
}

var populateFeedbackWindowWith = function(feedbackList){
	$.each(feedbackList, function(index,feedback){
		appendFeedback(feedback.name, feedback.message);
	});
}
