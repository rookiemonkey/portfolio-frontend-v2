import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from '../../styles/DeveloperJourney.module.css';
import SVGDeveloperJourney from './SVGDeveloperJourney';
import normalizeHeight from "../../helpers/normalizeHeight";
import animationVariants from "./variants/experienceItem";

const Banner = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <motion.header variants={animationVariants.remove} exit="exit" ref={_this} className={styles['header']} >
      <SVGDeveloperJourney />
    </motion.header>
  )
}

export default Banner;