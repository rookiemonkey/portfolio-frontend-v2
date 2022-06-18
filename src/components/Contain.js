import React from 'react';
import styles from '../styles/Contain.module.css';

const Contain = props => {
  return (
    <div className={styles['contain']}>{props.children}</div>
  )
}

export default Contain
