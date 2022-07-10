const normalizeHeight = element => {
  if (!element.current) return null

  let height = 0

  // if zoomed out use window.screen.height
  if (window.devicePixelRatio < 1) height = window.screen.height;

  // if not zoomed out or zoomed in
  if (window.devicePixelRatio >= 1) height = window.innerHeight;

  element.current.style.height = `${height}px`
  element.current.style.maxHeight = `${height}px`
}

export default normalizeHeight;