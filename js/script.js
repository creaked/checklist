$(document).ready(function() {
	
	//add item
	$('#button').click(function() {
		var toAdd = $('input[name=item]').val();
		$('.list').append('<div class="item"><li>' + toAdd + '</li><hr/></div>');	//append new item
		$('input[type=text]').val('');												//remove value of input on click
		console.log('Added: ' + toAdd);												//log what was added
	});

	//enter key will add item
	$("#item").keyup(function(event){
	    if(event.keyCode == 13){
	        $("#button").click();
	    }
	});

	//remove when clicking item
	$(document).on('click', '.item', function() {
		$(this).remove();															//remove item when clicked
		console.log('Removed: ' + $('input[name=item]').val());						//log what was removed
	});
});