const delay_for_children = .25
const delay_for_staggered_children = .15

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

const animateFadeInFromBottom = {
  opacity: 1,
  y: 0
}

const animateFadeInFromTop = {
  opacity: 1,
  y: 0
}

// END animate

// START premade variants

const remove = {
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

const variables = {
  initial_exit: {
    hiddenScaleIn,
    hiddenFadeIn,
    hiddenFadeInFromLeft,
    hiddenFadeInFromBottom,
    hiddenFadeInFromTop
  },
  animate: {
    animateScaleIn,
    animateFadeIn,
    animateFadeInFromLeft,
    animateFadeInFromBottom,
    animateFadeInFromTop
  },
  variants: {
    remove,
    scaleIn,
    fadeIn,
    fadeInFromLeft,
    fadeInFromBottom,
    fadeInFromTop
  },
  values: {
    delay_for_children,
    delay_for_staggered_children
  }
}

export default variables;