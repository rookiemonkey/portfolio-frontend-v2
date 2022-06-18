import React from 'react'
import SVGIcon from '../components/SVGIcon';
import styles from '../styles/Home.module.css'

const Home = props => {
  return (
    <React.Fragment>
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
              <SVGIcon id='github' height="40" width="40" viewBox="0 0 30 30" />
              <SVGIcon id='linkedin' height="40" width="40" viewBox="0 0 30 30" />
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
