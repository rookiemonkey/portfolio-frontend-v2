import React from "react";
import styles from '../styles/DeveloperJourney.module.css';
import ExperienceItemContent from './ExperienceItemContent';

const ExperienceItem = props => {
  const { title, duration, description, key, render_location } = props.data

  console.log(props.data)

  return (
    <article className={`${styles['experiences_item']} ${styles[`experiences_item_${key}`]} `}>

      <div className={styles['left']}>
        {render_location === 'left' ? <ExperienceItemContent data={{ title, duration, description }} /> : null}
      </div>

      <div className={styles['right']}>
        {render_location === 'right' ? <ExperienceItemContent data={{ title, duration, description }} /> : null}
      </div>

    </article>
  )
}

export default ExperienceItem