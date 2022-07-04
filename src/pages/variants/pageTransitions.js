import variables from '../../helpers/animations';

const pageTransition = {
  'initial': {
    ...variables.initial_exit.hiddenFadeIn
  },
  'animate': {
    ...variables.animate.animateFadeIn,
    transition: {
      when: "beforeChildren",
      delayChildren: variables.values.delay_for_children,
      staggerChildren: variables.values.delay_for_staggered_children
    }
  },
  'exit': {
    transition: {
      when: "afterChildren",
      staggerChildren: variables.values.delay_for_staggered_children,
      staggerDirection: -1
    }
  }
}

const variants = {
  pageTransition
}

export default variants;