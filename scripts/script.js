$(document).ready(function(){
	for (let i = 0; i < content[page].length; i++) {
		$("#content").append("<div class='block'>" + content[page][i] + "</div>");
	}
});