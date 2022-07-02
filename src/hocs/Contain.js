import React, { useEffect, useRef, useContext } from 'react';
import { CenterScreenContext } from "../context/CenterScreen";
import normalizeHeight from '../helpers/normalizeHeight';

const Contain = props => {
  const { setCenterScreenOriginEl } = useContext(CenterScreenContext)
  const _this = useRef()

  useEffect(() =>  {
    setCenterScreenOriginEl(_this)  
    normalizeHeight(_this)
  }, [setCenterScreenOriginEl])

  return (
    <div ref={_this} className='contain-screen'>{ props.children }</div>
  )
}

export default Contain
