import React from 'react'
import SVGIcon from '../components/SVGIcon';
import Relative from '../components/Relative';
import Float from '../components/Float';
import styles from '../styles/Home.module.css';
import { ReactComponent as Cartoon } from '../assets/images/cartoon.svg';
import { ReactComponent as Splat } from '../assets/images/splat.svg';

const Home = () => {
  return (
    <React.Fragment>

      <Relative>
        <Float leftOffset={1.75} topOffset={1.75} zindex={1}>
          <Cartoon className={styles['cartoon']} />
        </Float>
      </Relative>

      <Relative>
        <Float leftOffset={2} topOffset={2.5} zindex={0}>
          <Splat className={styles['splat1']} />
        </Float>
      </Relative>

      <Relative>
        <Float leftOffset={1.45} topOffset={1.35} zindex={0}>
          <Splat className={styles['splat2']} />
        </Float>
      </Relative>

      <div className={styles['contents']}>
        
        <div className={styles['contents-left']}>

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

        <div className={styles['contents-right']}></div>

      </div>
    </React.Fragment>
  )
}

export default Home
