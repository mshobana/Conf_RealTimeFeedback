RenderTalkLinks();

$('#feedbackSubmit').click(function(){
    var feedback = $('#feedback-text').val();
    server.emit("feedback", feedback);
    appendFeedback("Me", feedback);
    $('#feedback-text').val("");
});

$(document).ready(function() {
    $('#feedback-text').bind('keydown', function(event) {
        // track enter key
        var keycode = (event.keyCode || event.which || event.charCode);
        if (keycode == 13) { // keycode for enter key
            // force the 'Enter Key' to implicitly click the Enter button
            $('#feedbackSubmit').click();
            return false;	//event is handled
        } else  {
            return true;
        }
    });
    $('#feedback-text').focus();
});