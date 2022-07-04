import React, { useRef, useEffect } from 'react';
import styles from '../styles/DevelopmentSkills.module.css';
import normalizeHeight from '../helpers/normalizeHeight';

const DevelopmentSkills = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <React.Fragment>

      <header ref={_this} className={styles['header']} >
        <h1>DevelopmentTools</h1>
      </header>

    </React.Fragment>
  )
}

export default DevelopmentSkills;