import React from "react";
import { motion } from "framer-motion";
import animationVariants from "~/components/Projects/variants/projectItem";
import styles from '~/styles/Projects.module.css';

const ProjectItemTechnology = ({ tech }) => {

  return (
    <motion.li
      variants={animationVariants.scaleIn}
      className={styles['project-list-item-technologies-item']}
    >
      <img
        src={require(`~/assets/images/skills/${tech.toLowerCase()}.png`)}
        alt={tech}
      />
    </motion.li>
  )
}

export default ProjectItemTechnology;