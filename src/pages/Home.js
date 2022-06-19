import React, { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css';
import SVGIcon from '../components/SVGIcon';
import Halftone from '../components/Halftone';
import normalizeHeight from '../helpers/normalizeHeight';

const Home = () => {
  const contents = useRef();
  const left = useRef();
  const right = useRef();

  useEffect(() => [contents, left, right].forEach(normalizeHeight), [])
  
  return (
    <React.Fragment>

      <div className={styles['contents']} ref={contents}>

        <Halftone className={styles['halftone']} leftOffset={-0.1} topOffset={0.05} />

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
                <SVGIcon id='github' height="40" width="40" viewBox="0 0 30 30" />
              </a>
              <a href='https://www.linkedin.com/in/kevin-roi-basina/' target="_blank" rel="noreferrer">
                <SVGIcon id='linkedin' height="40" width="40" viewBox="0 0 30 30" />
              </a>
            </div>
          </div>

          <div className={styles['navigation-container']}>

            <a href='#' className={styles['navigation-container-link']}>
              <SVGIcon id='arrow-to-right' height="30" width="30" viewBox="0 0 25 25" />
              <span>Developer Journey</span>
            </a>

            <a href='#' className={styles['navigation-container-link']}>
              <SVGIcon id='arrow-to-right' height="30" width="30" viewBox="0 0 25 25" />
              <span>Side Projects</span>
            </a>

          </div>

        </div>

        <div className={styles['contents-right']} ref={right}>

        </div>

      </div>
    </React.Fragment>
  )
}

export default Home
