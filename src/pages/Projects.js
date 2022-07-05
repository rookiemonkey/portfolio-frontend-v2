import React, { useRef, useEffect } from 'react';
import styles from '../styles/Projects.module.css';
import Content from '../components/Projects/Content';
import normalizeHeight from '../helpers/normalizeHeight';

const Projects = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <React.Fragment>

      <header ref={_this} className={styles['header']} >
        <Content />
      </header>

    </React.Fragment>
  )
}

export default Projects