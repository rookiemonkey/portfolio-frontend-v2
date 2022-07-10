import variables from '~/helpers/animations';

const technologies = {
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
  technologies,
  fadeInFromBottom: variables.variants.fadeInFromBottom,
  scaleIn: variables.variants.scaleIn
}

export default variants;