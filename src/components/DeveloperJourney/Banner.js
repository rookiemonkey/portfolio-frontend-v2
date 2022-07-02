import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from '../../styles/DeveloperJourney.module.css';
import SVGDeveloperJourney from './SVGDeveloperJourney';
import normalizeHeight from "../../helpers/normalizeHeight";
import animationVariables from "../../helpers/animations";

const Banner = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <motion.header exit={animationVariables.variants.remove} ref={_this} className={styles['header']} >
      <SVGDeveloperJourney />
    </motion.header>
  )
}

export default Banner;