import React from "react";
import { motion } from "framer-motion";
import AnimatedLetters from "~/components/AnimatedLetters";
import SkillListItem from "~/components/Skills/SkillListItem";
import animationVariants from "~/components/Skills/variants/skillList";
import styles from '~/styles/Skills.module.css';

const SkillList = ({ title, skills }) => {
  return (
    <article className={styles['skilllist-container']}>
      <motion.h1
        variants={animationVariants.letters}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AnimatedLetters string={title} />  
      </motion.h1>
      
      <motion.ul 
        className={styles['skilllist']}
        variants={animationVariants.list}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {skills.map(skill => <SkillListItem key={skill} skill={skill} />) }
      </motion.ul>
    </article>
  )
}

export default SkillList;