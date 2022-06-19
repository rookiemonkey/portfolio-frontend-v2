import React, { useEffect, useState, useRef, useContext } from 'react';
import { MaxViewPortContext } from '../context/MaxViewPort';

const Float = ({ leftOffset, topOffset, zindex, children }) => {
  const maxViewPort = useContext(MaxViewPortContext);
  const el = useRef()
  const [position, setPosition] = useState({})

  useEffect(() => {
    let left = window.innerWidth >= maxViewPort.width ? maxViewPort.width / leftOffset : (window.innerWidth - el.current.children[0].clientWidth) / leftOffset
    let top = window.innerHeight >= maxViewPort.height ? maxViewPort.height / topOffset : (window.innerHeight - el.current.children[0].clientHeight) / topOffset
    setPosition({ top: `${top}px`, left: `${left}px`, zIndex: zindex })
  }, [leftOffset, topOffset])

  return (
    <div ref={el} className="float" style={position}>{children}</div>
  )
}

export default Float
