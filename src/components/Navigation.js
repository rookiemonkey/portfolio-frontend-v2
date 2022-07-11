import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import normalizeHeight from "~/helpers/normalizeHeight";
import styles from '~/styles/Components.module.css';
import cartoon from '~/assets/cartoon.png';

const Navigation = () => {
  const _this = useRef()
  const navigationLinks = useRef()

  useEffect(() => normalizeHeight(_this), [])

  const onHoverStart = ({ target }) => {
    target.querySelector('a').classList.add('hovered')
    navigationLinks.current.classList.add('navigation-links-hovered')
  }

  const onHoverEnd = ({ target }) => {
    target.querySelector('a').classList.remove('hovered')
    navigationLinks.current.classList.remove('navigation-links-hovered')
  }

  return (
    <nav ref={_this} className={styles['navigation']}>

      <div className={styles['navigation-logo']}>
        <Link to='/'>
          <img src={cartoon} alt="Cartoon" />
        </Link>
      </div>

      <div ref={navigationLinks} className={styles['navigation-links']}>
        <motion.span onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
          <Link to='/'>
            Home
          </Link>
        </motion.span>

        <motion.span onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
          <Link to='/skills'>
            Skills
          </Link>
        </motion.span>

        <motion.span onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
          <Link to='/projects'>
            Projects
          </Link>
        </motion.span>
      </div>

      <div className={styles['navigation-footer']}>
      </div>

    </nav>
  )
}

export default Navigation;