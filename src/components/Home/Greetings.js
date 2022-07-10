import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import animationVariants from '~/components/Home/variants/content';
import styles from '~/styles/Home.module.css';

const Greetings = ({ setHasGreeted }) => {

  useEffect(() => {setTimeout(() => setHasGreeted(true), 2000)}, [])

  return (
    <motion.div 
      variants={animationVariants.content}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles['greetings']}
    >
      <motion.h2 variants={animationVariants.greetings}>Good Day!</motion.h2>
      <motion.h3 variants={animationVariants.greetings}>Thank you for dropping by<br/> to see what I do</motion.h3>
    </motion.div>
  )
}

export default Greetings;