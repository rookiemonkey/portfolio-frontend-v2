import React from "react";
import { motion } from "framer-motion";
import styles from '../../styles/DeveloperJourney.module.css';
import animationVariants from "./variants/experienceItem";

const ExperienceItemContent = ({ data }) => {
  const { title, duration, description } = data;

  return (
    <motion.div variants={animationVariants.fadein}>
      <div className={styles['experiences_item_header_container']}>
        <h1>{title}</h1>
        <h3>{duration}</h3>
      </div>
      <p>{description}</p>
    </motion.div>
  )
}

export default ExperienceItemContent;