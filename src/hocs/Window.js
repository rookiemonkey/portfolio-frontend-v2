import React, { useEffect, useRef, useContext, useState } from "react";
import Maintenance from "~/components/Maintenance";
import normalizeWidth from '~/helpers/normalizeWidth';

const Window = props => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width)
  const _this = useRef()

  useEffect(() => normalizeWidth(_this), [])

  useEffect(() => { window.addEventListener('resize', ({ target }) => setScreenWidth(target.screen.width)) }, [])

  return (
    <>
      {
        screenWidth > 768
          ? (<div ref={_this} className='window'>{props.children}</div>)
          : <Maintenance />
      }
    </>
  )
}

export default Window;