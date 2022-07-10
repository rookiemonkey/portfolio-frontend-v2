const delay_for_children = .10
const delay_for_staggered_children = .10

// START initial & exit

const hiddenScaleIn = {
  opacity: 0,
  scale: 0
}

const hiddenFadeIn = {
  opacity: 0
}

const hiddenFadeInFromLeft = {
  opacity: 0,
  x: -99
}

const hiddenFadeInFromRight = {
  opacity: 0,
  x: 99
}

const hiddenFadeInFromBottom = {
  opacity: 0,
  y: 99
}

const hiddenFadeInFromTop = {
  opacity: 0,
  y: -99
}

// END initial & exit

// START animate

const animateScaleIn = {
  opacity: 1,
  scale: 1
}

const animateFadeIn = {
  opacity: 1
}

const animateFadeInFromLeft = {
  opacity: 1,
  x: 0
}

const animateFadeInFromRight = {
  opacity: 1,
  x: 0
}

const animateFadeInFromBottom = {
  opacity: 1,
  y: 0
}

const animateFadeInFromTop = {
  opacity: 1,
  y: 0
}

// END animate

// START premade hover

const scaleAndRotate = {
  scale: 1.25,
  rotate: 360,
  transition: { duration: 0.25 },
}

const rotate = {
  rotate: 360,
  transition: { duration: 0.25 },
}

const scale = {
  scale: 1.25,
  transition: { duration: 0.25 },
}

// END premade hover

// START premade variants

const remove = {
  'animate': {
    transition: {
      when: "beforeChildren",
    }
  },
  'exit': { 
    transition: {
      when: "afterChildren",
    }
  }
}

const scaleIn = {
  'initial': { ...hiddenScaleIn  },
  'animate': { ...animateScaleIn },
  'exit': { ...hiddenScaleIn }
}

const fadeIn = {
  'initial': { ...hiddenFadeIn },
  'animate': { ...animateFadeIn },
  'exit': { ...hiddenFadeIn }
}

const fadeInFromLeft = {
  'initial': { ...hiddenFadeInFromLeft },
  'animate': { ...animateFadeInFromLeft },
  'exit': { ...hiddenFadeInFromLeft }
}

const fadeInFromRight = {
  'initial': { ...hiddenFadeInFromRight },
  'animate': { ...animateFadeInFromRight },
  'exit': { ...hiddenFadeInFromRight }
}

const fadeInFromBottom = {
  'initial': { ...hiddenFadeInFromBottom },
  'animate': { ...animateFadeInFromBottom },
  'exit': { ...hiddenFadeInFromBottom }
}

const fadeInFromTop = {
  'initial': { ...hiddenFadeInFromTop },
  'animate': { ...animateFadeInFromTop },
  'exit': { ...hiddenFadeInFromTop }
}

// END premade variants

const exitParentImmediately = {
  'animate': {
    transition: {
      when: "beforeChildren",
      delayChildren: delay_for_children,
      staggerChildren: delay_for_staggered_children
    }
  },
  'exit': {
    transition: {
      when: "beforeChildren"
    }
  }
}

const variables = {
  initial_exit: {
    hiddenScaleIn,
    hiddenFadeIn,
    hiddenFadeInFromLeft,
    hiddenFadeInFromRight,
    hiddenFadeInFromBottom,
    hiddenFadeInFromTop
  },
  animate: {
    animateScaleIn,
    animateFadeIn,
    animateFadeInFromLeft,
    animateFadeInFromRight,
    animateFadeInFromBottom,
    animateFadeInFromTop
  },
  variants: {
    exitParentImmediately,
    remove,
    scaleIn,
    fadeIn,
    fadeInFromLeft,
    fadeInFromRight,
    fadeInFromBottom,
    fadeInFromTop
  },
  values: {
    delay_for_children,
    delay_for_staggered_children
  },
  hover: {
    scale,
    rotate,
    scaleAndRotate
  }
}

export default variables;