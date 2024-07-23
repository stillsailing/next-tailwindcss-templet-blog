export function correctViewTransitionName(name?: string) {
  if (!name) return
  return name.replace(/[^a-zA-Z0-9]/g, '-')
}
