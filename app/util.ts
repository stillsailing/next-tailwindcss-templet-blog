export function correctViewTransitionName(name?: string) {
  if (!name) return 'default-view-transition-name'
  return name.replaceAll(' ', '-')
}

export function isSafari() {
  if (typeof window === 'undefined') {
    return false
  }
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('safari') && !ua.includes('chrome')
}
