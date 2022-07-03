import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import Content from '../components/Home/Content';
import SVGCartoon from '../components/Home/SVGCartoon';
import pageVariants from "./variants/pageTransitions";
import cartoonVariants from "../components/Home/variants/cartoon";
import contentVariants from "../components/Home/variants/content";
import normalizeHeight from '../helpers/normalizeHeight';

const Home = () => {
  const contents = useRef();
  const left = useRef();
  const right = useRef();

  useEffect(() => [contents, left, right].forEach(normalizeHeight), [])
  
  return (
    <motion.div 
      variants={pageVariants.pageTransition} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      className={styles['contents']} 
      ref={contents}
    >

      <motion.div 
        variants={contentVariants.content}
        initial="initial"
        animate="animate"
        exit="exit"
        className={styles['contents-left']} ref={left}>
        <Content />
      </motion.div>

      <motion.div 
        variants={cartoonVariants.cartoon}
        initial="initial"
        animate="animate"
        exit="exit"
        className={styles['contents-right']} ref={right}>
        <SVGCartoon />
      </motion.div>

    </motion.div>
  )
}

export default Home
