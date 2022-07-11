import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import normalizeHeight from "~/helpers/normalizeHeight";
import animations from '~/helpers/animations';
import styles from '~/styles/Components.module.css';
import cartoon from '~/assets/cartoon.png';
import reactimg from '~/assets/images/skills/react.png';

const Navigation = () => {
  const _this = useRef()
  const { pathname } = useLocation();
  const navigationLinks = useRef()

  useEffect(() => normalizeHeight(_this), [])

  console.log(pathname)

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
        <motion.span onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} className={pathname === '/' ? styles['active'] : '' }>
          <Link to='/'>
            Home
          </Link>
        </motion.span>

        <motion.span onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} className={pathname === '/skills' ? styles['active'] : '' }>
          <Link to='/skills'>
            Skills
          </Link>
        </motion.span>

        <motion.span onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} className={pathname === '/projects' ? styles['active'] : '' }>
          <Link to='/projects'>
            Projects
          </Link>
        </motion.span>
      </div>

      <div className={styles['navigation-footer']}>
        <span>made with</span>
        <motion.img  whileHover={animations.hover.rotate} src={reactimg} alt="react" title="ReactJS" />
      </div>

    </nav>
  )
}

export default Navigation;