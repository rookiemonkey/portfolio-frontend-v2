import React, { useRef, useEffect } from 'react';
import globalStyles from '~/styles/Components.module.css';
import styles from '~/styles/Skills.module.css';
import Content from '~/components/Skills/Content';
import normalizeHeight from '~/helpers/normalizeHeight';

const Projects = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <div className={globalStyles['page-container']}>

      <section ref={_this} className={`${globalStyles['section']} ${styles['section']}`} >
        <Content />
      </section>

    </div>
  )
}

export default Projects