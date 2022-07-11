import React, { useEffect, useRef, useContext } from 'react'
import { motion } from 'framer-motion';
import { GreetingsContext } from '~/context/Greetings';
import styles from '~/styles/Home.module.css';
import Content from '~/components/Home/Content';
import SVGCartoon from '~/components/Home/SVGCartoon';
import pageVariants from "~/pages/variants/pageTransitions";
import normalizeHeight from '~/helpers/normalizeHeight';

const Home = () => {
  const { hasGreeted } = useContext(GreetingsContext); 
  const contents = useRef();
  const left = useRef();
  const right = useRef();

  useEffect(() => [contents, left, right].forEach(normalizeHeight), [hasGreeted])

  return (
    <>
      {
        hasGreeted
          ? (<motion.div
            variants={pageVariants.pageTransition}
            initial="initial" 
            animate="animate"
            exit="exit"
            className={styles['contents']}
            ref={contents}
          >

            <div
              className={styles['contents-left']} ref={left}>
              <Content />
            </div>

            <div
              className={styles['contents-right']} ref={right}>
              <SVGCartoon />
            </div>

          </motion.div>)
          : null
      }
    </>
  )
}

export default Home
