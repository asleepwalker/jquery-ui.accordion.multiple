$(function() {

	$('#accordion').accordion({
		collapsible: true,
		multiple: true
	});

	$('input[type=checkbox]').change(function() {
		$('#accordion').accordion('option', $(this).attr('name'), $(this).prop('checked'));
	});

});
