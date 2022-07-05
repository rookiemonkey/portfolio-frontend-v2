import React, { useRef, useEffect } from 'react';
import globalStyles from '../styles/Components.module.css';
import FloatingNavigation from '../components/FloatingNavigation';
import Content from '../components/Projects/Content';
import normalizeHeight from '../helpers/normalizeHeight';

const Projects = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <div className={globalStyles['page-container']}>

      <FloatingNavigation />

      <section ref={_this} className={globalStyles['section']} >
        <Content />
      </section>

    </div>
  )
}

export default Projects