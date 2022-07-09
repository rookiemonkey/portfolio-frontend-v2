import React from "react";
import { motion } from "framer-motion";
import projects from '~/data/projects.json';
import AnimatedLetters from "~/components/AnimatedLetters";
import ProjectItem from "~/components/Projects/ProjectItem";
import animationVariants from "~/components/Projects/variants/content";
import styles from '~/styles/Projects.module.css';

const Content = () => {

  return(
    <React.Fragment>
      
      <div className={styles['header-container']}>
        <motion.h2
          variants={animationVariants.letters}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AnimatedLetters string={'Projects'} />
        </motion.h2>
      </div>

      <div className={styles['projects-container']}>
        <motion.ul 
          variants={animationVariants.projects}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles['projects-list']}
        >
          { projects.data.map(project => <ProjectItem key={project.id} project={project} />) }
        </motion.ul>
      </div>

    </React.Fragment>
  )
}

export default Content