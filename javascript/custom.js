$(document).ready(function(){
    var html = "";
	$(".window").each(function(index,node) {
        var currentNode = $(node);
        var title = currentNode.attr("data-title");
        html += "<a class='openWindow' data-id='"+index+"'>"+title+"</a>";
        if(index!=0){
            currentNode.addClass("closed");
        }
    });
    $("#icons").append(html);
});