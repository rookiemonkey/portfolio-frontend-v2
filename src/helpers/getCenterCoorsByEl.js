const getCenterCoorsByEl = (parentElement, elementToCenter ) => {
  if (parentElement) {
    let { top } = parentElement.current.getBoundingClientRect()

    return { 
      top: (parentElement.current.offsetHeight / 2) - (elementToCenter.current.clientHeight / 2) + top, 
      left: (parentElement.current.offsetWidth / 2) - (elementToCenter.current.clientWidth / 2)
    }
  }

  return { top: 0, left: 0 }
}

export default getCenterCoorsByEl;