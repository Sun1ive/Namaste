$(document).ready(function() {
	let windowHeight = $(document).height();
	let speed = 3;
	let timeScrolling = windowHeight / speed;

function checkPos(){
	let pos = $(window).scrollTop();
	if(pos < "700") {
		$('.scrollTop').css('display', 'none');
	}
	else {
		$('.scrollTop').css('display', 'block');
	}
}

	$(document).scroll(function(e) {
		checkPos();
	})

	$('.scrollTop').click(function(e) {
		$('html, body').animate({
			scrollTop: 0
		}, timeScrolling);
	});
});
