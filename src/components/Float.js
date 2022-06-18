import React, { useEffect, useState } from 'react';

const Float = ({ leftOffset, topOffset, children }) => {
  const [position, setPosition] = useState({})

  useEffect(() => {
    let left = window.innerWidth >= 1200 ? 1200 / leftOffset : window.innerWidth / 2
    let top = window.innerHeight * topOffset
    setPosition({ top: `${top}px`, left: `${left}px` })
  }, [])

  return (
    <div className="float" style={position}>{children}</div>
  )
}

export default Float
