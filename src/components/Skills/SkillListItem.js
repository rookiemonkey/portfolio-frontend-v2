import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from '~/styles/Skills.module.css';

const SkillListItem = ({ skill, setActive }) => {
  const _this = useRef();

  const onHoverStart = () => {
    setActive(skill)
    _this.current.classList.add(styles['skilllist-item-hovered'])
  }

  const onHoverEnd = () => {
    setActive(null)
    _this.current.classList.remove(styles['skilllist-item-hovered'])
  }

  return (
    <motion.li
      ref={_this}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={styles['skilllist-item']}
    >
      <div className={styles['skilllist-item-img-container']}>
        <img
          src={require(`~/assets/images/skills/${skill.toLowerCase()}.png`)}
          alt={skill}
        />
      </div>
    </motion.li>
  )
}

export default SkillListItem;