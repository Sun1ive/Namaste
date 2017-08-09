$(document).ready(function() {
	let windowHeight = $(document).height();
	let speed = 3;
	let timeScrolling = windowHeight / speed;
	let topX = $('html').offset().top - 
	$('.scrollTop').click(function(e) {
		$('html, body').animate({
			scrollTop: 0
		}, timeScrolling);
	});




});