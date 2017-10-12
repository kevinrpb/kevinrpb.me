$(function() {
	const url = 'https://source.unsplash.com/featured/?landscape&sig=';
	let i = 2;

	let show = 'A';
	let hide = 'B';

	$('#A').css("background-image", "url(" + (url + '0') + ")").promise()
		.done(function() {
			$('#A').animate({
				opacity: 1
			}, 100);
		});

	$('#B').css("background-image", "url(" + (url + '1') + ")").promise()
		.done(function() {});

	setInterval(function() {
		$('#' + hide).animate({
			left: '-5%'
		}, {
			duration: 1000,
			queue: false
		}).promise()
			.done(function() {});

		$('#' + show).animate({
				left: '-110%'
			}, {
				duration: 1000,
				queue: false
			}).promise()
			.done(function() {
				$('#' + show).css('left', '105%');
				let e = show;
				show = hide;
				hide = e;

				$('#' + hide).css("background-image", "url(" + (url + i) + ")");
				i++;
			});
	}, 15000);
});