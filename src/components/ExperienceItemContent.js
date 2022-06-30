import React from "react";
import styles from '../styles/DeveloperJourney.module.css';

const ExperienceItemContent = ({ data }) => {
  const { title, duration, description } = data;

  return (
    <React.Fragment>
      <div className={styles['experiences_item_header_container']}>
        <h1>{title}</h1>
        <h3>{duration}</h3>
      </div>
      <p>{description}</p>
    </React.Fragment>
  )
}

export default ExperienceItemContent;