import React, { useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GreetingsContext } from '~/context/Greetings';
import animationVariants from '~/components/Home/variants/content';
import styles from '~/styles/Home.module.css';

const Greetings = () => {
  const { hasGreeted, handleSetHasGreeted } = useContext(GreetingsContext); 

  useEffect(() => { setTimeout(() => handleSetHasGreeted(), 2000) }, [handleSetHasGreeted])

  return (
    <AnimatePresence exitBeforeEnter>
      {
        hasGreeted
          ? null
          : (<motion.div
            variants={animationVariants.content}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles['greetings']}
          >
            <motion.h2 variants={animationVariants.greetings}>Good Day!</motion.h2>
            <motion.h3 variants={animationVariants.greetings}>Thank you for dropping by<br /> to see what I do</motion.h3>
          </motion.div>)
      }
    </AnimatePresence>
  )
}

export default Greetings;