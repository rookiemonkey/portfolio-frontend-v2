import React from "react";
import { motion } from "framer-motion";
import styles from '~/styles/Skills.module.css';

const SkillListItem = ({ skill, delay }) => (
  <li className={styles['skilllist-item']}>
    <div className={styles['skilllist-item-img-container']}>
      <motion.img 
        whileHover={{
          scale: 1.25,
          rotate: 360,
          transition: { duration: 0.25 },
        }} 
        src={require(`~/assets/images/${skill.toLowerCase()}.png`)} 
        alt={skill} 
      />
    </div>
  </li>
)

export default SkillListItem;