import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../components/DeveloperJourney/Banner';
import { CenterScreenContext } from "../context/CenterScreen";
import getCenterCoorsByEl from "../helpers/getCenterCoorsByEl";
import ExperienceItem from '../components/DeveloperJourney/ExperienceItem';
import experiences from '../data/experiences.json';
import styles from '../styles/DeveloperJourney.module.css'
import pageVariants from "./variants/pageTransitions";

const DeveloperJourney = () => {
  const MAX_PAGE = 4

  const [page, setPage] = useState(1)
  const [arrowRightPosition, setPositionForArrowRight] = useState({ top: 0, left: 0 })
  const [arrowLeftPosition, setPositionForArrowLeft] = useState({ top: 0, left: 0 })
  const arrowToRight = useRef()
  const arrowToLeft = useRef()
  const { centerScreenOriginEl } = useContext(CenterScreenContext)

  const next = () => setPage(page+1)
  const prev = () => setPage(page-1)

  useEffect(() => {
    setPositionForArrowRight(getCenterCoorsByEl(centerScreenOriginEl, arrowToRight))
    setPositionForArrowLeft(getCenterCoorsByEl(centerScreenOriginEl, arrowToLeft))
  }, [centerScreenOriginEl])

  return (
    <motion.div 
      variants={pageVariants.pageTransition} 
      initial="initial" 
      animate="animate" 
      exit="exit"
    >

      <svg
        onClick={prev}
        style={{ top: `${arrowLeftPosition.top}px`, left: `${arrowLeftPosition.left}px`, display: page === 1 ? 'none' : 'initial' }}
        ref={arrowToLeft}
        className={`floating-vector ${styles['vector-arrow-to-left']}`}
        fill='#FAFAFA'
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        >
        <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
      </svg>

      <AnimatePresence exitBeforeEnter>
        { page === 1 ? <Banner /> : null }
        { page === 2 ? <ExperienceItem data={experiences.data[0]} key={0} /> : null }
        { page === 3 ? <ExperienceItem data={experiences.data[1]} key={1} /> : null }
        { page === 4 ? <ExperienceItem data={experiences.data[2]} key={2} /> : null }
      </AnimatePresence>

      <svg
        onClick={next}
        style={{ top: `${arrowRightPosition.top}px`, left: `${arrowRightPosition.left}px`, display: page === MAX_PAGE ? 'none' : 'initial' }}
        ref={arrowToRight}
        className={`floating-vector ${styles['vector-arrow-to-right']}`}
        fill='#FAFAFA'
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd">
        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
      </svg>

    </motion.div>
  )
}

export default DeveloperJourney