import React from "react";
import styles from '~/styles/Skills.module.css';

const SkillListItem = ({ skill }) => (
  <li className={styles['skilllist-item']}>
    <div className={styles['skilllist-item-img-container']}>
      <img src={require(`~/assets/images/${skill.toLowerCase()}.png`)} alt={skill} />
    </div>
    <span>{skill}</span>
  </li>
)

export default SkillListItem;