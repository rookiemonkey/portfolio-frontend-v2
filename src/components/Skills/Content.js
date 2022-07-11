import React from "react";
import { motion } from "framer-motion";
import data from '~/data/skills.json';
import AnimatedLetters from "~/components/AnimatedLetters";
import SkillList from "~/components/Skills/SkillList";
import animationVariants from "~/components/Skills/variants/content";
import styles from '~/styles/Skills.module.css';

const Content = () => {
  
  return (
    <React.Fragment>

      <motion.div 
        variants={animationVariants.content}
        className={styles['left']}
      >
        <motion.h2
          variants={animationVariants.letters}

        >
          <AnimatedLetters string={'Skills &*Tools'} />  
        </motion.h2> <br />

        <motion.p variants={animationVariants.fadeInFromLeft}>
            These are the tech skills that i've acquired thru online tutorials, tech blogs, and taking udemy courses, harnessed by project-based learning and coding at least a few hours a day. As much as possible, I create the given task/feature before watching the solution in order for me to identify what should I improve.
        </motion.p> <br/>

        <motion.p variants={animationVariants.fadeInFromLeft}>
          After spending my time studying on my own, I enrolled on a full-stack development coding offered by <a href="https://www.avionschool.com/" target="_blank" rel="noreferrer">Avion School</a> to see what else I can do, to be able to meet senior developers that spent a few years in the industry already, also help me with my job placement. I graduated last May 2021 and I really enjoyed learning especially when we do pair programming.
        </motion.p> <br />

        <motion.p variants={animationVariants.fadeInFromLeft}>
          On my spare time I still watch videos about latest tech especially related to cryptocurrency, sing inside the bathroom &#x1F601;, play my guitar or piano &#x1F3B5;, or play some games while hvaing my coffee &#x1F3AE; &#x1F375;.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={animationVariants.content}
        className={styles['right']}
      >
        {Object.keys(data).map(title => <SkillList key={title} title={title} skills={data[title]} />)}
      </motion.div>

    </React.Fragment>
  )
}

export default Content