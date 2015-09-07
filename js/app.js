$(document).ready(function() {
	
	var x_down = false;

	$(document).keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
			x_down = true;
		}
	});

	$(document).keyup(function(event) {
		if (event.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			x_down = false;
		}
	});

	$('.ryu').mouseenter(function() {
		if (x_down == false) {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	})
	.mouseleave(function() {
		if (x_down == false) {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		}
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	}).mouseup(function () {
		$('.ryu-throwing').hide();
		if (x_down == false) {
			$('.ryu-still').show();
		}
	});
	
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = .5;
	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}