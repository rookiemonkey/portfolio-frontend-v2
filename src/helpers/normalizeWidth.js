const normalizeWidth = element => {
  if (!element.current) return function (){}
  
  element.current.style.width = `${window.screen.width}px`
}

export default normalizeWidth;