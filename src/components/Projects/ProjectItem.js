import React, { useRef } from "react";
import { motion } from "framer-motion";
import animations from '~/helpers/animations';
import animationVariants from "~/components/Projects/variants/projectItem";
import styles from '~/styles/Projects.module.css';

const ProjectItem = props => {
  const _this = useRef();
  const gradientContainer = useRef();
  const titleContainer = useRef();
  const { title, description, live_url, github_url, screenshot, type, technologies } = props.project;

  const handleOnHoverStart = () => {
    gradientContainer.current.classList.remove(styles['dimmed'])
    gradientContainer.current.classList.add(styles['projects-list-item-container-hovered'])
    titleContainer.current.classList.add('seek-attention')
  }

  const handleOnHoverEnd = () => {
    gradientContainer.current.classList.add(styles['dimmed'])
    gradientContainer.current.classList.remove(styles['projects-list-item-container-hovered'])
    titleContainer.current.classList.remove('seek-attention')
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
        ref={gradientContainer}
        className={`${styles['projects-list-item-container']} ${styles['dimmed']}`}
      >
        <h3 ref={titleContainer}>{title}</h3>
      </div>
    </motion.li>
  )
}

export default ProjectItem;