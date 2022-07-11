const getCenterCoorsByEl = (parentElement, elementToCenter) => {
  
  // subtracting 100px for the navigation bar

  if (parentElement) {
    return { 
      top: (parentElement.current.offsetHeight / 2) - (elementToCenter.current.clientHeight / 2), 
      left: ((parentElement.current.offsetWidth-100) / 2) - (elementToCenter.current.clientWidth / 2)
    }
  }

  return { top: 0, left: 0 }
}

export default getCenterCoorsByEl;