import React, { useEffect, useRef } from "react";
import normalizeWidth from '~/helpers/normalizeWidth';

const Window = props => {
  const _this = useRef()

  useEffect(() => normalizeWidth(_this), [])

  return (
    <div ref={_this} className='window'>{ props.children }</div>
  )
}

export default Window;