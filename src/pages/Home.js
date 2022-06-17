import React from 'react'
import styles from '../styles/Home.module.css'

const Home = props => {
  return (
    <React.Fragment>
      <div className={styles['contents']}>
        <div className={styles['contents-left']}>
          <h1 className={styles['header']}>KEVIN ROI BASINA</h1>
          <p className={styles['subheader']}>full-stack software developer.</p>
        </div>
        <div className={styles['contents-right']}></div>
      </div>
    </React.Fragment>
  )
}

export default Home
