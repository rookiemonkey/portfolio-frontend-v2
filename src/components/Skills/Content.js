import React from "react";
import data from '../../data/skills.json';
import SkillList from "./SkillList";

const Content = () => {
  
  return (
    <React.Fragment>

      { Object.keys(data).map(title => <SkillList title={title} skills={data[title]} />) }

    </React.Fragment>
  )
}

export default Content