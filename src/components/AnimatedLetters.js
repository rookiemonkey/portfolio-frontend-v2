import React from 'react';
import AnimatedLetter from '~/components/AnimatedLetter';

const AnimatedLetters = ({ string, animateExit = true }) => {
  return (
    <>
      {[...string].map((char, ind) => <AnimatedLetter key={`${char}-${ind}`} char={char} animateExit={animateExit} />) }
    </>
  )
}

export default AnimatedLetters;