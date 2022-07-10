const normalizeWidth = element => {
  if (!element.current) return null
  
  element.current.style.width = `${window.screen.width}px`
}

export default normalizeWidth;