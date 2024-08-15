export function correctViewTransitionName(name?: string) {
  if (!name) return 'default-view-transition-name'
  return name.replace(/[^a-zA-Z0-9]/g, '-')
}

export function isSafari() {
  if (typeof window === 'undefined') {
    return false
  }
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('safari') && !ua.includes('chrome')
}
