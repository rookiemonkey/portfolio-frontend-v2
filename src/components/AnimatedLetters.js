import React from 'react';
import AnimatedLetter from '~/components/AnimatedLetter';

const AnimatedLetters = ({ string }) => {
  return (
    <>
      {[...string].map((char, ind) => <AnimatedLetter key={`${char}-${ind}`} char={char} ind={ind} />) }
    </>
  )
}

export default AnimatedLetters;