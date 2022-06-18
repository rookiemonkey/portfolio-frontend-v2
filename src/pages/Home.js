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
              <SVGIcon id='github' height="40px" width="40px" viewBox="0 0 30 30" />
              <SVGIcon id='linkedin' height="40px" width="40px" viewBox="0 0 30 30" />
            </div>
          </div>

          <div className={styles['navigation-container']}>
            
          </div>

        </div>
        <div className={styles['contents-right']}></div>
      </div>
    </React.Fragment>
  )
}

export default Home
