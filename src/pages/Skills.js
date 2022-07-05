import React, { useRef, useEffect } from 'react';
import styles from '../styles/Skills.module.css';
import Content from '../components/Skills/Content';
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