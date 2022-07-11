import React, { useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { GreetingsContext } from "~/context/Greetings";
import normalizeHeight from "~/helpers/normalizeHeight";
import pageAnimations from '~/pages/variants/pageTransitions';
import animations from '~/helpers/animations';
import styles from '~/styles/Components.module.css';
import cartoon from '~/assets/cartoon.png';
import reactimg from '~/assets/images/skills/react.png';

const Navigation = () => {
  const { hasGreeted } = useContext(GreetingsContext);
  const controls = useAnimation()
  const _this = useRef();
  const { pathname } = useLocation();
  const navigationLinks = useRef();

  useEffect(() => normalizeHeight(_this), [])

  useEffect(() => { (function () { if (!hasGreeted) return null; controls.start('animate') })() }, [hasGreeted, controls])

  const onHoverStart = ({ target }) => {
    target.querySelector('a').classList.add('hovered')
    navigationLinks.current.classList.add('navigation-links-hovered')
  }

  const onHoverEnd = ({ target }) => {
    target.querySelector('a').classList.remove('hovered')
    navigationLinks.current.classList.remove('navigation-links-hovered')
  }

  return (
    <motion.nav 
      variants={pageAnimations.pageTransition}
      initial="initial"
      animate={controls}
      exit="exit"
      ref={_this} 
      className={styles['navigation']}
    >

      <motion.div variants={animations.variants.fadeInFromLeft} className={styles['navigation-logo']}>
        <Link to='/'>
          <img src={cartoon} alt="Cartoon" />
        </Link>
      </motion.div>

      <div ref={navigationLinks} className={styles['navigation-links']}>
        <motion.span 
          variants={animations.variants.fadeInFromLeft} 
          onHoverStart={onHoverStart} 
          onHoverEnd={onHoverEnd} 
          className={pathname === '/' ? styles['active'] : '' }
        >
          <Link to='/'>
            Home
          </Link>
        </motion.span>

        <motion.span 
          variants={animations.variants.fadeInFromLeft}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          className={pathname === '/skills' ? styles['active'] : '' }
        >
          <Link to='/skills'>
            Skills
          </Link>
        </motion.span>

        <motion.span
          variants={animations.variants.fadeInFromLeft}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          className={pathname === '/projects' ? styles['active'] : '' }
        >
          <Link to='/projects'>
            Projects
          </Link>
        </motion.span>
      </div>

      <div className={styles['navigation-footer']}>
        <motion.span variants={animations.variants.fadeInFromLeft}>made with</motion.span>
        <motion.img variants={animations.variants.fadeInFromLeft} className="react-logo" src={reactimg} alt="react" title="ReactJS" />
      </div>

    </motion.nav>
  )
}

export default Navigation;