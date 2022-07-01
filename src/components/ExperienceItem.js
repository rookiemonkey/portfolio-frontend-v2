import React, { useEffect, useRef } from "react";
import styles from '../styles/DeveloperJourney.module.css';
import ExperienceItemContent from './ExperienceItemContent';
import SVGSelfStudy from './SVGSelfStudy';
import normalizeHeight from "../helpers/normalizeHeight";

const ExperienceItem = props => {
  const _this = useRef()
  const { title, duration, description, key, render_location } = props.data

  useEffect(() => normalizeHeight(_this), [])

  return (
    <article 
      ref={_this}
      className={`${styles['experiences_item']} ${styles[`experiences_item_${key}`]} `}>

      <div className={styles['left']}>
        {render_location === 'left' ? <ExperienceItemContent data={{ title, duration, description }} /> : null}
        {key === 1 ? <SVGSelfStudy className={`floating-vector ${styles['vector-self-study']}`} centerToEl={_this} /> : null}
      </div>

      <div className={styles['right']}>
        {render_location === 'right' ? <ExperienceItemContent data={{ title, duration, description }} /> : null}
      </div>

    </article>
  )
}

export default ExperienceItem