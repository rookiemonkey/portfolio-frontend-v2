import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillListItem from "~/components/Skills/SkillListItem";
import animationVariants from "~/components/Skills/variants/skillList";
import styles from '~/styles/Skills.module.css';

const SkillList = ({ title, skills }) => {
  const _this = useRef();

  const handleHoverStart = () => _this.current.classList.add(styles['skilllist-container-hovered'])
  const handleHoverEnd = () => _this.current.classList.remove(styles['skilllist-container-hovered'])

  return (
    <motion.article 
      ref={_this}
      variants={animationVariants.listContainer}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={styles['skilllist-container']}
    >
      <h1>{ title }</h1>
      
      <motion.ul 
        className={styles['skilllist']}
        variants={animationVariants.list}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {skills.map((skill, index) => <SkillListItem key={skill} skill={skill} delay={index} />) }
      </motion.ul>
    </motion.article>
  )
}

export default SkillList;