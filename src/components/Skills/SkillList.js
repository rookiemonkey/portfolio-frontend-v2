import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedString from "~/components/AnimatedString";
import SkillListItem from "~/components/Skills/SkillListItem";
import animationVariants from "~/components/Skills/variants/skillList";
import styles from '~/styles/Skills.module.css';

const SkillList = ({ title, skills }) => {
  const _this = useRef();
  const [active, setActive] = useState(null)

  const handleHoverStart = () => _this.current.classList.add('skilllist-container-hovered')
  const handleHoverEnd = () => _this.current.classList.remove('skilllist-container-hovered')

  return (
    <motion.article 
      ref={_this}
      variants={animationVariants.listContainer}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={styles['skilllist-container']}
    >
      
      <div className={styles['left']}>
        <img src={require(`~/assets/${title.toLowerCase()}.svg`)} alt={title} />
      </div>

      <div className={styles['right']}>
        <div className={styles['skilllist-header']}>
          <h1>{<AnimatedString string={title} animateExit={false} />}</h1>

          <AnimatePresence exitBeforeEnter>
          { 
            active && (
              
                <motion.p variants={animationVariants.fadeIn} initial="initial" animate="animate" exit="exit">{active}</motion.p>
              
            ) 
          }
          </AnimatePresence>
        </div>

        <motion.ul
          className={styles['skilllist']}
          variants={animationVariants.list}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {skills.map(skill => <SkillListItem key={skill} skill={skill} setActive={setActive} />)}
        </motion.ul>
      </div>

    </motion.article>
  )
}

export default SkillList;