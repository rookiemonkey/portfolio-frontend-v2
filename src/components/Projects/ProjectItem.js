import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectItemTechnology from '~/components/Projects/ProjectItemTechnology';
import animationVariants from "~/components/Projects/variants/projectItem";
import styles from '~/styles/Projects.module.css';

const ProjectItem = props => {
  const _this = useRef();
  const gradientContainer = useRef();
  const titleContainer = useRef();
  const [isActive, setIsActive] = useState(false);
  const { title, live_url, github_url, filename, technologies } = props.project;

  const handleOnHoverStart = () => {
    setIsActive(true)
    gradientContainer.current.classList.remove(styles['dimmed'])
    gradientContainer.current.classList.add(styles['projects-list-item-container-hovered'])
    titleContainer.current.classList.add('seek-attention')
  }

  const handleOnHoverEnd = () => {
    setIsActive(false)
    gradientContainer.current.classList.add(styles['dimmed'])
    gradientContainer.current.classList.remove(styles['projects-list-item-container-hovered'])
    titleContainer.current.classList.remove('seek-attention')
  }

  const handleAnimationEnd = () => setTimeout(() => gradientContainer.current.classList.add(styles['dimmed']), 100)

  return (
    <motion.li
      ref={_this}
      variants={{ ...animationVariants.scaleIn, exit:{} }}
      onAnimationComplete={handleAnimationEnd}
      onHoverStart={handleOnHoverStart}
      onHoverEnd={handleOnHoverEnd}
      className={styles['projects-list-item']} 
      style={{ backgroundImage: `url(${require('~/assets/images/projects/' + filename) })` }}
    >
      <div
        ref={gradientContainer}
        className={styles['projects-list-item-container']}
      >
        <h3 ref={titleContainer}>{title}</h3>

        {
          isActive
          ? (
            <React.Fragment>
              <motion.ul
                variants={animationVariants.technologies}
                initial="initial"
                animate="animate"
                exit="exit"
                className={styles['project-list-item-technologies']}
              >
                {technologies.map(tech => <ProjectItemTechnology key={tech} tech={tech} />)}
              </motion.ul>

              <motion.div
                variants={animationVariants.technologies}
                initial="initial"
                animate="animate"
                exit="exit"
                className={styles['project-list-item-links']}
              >
                {(live_url && <motion.a 
                    variants={animationVariants.fadeInFromBottom}
                    href={live_url} 
                    target="_blank"
                    >
                    <svg height={40} width={40} viewBox="0 -5 30 30">
                      <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                    </svg>
                  </motion.a>)
                }
                {
                  (github_url && <motion.a 
                    variants={animationVariants.fadeInFromBottom}
                    href={github_url} 
                    target="_blank"
                    >
                      <svg height={40} width={40} viewBox="0 -5 30 30">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  )
                }
              </motion.div>
            </React.Fragment>
          )
          : null
        }

      </div>
    </motion.li>
  )
}

export default ProjectItem;