import React from 'react';
import { motion } from 'framer-motion';

const AnimatedString = ({ string, minWidth = '25px', animateExit = true }) => {
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

  if (!animateExit) delete animatedLetterVariant.exit;

  return (
    <>
    {
        [...string].map((char, ind) => {
          if (char === '*') return <br key={`break-${ind}`} />
          if (char === ' ') return <span style={{ minWidth }} key={`space-${ind}`}> </span>
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