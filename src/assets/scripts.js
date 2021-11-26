function init(with_mail = true) {
  if (with_mail) {
    setMailById('mail_card', true, false)
    // setMailById('mail_reach', true, true)
  }

  setupParticleCanvas()
}
