import React from "react";
import { motion } from "framer-motion";
import Tooltip from '~/components/Tooltip';
import styles from '~/styles/Skills.module.css';

const SkillListItem = ({ skill }) => (
  <motion.li whileHover={{
      scale: 1.25,
      rotate: 360,
      transition: { duration: 0.25 },
    }} 
    className={styles['skilllist-item']}
  >
    <Tooltip content={skill} className={styles['skilllist-item-tooltip']} >
      <div className={styles['skilllist-item-img-container']}>
          <img 
            src={require(`~/assets/images/${skill.toLowerCase()}.png`)} 
            alt={skill} 
          />
      </div>
    </Tooltip>
  </motion.li>
)

export default SkillListItem;