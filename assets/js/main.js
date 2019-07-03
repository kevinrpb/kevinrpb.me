let canvas,
	color_scheme = 'dark';

function init() {
	// Check initial color scheme
	if (matchMedia('(prefers-color-scheme: light)').matches) {
		color_scheme = 'light';
	}
	// Add listeners for color scheme
	window.matchMedia('(prefers-color-scheme: light)').addListener(e => {
		if (e.matches) color_scheme = 'light';
	});

	window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
		if (e.matches) color_scheme = 'dark';
	});

	window.matchMedia('(prefers-color-scheme: no-preference)').addListener(e => {
		if (e.matches) color_scheme = 'dark';
	});

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
	document.addEventListener('mouseenter', function(e) {
		canvas.mouseX = e.clientX;
		canvas.mouseY = e.clientY;
	});
	canvas.mouseX = window.innerWidth / 2;
	canvas.mouseY = window.innerHeight / 2;

	// Add initial stars
	addStars(20, 30, 0.2);

	// Start animation
	requestAnimationFrame(draw);

	// Show card
	setTimeout(function() {
		document.getElementById('card').classList.remove('hide');
	}, 400);
}

let stars = [];
function draw() {
	color_scheme === 'dark' ? canvas.bg(7, 11, 32) : canvas.bg(245, 245, 245);

	// Update translation -> parallax
	canvas.setTranslate(
		(300 * canvas.mouseX) / canvas.el.width,
		(300 * canvas.mouseY) / canvas.el.height
	);

	// Update stars and delete if needed (if lifespan overlived)
	for (let i = stars.length - 1; i > -1; i--) {
		color_scheme === 'dark'
			? stars[i].render(canvas, 255)
			: stars[i].render(canvas, 0);

		stars[i].update();
		if (stars[i].life >= stars[i].lifespan) {
			stars.splice(i, 1);
		}
	}

	// Add more stars
	addStars(0, 3, 0.05);
	addShootingStars(0, 3, 0.05);

	requestAnimationFrame(draw);
}

function addStars(min, max, p) {
	let a = min;
	for (let i = min; i < max; i++) {
		const r = Math.random();
		if (r < p) a++;
	}

	for (let i = 0; i < a; i++) {
		const x = Math.random() * canvas.el.width - canvas.trans[0];
		const y = Math.random() * canvas.el.height - canvas.trans[1];
		const l = Math.random() * 500 + 100;
		stars.push(new Star(x, y, l, 15));
	}
}

function addShootingStars(min, max, p) {
	let a = min;
	for (let i = min; i < max; i++) {
		const r = Math.random();
		if (r < p) a++;
	}

	for (let i = 0; i < a; i++) {
		const x = Math.random() * canvas.el.width - canvas.trans[0];
		const y = Math.random() * canvas.el.height - canvas.trans[1];
		const l = Math.random() * 25 + 15;
		stars.push(new ShootingStar(x, y, l, 15));
	}
}
