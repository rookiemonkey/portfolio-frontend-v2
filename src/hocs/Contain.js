import React, { useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CenterScreenContext } from "../context/CenterScreen";
import normalizeHeight from '../helpers/normalizeHeight';
import setStyleVariable from '../helpers/setStyleVariable';

const Contain = props => {
  const { setCenterScreen } = useContext(CenterScreenContext)
  const { pathname } = useLocation()
  const _this = useRef()

  useEffect(() =>  {
    setCenterScreen({ x: _this.current.offsetWidth / 2, y: _this.current.offsetHeight / 2 })
    normalizeHeight(_this)
  }, [setCenterScreen])

  useEffect(() => pathname === '/' ? setStyleVariable('--screen-scroll', 'hidden') : setStyleVariable('--screen-scroll', 'scroll'), [pathname])

  return (
    <div ref={_this} className='contain-screen'>{ props.children }</div>
  )
}

export default Contain
