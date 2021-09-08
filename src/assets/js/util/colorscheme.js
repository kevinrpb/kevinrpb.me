function getColorScheme() {
  return matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
}
