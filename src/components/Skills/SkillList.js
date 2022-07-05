import React from "react";
import SkillListItem from "~/components/Skills/SkillListItem";

const SkillList = ({ title, skills }) => {
  return (
    <article>
      <h1>{ title }</h1>
      
      <ul>
        { skills.map(skill => <SkillListItem skill={skill} />) }
      </ul>
    </article>
  )
}

export default SkillList;