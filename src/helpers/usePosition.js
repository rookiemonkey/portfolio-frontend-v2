const usePosition = ({ leftOffset = 1, topOffset = 1 }) => {

  let left = window.screen.width * leftOffset
  let top = window.screen.height * topOffset

  return [{ left, top }, null]
}

export default usePosition;