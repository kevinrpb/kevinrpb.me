let canvas;

function init() {
	// Init canvas
	canvas = createCanvas('canvas');

	// Set canvas full screen
	let resizeTimer;
	window.addEventListener('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			canvas.el.width = window.innerWidth;
			canvas.el.height = window.innerHeight;
		}, 200);
	});
	canvas.el.width = window.innerWidth;
	canvas.el.height = window.innerHeight;

	// Translate on mouse move
	document.addEventListener('mousemove', function(e) {
		canvas.mouseX = e.clientX;
		canvas.mouseY = e.clientY;
	});

	// Start animation
	requestAnimationFrame(draw);

	// Show card
	setTimeout(function() {
		document.getElementById('card').classList.remove('hide');
	}, 400);
}

let stars = [];
function draw() {
	canvas.bg(7, 11, 32);

	// Update translation -> parallax
	canvas.setTranslate(
		(300 * canvas.mouseX) / canvas.el.width,
		(300 * canvas.mouseY) / canvas.el.height
	);

	// Update stars and delete if needed (if lifespan overlived)
	for (let i = stars.length - 1; i > -1; i--) {
		stars[i].render(canvas, 255);

		stars[i].update();
		if (stars[i].life >= stars[i].lifespan) {
			stars.splice(i, 1);
		}
	}

	// Add more stars
	addStars(0, 3, 0.05);

	requestAnimationFrame(draw);
}

function addStars(min, max, p) {
	let a = min;
	for (let i = min; i < max; i++) {
		const r = Math.random();
		if (r < p) a++;
	}

	for (let i = 0; i < a; i++) {
		const x = Math.random() * canvas.el.width;
		const y = Math.random() * canvas.el.height;
		const l = Math.random() * 25 + 15;
		stars.push(new Star(x, y, l, 15));
	}
}
