import React, { useEffect, useRef } from "react";
import normalizeWidth from '../helpers/normalizeWidth';

const Gradient = props => {
  const _this = useRef()

  useEffect(() => normalizeWidth(_this), [])

  return (
    <div ref={_this} className='gradient'>{ props.children }</div>
  )
}

export default Gradient;