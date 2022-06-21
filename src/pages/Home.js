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
            <h1 className={styles['header']}>
              KEVIN ROI BASINA
            </h1>

            <p className={styles['subheader']}>
              full-stack software developer.
            </p>

            <div className={styles['icons']}>
              <a href="https://github.com/rookiemonkey" target="_blank" rel="noreferrer">
                <SVGGithubIcon height="40" width="40" viewBox="0 0 30 30" />
              </a>
              <a href='https://www.linkedin.com/in/kevin-roi-basina/' target="_blank" rel="noreferrer">
                <SVGLinkedinIcon height="40" width="40" viewBox="0 0 30 30" />
              </a>
            </div>
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

          <SVGSplat className={styles['splat1']} leftOffset={0.45} topOffset={0.05} transitionDelay={0} />
          <SVGSplat className={styles['splat2']} leftOffset={0.60} topOffset={0.2} transitionDelay={0.25} />
          <SVGSplat className={styles['splat3']} leftOffset={0.45} topOffset={0.33} transitionDelay={0.5} />
          <SVGCartoon className={styles['cartoon']} leftOffset={0.50} topOffset={0.1} transitionDelay={0.6} />

        </div>

      </div>
      
    </React.Fragment>
  )
}

export default Home
