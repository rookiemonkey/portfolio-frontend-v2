import React from "react";
import data from '~/data/skills.json';
import SkillList from "~/components/Skills/SkillList";

const Content = () => {
  
  return (
    <React.Fragment>

      {Object.keys(data).map(title => <SkillList key={title} title={title} skills={data[title]} />) }

    </React.Fragment>
  )
}

export default Content