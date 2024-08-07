export function correctViewTransitionName(name?: string) {
  if (!name) return
  return name.replace(/[^a-zA-Z0-9]/g, '-')
}

export function isSafari() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('safari') && !ua.includes('chrome')
}
