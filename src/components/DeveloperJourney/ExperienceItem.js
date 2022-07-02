import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from '../../styles/DeveloperJourney.module.css';
import ExperienceItemContent from './ExperienceItemContent';
import SVGSelfStudy from './SVGSelfStudy';
import SVGOnlineClass from "./SVGOnlineClass";
import SVGWorking from "./SVGWorking";
import normalizeHeight from "../../helpers/normalizeHeight";
import animationVariants from "./variants/experienceItem";

const ExperienceItem = props => {
  const _this = useRef()
  const { title, duration, description, key, render_location } = props.data

  useEffect(() => normalizeHeight(_this), [])

  return (
    <motion.article
      variants={animationVariants.remove}
      exit="exit"
      ref={_this}
      className={`${styles['experiences_item']} ${styles[`experiences_item_${key}`]} `}>

      <motion.div 
        variants={animationVariants.experienceItem} 
        animate="animate"
        exit="exit"
        className={styles['left']}>
        {render_location === 'left' ? <ExperienceItemContent data={{ title, duration, description }} /> : null}
        {key === 1 ? <SVGSelfStudy className={`floating-vector ${styles['vector-self-study']}`} centerToEl={_this} /> : null}
        {key === 3 ? <SVGWorking className={`floating-vector ${styles['vector-working']}`} centerToEl={_this} /> : null}
      </motion.div>

      <motion.div 
        variants={animationVariants.experienceItem} 
        animate="animate"
        exit="exit" 
        className={styles['right']}>
        {render_location === 'right' ? <ExperienceItemContent data={{ title, duration, description }} /> : null}
        {key === 2 ? <SVGOnlineClass className={`floating-vector ${styles['vector-online-class']}`} centerToEl={_this} /> : null}
      </motion.div>

    </motion.article>
  )
}

export default ExperienceItem