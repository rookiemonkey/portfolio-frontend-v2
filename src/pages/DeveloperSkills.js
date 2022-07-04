import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SVGFrontEnd from '../components/DeveloperSkills/SVGFrontEnd';
import normalizeHeight from '../helpers/normalizeHeight';
import pageVariants from "./variants/pageTransitions";

const DeveloperSkills = () => {
  const MAX_PAGE = 3

  const [page, setPage] = useState(1)
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  const next = () => setPage(page + 1)
  const prev = () => setPage(page - 1)

  return (
    <motion.div
      variants={pageVariants.pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={_this}
    >

      <AnimatePresence exitBeforeEnter>
        {page === 1 ? <SVGFrontEnd /> : null}
      </AnimatePresence>

    </motion.div>
  )
}

export default DeveloperSkills;