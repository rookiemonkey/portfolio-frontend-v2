import React, { useRef } from "react";
import { motion } from "framer-motion";
import animations from '~/helpers/animations';
import animationVariants from "~/components/Projects/variants/projectItem";
import styles from '~/styles/Projects.module.css';

const ProjectItem = props => {
  const _this = useRef();
  const gradient = useRef();
  const { title, description, live_url, github_url, screenshot, type, technologies } = props.project;

  const handleOnHoverStart = () => {
    gradient.current.classList.remove(styles['dimmed'])
    gradient.current.classList.add(styles['projects-list-item-container-hovered'])
  }

  const handleOnHoverEnd = () => {
    gradient.current.classList.add(styles['dimmed'])
    gradient.current.classList.remove(styles['projects-list-item-container-hovered'])
  }

  return (
    <motion.li
      ref={_this}
      variants={animationVariants.scaleIn}
      onHoverStart={handleOnHoverStart}
      onHoverEnd={handleOnHoverEnd}
      className={styles['projects-list-item']} 
      style={{ backgroundImage: `url(${screenshot})` }}
    >
      <div
        ref={gradient}
        className={`${styles['projects-list-item-container']} ${styles['dimmed']}`}
      >
        <h3>{title}</h3>
      </div>
    </motion.li>
  )
}

export default ProjectItem;