import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import projects from '~/data/projects.json';
import AnimatedLetters from "~/components/AnimatedLetters";
import ProjectItem from "~/components/Projects/ProjectItem";
import applySmoothScroll from "~/helpers/applySmoothScroll";
import animationVariants from "~/components/Projects/variants/content";
import styles from '~/styles/Projects.module.css';

const Content = () => {
  const projectsContainer = useRef();

  useEffect(() => applySmoothScroll(projectsContainer.current, 120, 24), [])

  return(
    <>
      <div className={styles['header-container']}>
        <motion.h2
          variants={animationVariants.letters}
        >
          <AnimatedLetters string={'Projects'} />
        </motion.h2>
      </div>

      <div ref={projectsContainer} className={styles['projects-container']}>
        <motion.ul
          variants={animationVariants.projects}
          className={styles['projects-list']}
        >
          {projects.data.map(project => <ProjectItem key={project.id} project={project} />)}
        </motion.ul>
      </div>
    </>
  )
}

export default Content