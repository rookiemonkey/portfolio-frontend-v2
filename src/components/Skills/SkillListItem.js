import React from "react";
import { motion } from "framer-motion";
import animationVariants from "~/components/Skills/variants/skillListItem";
import styles from '~/styles/Skills.module.css';

const SkillListItem = ({ skill }) => (
  <motion.li 
    className={styles['skilllist-item']}
    variants={animationVariants.fadeInFromBottom}
  >
    <div className={styles['skilllist-item-img-container']}>
      <img src={require(`~/assets/images/${skill.toLowerCase()}.png`)} alt={skill} />
    </div>
    <span>{skill}</span>
  </motion.li>
)

export default SkillListItem;