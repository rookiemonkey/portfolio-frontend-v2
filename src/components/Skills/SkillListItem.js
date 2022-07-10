import React from "react";
import { motion } from "framer-motion";
import Tooltip from '~/components/Tooltip';
import animations from '~/helpers/animations';
import styles from '~/styles/Skills.module.css';

const SkillListItem = ({ skill }) => (
  <motion.li 
    whileHover={animations.hover.scaleAndRotate} 
    className={styles['skilllist-item']}
  >
    <Tooltip content={skill} className={styles['skilllist-item-tooltip']} >
      <div className={styles['skilllist-item-img-container']}>
          <img 
            src={require(`~/assets/images/skills/${skill.toLowerCase()}.png`)} 
            alt={skill} 
          />
      </div>
    </Tooltip>
  </motion.li>
)

export default SkillListItem;