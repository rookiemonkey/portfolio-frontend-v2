import React from 'react'
import styles from '../styles/Backdrop.module.css'

const Backdrop = props => {
  return (
    <main className={styles['backdrop']}>{ props.children }</main>
  )
}

export default Backdrop
