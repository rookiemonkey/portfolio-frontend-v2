import React, { useRef, useEffect } from 'react';
import styles from '../styles/Projects.module.css';
import SVGProjects from '../components/SVGProjects';
import normalizeHeight from '../helpers/normalizeHeight';

const Projects = () => {
  const header = useRef()

  useEffect(() => normalizeHeight(header), [])

  return (
    <React.Fragment>

      <header ref={header} className={styles['header']} >
        <SVGProjects />
      </header>

    </React.Fragment>
  )
}

export default Projects