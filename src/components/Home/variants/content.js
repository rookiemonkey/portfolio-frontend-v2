import variables from '../../../helpers/animations';

const content = {
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
  content,
  fadeInFromTop: variables.variants.fadeInFromTop,
  fadeInFromLeft: variables.variants.fadeInFromLeft,
  fadeInFromBottom: variables.variants.fadeInFromBottom
}

export default variants;