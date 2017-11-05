$(document).ready(function() {
	
	$('#form-login').hide();
	
	$('#loginRadio').click(function() {
		$('#form-login').toggle();
		$('#form-register').toggle();
	});
	$('#registerRadio').click(function() {
		$('#form-login').toggle();
		$('#form-register').toggle();
	});

	$('.nav').click(function() {
		// $(this).toggleClass('nav')
		// $(this).toggleClass('nav-hover')
		$('.nav-menu').toggle();
	});

});