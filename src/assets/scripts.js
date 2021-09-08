function init() {
  setMailById('mail_card', true, false)
  setMailById('mail_reach', true, true)

  // Check initial color scheme
  color_scheme = getColorScheme()

  // Init canvas
  canvas = createCanvas('canvas')

  // Set canvas full screen
  let resizeTimer
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(function () {
      canvas.el.width = window.innerWidth
      canvas.el.height = window.innerHeight
    }, 200)
  })
  canvas.el.width = window.innerWidth
  canvas.el.height = window.innerHeight

  // Translate on mouse move
  document.addEventListener('mousemove', function (e) {
    canvas.mouseX = e.clientX
    canvas.mouseY = e.clientY
  })
  document.addEventListener('mouseenter', function (e) {
    canvas.mouseX = e.clientX
    canvas.mouseY = e.clientY
  })
  canvas.mouseX = window.innerWidth / 2
  canvas.mouseY = window.innerHeight / 2

  // Add initial stars
  addStars(20, 30, 0.2)

  // Start animation
  requestAnimationFrame(draw)

  // Setup mail
  document.getElementById('mail_anchor').href = `mailto:${mail_link}`

  // Show card
  setTimeout(function () {
    document.getElementById('card').classList.remove('hide')
  }, 400)
}
