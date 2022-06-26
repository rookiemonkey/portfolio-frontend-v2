import React, { useEffect, useRef, useContext } from 'react';
import { CenterScreenContext } from "../context/CenterScreen";
import normalizeHeight from '../helpers/normalizeHeight';

const Contain = props => {
  const { setCenterScreen } = useContext(CenterScreenContext)
  const _this = useRef()

  useEffect(() =>  {
    setCenterScreen({ x: _this.current.offsetWidth / 2, y: _this.current.offsetHeight / 2 })
    normalizeHeight(_this)
  }, [setCenterScreen])

  return (
    <div ref={_this} className='contain-screen'>{ props.children }</div>
  )
}

export default Contain
