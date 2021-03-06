import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedLetter = ({ char, animateExit }) => {
  const animatedLetterVariant = {
    'initial': {
      y: 200,
    },
    'animate': {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      }
    },
    'exit': {
      opacity: 0
    }
  }

  const _this = useRef();
  const handleHoverStart = () => _this.current.classList.add('hovered-letter')
  const handleHoverEnd = () => setTimeout(() => _this.current.classList.remove('hovered-letter'), 1000)

  if (!animateExit) delete animatedLetterVariant.exit;

  if (char === '*') return (<br/>)

  if (char === ' ') return (<span style={{ minWidth: '25px' }}> </span>)

  return (
    <motion.span 
      ref={_this}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      variants={animatedLetterVariant} 
    >
      {char}
    </motion.span>
  )
}

export default AnimatedLetter;