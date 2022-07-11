import React, { useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { GreetingsContext } from '~/context/Greetings';
import globalStyles from '~/styles/Components.module.css';
import Content from '~/components/Skills/Content';
import pageVariants from "~/pages/variants/pageTransitions";
import normalizeHeight from '~/helpers/normalizeHeight';

const Skills = () => {
  const { hasGreeted } = useContext(GreetingsContext); 
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [hasGreeted])

  return (
    <>
      {
        hasGreeted
          ? (<motion.section 
            variants={pageVariants.pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            ref={_this} 
            className={globalStyles['section']}
          >
            <Content />
          </motion.section>)
          : null
      }
    </>
  )
}

export default Skills;