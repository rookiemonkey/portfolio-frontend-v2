import React, { useEffect, useState, useRef } from 'react';

const Float = ({ leftOffset, topOffset, zindex, children }) => {
  const el = useRef()
  const [position, setPosition] = useState({})

  useEffect(() => {
    let left = window.innerWidth >= 1200 ? 1200 / leftOffset : window.innerWidth / 2
    let top = (window.innerHeight - el.current.children[0].clientHeight) / topOffset
    setPosition({ top: `${top}px`, left: `${left}px`, zIndex: zindex })
  }, [leftOffset, topOffset])

  return (
    <div ref={el} className="float" style={position}>{children}</div>
  )
}

export default Float
