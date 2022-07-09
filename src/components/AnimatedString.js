import React from 'react';
import { motion } from 'framer-motion';

const animatedLetterVariant = {
  'initial': {
    y: 200,
  },
  'animate': {
    y:0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    }
  },
  'exit': {
    y: 200,
  }
}

const AnimatedString = ({ string }) => {
  return (
    <>
    {
        [...string].map((char, ind) => {
          if (char === '*') return <br key={`break-${ind}`} />
          if (char === ' ') return <span style={{ minWidth: '25px' }} key={`space-${ind}`}> </span>
          return (
            <motion.span variants={animatedLetterVariant} key={`${char}-${ind}`}>
              {char}
            </motion.span>
          )
        })
    }
    </>
  )
}

export default AnimatedString;