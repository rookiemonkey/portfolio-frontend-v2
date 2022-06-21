import React, { useEffect, useRef } from 'react';
import normalizeHeight from '../helpers/normalizeHeight';

const Contain = props => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <div ref={_this} className='contain-screen'>{ props.children }</div>
  )
}

export default Contain
