import React from "react";
import SkillListItem from "~/components/Skills/SkillListItem";
import styles from '~/styles/Skills.module.css';

const SkillList = ({ title, skills }) => {
  return (
    <article className={styles['skilllist-container']}>
      <h1>{ title }</h1>
      
      <ul className={styles['skilllist']}>
        {skills.map(skill => <SkillListItem key={skill} skill={skill} />) }
      </ul>
    </article>
  )
}

export default SkillList;