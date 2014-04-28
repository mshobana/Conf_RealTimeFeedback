RenderTalkLinks();

$('#feedbackSubmit').click(function(){
   var feedback = $('#feedback-text').val();
   server.emit("feedback", feedback);
   appendFeedback("Me", feedback);
   $('#feedback-text').val("");
});