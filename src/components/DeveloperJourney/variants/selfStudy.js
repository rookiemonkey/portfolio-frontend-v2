import variables from '../../../helpers/animations';

const vector = {
  'initial': {},
  'animate': {
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
  vector,
  scaleIn: variables.variants.scaleIn,
  fadeInFromTop: variables.variants.fadeInFromTop,
  fadeInFromBottom: { ...variables.variants.fadeInFromBottom, exit: variables.initial_exit.hiddenFadeInFromTop }
}

export default variants;