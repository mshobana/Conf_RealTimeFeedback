var GetTalks = function(){
    var talksList = [{id : 1, name : "talk1"}, {id : 2, name : "talk2"}];
    return talksList;
}

var AddTalks = function(talks){ 
    $.each(talks, function(index, talk){
      $("#talks").append("<li><a href=\"/talks/" + talk.id + "\">" + talk.name + "</a></li>");
    });
}