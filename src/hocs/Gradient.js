import React, { useEffect, useRef, useContext } from "react";
import { CenterScreenContext } from "../context/CenterScreen";
import normalizeWidth from '../helpers/normalizeWidth';

const Gradient = props => {
  const { setCenterScreen } = useContext(CenterScreenContext)
  const _this = useRef()

  useEffect(() => {
    setCenterScreen({ x: _this.current.offsetWidth / 2, y: _this.current.offsetHeight / 2 })
    normalizeWidth(_this)
  }, [setCenterScreen])

  return (
    <div ref={_this} className='gradient'>{ props.children }</div>
  )
}

export default Gradient;