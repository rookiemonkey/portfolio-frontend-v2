import React from "react";
import data from '~/data/skills.json';
import styles from '~/styles/Skills.module.css';
import SkillList from "~/components/Skills/SkillList";

const Content = () => {
  
  return (
    <React.Fragment>

      <div className={styles['left']}>
        <h1>LEFT</h1>
      </div>

      <div className={styles['right']}>
        {Object.keys(data).map(title => <SkillList key={title} title={title} skills={data[title]} />)}
      </div>

    </React.Fragment>
  )
}

export default Content