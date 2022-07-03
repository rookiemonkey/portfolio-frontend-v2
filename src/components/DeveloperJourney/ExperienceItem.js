import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from '../../styles/DeveloperJourney.module.css';
import SVGSelfStudy from './SVGSelfStudy';
import SVGOnlineClass from "./SVGOnlineClass";
import SVGWorking from "./SVGWorking";
import normalizeHeight from "../../helpers/normalizeHeight";
import animationVariants from "./variants/experienceItem";

const ExperienceItem = props => {
  const _this = useRef()
  const { title, duration, description, key } = props.data

  useEffect(() => normalizeHeight(_this), [])

  return (
    <article 
      variants={animationVariants.experienceItem}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={_this} 
      className={`${styles['experiences_item']}`}
    >

      <div className={styles['left']}>
        {key === 1 ? <SVGSelfStudy centerToEl={_this} /> : null}
        {key === 2 ? <SVGOnlineClass centerToEl={_this} /> : null}
        {key === 3 ? <SVGWorking centerToEl={_this} /> : null}
      </div>

      <motion.div variants={animationVariants.experienceItemTexts} initial="initial" animate="animate" exit="exit" className={styles['right']}>
        <motion.div variants={animationVariants.fadein} className={styles['experiences_item_header_container']}>
          <h1>{title}</h1>
          <h3>{duration}</h3>
        </motion.div>
        <motion.p variants={animationVariants.fadein} >{description}</motion.p>
      </motion.div>

    </article>
  )
}

export default ExperienceItem