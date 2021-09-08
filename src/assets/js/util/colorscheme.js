function getColorScheme() {
  return matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
}

function handleColorScheme(callback) {
  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener('change',
      e => e.matches && callback('dark')
    )
  window.matchMedia("(prefers-color-scheme: light)")
    .addEventListener('change',
      e => e.matches && callback('light')
    )
}
