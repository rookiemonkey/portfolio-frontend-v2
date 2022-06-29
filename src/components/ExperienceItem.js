import React from "react";
import styles from '../styles/DeveloperJourney.module.css';

const ExperienceItem = props => {
  const { title, duration, description, key } = props.data

  return (
    <article className={`${styles['experiences_item']} ${styles[`experiences_item_${key}`]} `}>
      <div className={styles['experiences_item_header_container']}>
        <h1>{title}</h1>
        <h3>{duration}</h3>
      </div>
      <p>{ description }</p>
    </article>
  )
}

export default ExperienceItem