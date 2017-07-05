$(document).ready(function (){
	$('button').click(function (){
		$('#deckList').append("<ul>" + $("input[name=card]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
	});
	$("body").on('click', '#deckList a', function (){
		$(this).closest("ul").remove();
	});
});
