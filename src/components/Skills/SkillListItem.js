import React from "react";
import styles from '~/styles/Skills.module.css';

const SkillListItem = ({ skill }) => (
  <li className={styles['skilllist-item']}>
    <img src={require(`~/assets/images/${skill.toLowerCase()}.png`)} alt={skill} />
    {skill}
  </li>
)

export default SkillListItem;