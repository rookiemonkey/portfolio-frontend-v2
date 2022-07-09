import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';

export const Tooltip = ({ content, children, className }) => {
  const springConfig = { damping: 15, stiffness: 120 };
  const initialTranslateY = -5;
  const opacity = useSpring(0, springConfig);
  const translateY = useSpring(initialTranslateY, springConfig);

  const onMount = () =>{
    translateY.set(5);
    opacity.set(1);
  }

  const onHide = ({ unmount }) => {
    const cleanup = translateY.onChange(value => {
      if (value <= initialTranslateY) {
        cleanup();
        unmount();
      }
    });

    translateY.set(initialTranslateY);
    opacity.set(0);
  }

  return (
    <Tippy
      placement="bottom"
      animation={true}
      onMount={onMount}
      onHide={onHide}
      hideOnClick={false}
      render={attrs => <motion.div className={className} {...attrs} style={{ translateY, opacity }}> {content} </motion.div>}
    >
      {children}
    </Tippy>
  );
};


export default Tooltip;