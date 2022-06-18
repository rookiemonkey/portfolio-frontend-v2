import React from 'react';
import Icons from '../assets/images/icons.svg'

const SVGIcon = ({ id, width, height, viewBox }) => {
  return (
    <svg className={id} width={width} height={height} viewBox={viewBox}>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  )
}

export default SVGIcon
