RenderTalkLinks();

$('#feedbackSubmit').click(function(){
   var feedback = $('#feedback').val();
   server.emit("feedback", feedback);
   appendFeedback("Me", feedback);
   $('#feedback').val("");
});