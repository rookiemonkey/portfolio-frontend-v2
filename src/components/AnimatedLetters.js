import React from 'react';
import { motion } from 'framer-motion';

const animatedLetterVariant = {
  'initial': {
    y: 99,
  },
  'animate': {
    y:0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    }
  },
  'exit': {
    y: 99,
  }
}

const AnimatedLetters = ({ string }) => {

  return (
    <>
    {
        [...string].map((char, ind) => <motion.span variants={animatedLetterVariant} key={`${char}-${ind}`}>{char}</motion.span>)
    }
    </>
  )
}

export default AnimatedLetters