import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import styles from '~/styles/Home.module.css';
import Greetings from '~/components/Home/Greetings';
import Content from '~/components/Home/Content';
import SVGCartoon from '~/components/Home/SVGCartoon';
import pageVariants from "~/pages/variants/pageTransitions";
import normalizeHeight from '~/helpers/normalizeHeight';

const Home = ({ hasGreeted, setHasGreeted }) => {
  const contents = useRef();
  const left = useRef();
  const right = useRef();

  useEffect(() => [contents, left, right].forEach(normalizeHeight), [hasGreeted])

  return (
    <>
      <AnimatePresence>
        { !hasGreeted ? <Greetings setHasGreeted={setHasGreeted} /> : null }
      </AnimatePresence>

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
