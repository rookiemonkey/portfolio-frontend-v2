import React, { useRef, useEffect } from 'react';
import globalStyles from '~/styles/Components.module.css';
import Content from '~/components/Projects/Content';
import normalizeHeight from '~/helpers/normalizeHeight';

const Projects = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <section ref={_this} className={globalStyles['section']} >
      <Content />
    </section>
  )
}

export default Projects;