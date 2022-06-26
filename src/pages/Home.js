import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import SVGCartoon from '../components/SVGCartoon';
import SVGSplat from '../components/SVGSplat';
import SVGGithubIcon from '../components/SVGGithubIcon';
import SVGLinkedinIcon from '../components/SVGLinkedinIcon';
import SVGArrowRight from '../components/SVGArrowRight';
import normalizeHeight from '../helpers/normalizeHeight';

const headerVariant = {
  hidden: { y: -99, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const iconsVariant = {
  hidden: { x: -99, opacity: 0 }, 
  visible: { x: 0, opacity: 1 }
}

const linkVariant = {
  hidden: { x: -99, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const Home = () => {
  const contents = useRef();
  const left = useRef();
  const right = useRef();

  useEffect(() => [contents, left, right].forEach(normalizeHeight), [])
  
  return (
    <React.Fragment>

      <div className={styles['contents']} ref={contents}>

        <div className={styles['contents-left']} ref={left}>

          <div className={styles['header-container']}>
            <motion.h1 
              variants={headerVariant}
              animate="visible"
              initial="hidden"
              transition={{ delay: 1.25 }}
              className={styles['header']}
            >
              KEVIN ROI BASINA
            </motion.h1>

            <motion.p 
              variants={linkVariant}
              animate="visible"
              initial="hidden"
              transition={{ delay: 1.35 }}
              className={styles['subheader']}
            >
              full-stack software developer.
            </motion.p>

            <motion.div 
              variants={iconsVariant}
              animate="visible"
              initial="hidden"
              transition={{ delay: 1.25 }}
              className={styles['icons']}
            >
              <a href="https://github.com/rookiemonkey" target="_blank" rel="noreferrer">
                <SVGGithubIcon height="40" width="40" viewBox="0 0 30 30" />
              </a>
              <a href='https://www.linkedin.com/in/kevin-roi-basina/' target="_blank" rel="noreferrer">
                <SVGLinkedinIcon height="40" width="40" viewBox="0 0 30 30" />
              </a>
            </motion.div>
          </div>

          <div className={styles['navigation-container']}>

            <motion.div
              variants={linkVariant}
              animate="visible"
              initial="hidden"
              transition={{ delay: 1.25 }}
            >
              <Link to='/developer-journey' className={styles['navigation-container-link']}>
                <SVGArrowRight height="30" width="30" viewBox="0 0 25 25" />
                <span>Developer Journey</span>
              </Link>
            </motion.div>

            <motion.div
              variants={linkVariant}
              animate="visible"
              initial="hidden"
              transition={{ delay: 1.35 }}
            >
              <Link to='/projects' className={styles['navigation-container-link']}>
                <SVGArrowRight height="30" width="30" viewBox="0 0 25 25" />
                <span>Projects</span>
              </Link>
            </motion.div>

          </div>

        </div>

        <div className={styles['contents-right']} ref={right}>

          <SVGSplat className={styles['splat1']} transitionDelay={0} />
          <SVGSplat className={styles['splat2']} transitionDelay={0.25} />
          <SVGSplat className={styles['splat3']} transitionDelay={0.5} />
          <SVGCartoon className={styles['cartoon']} transitionDelay={0.6} />

        </div>

      </div>
      
    </React.Fragment>
  )
}

export default Home
