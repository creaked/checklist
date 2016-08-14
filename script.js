$(document).ready(function() {
	
	$('#button').click(function() {
		var i=0;
		var toAdd = $('input[name=item]').val();
		$('.list').append('<div class="item"><li>' + toAdd + '</li></div>');

		console.log('Added: ' + toAdd);
	});
			$('.list').append('Click item to remove!')
	$(document).on('click', '.item', function() {
		$(this).remove();
		console.log('Removed: ' + $('input[name=item]').val());
	});
});