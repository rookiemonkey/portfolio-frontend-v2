import variables from '~/helpers/animations';

const listContainer = {
  'initial': {
    ...variables.initial_exit.hiddenFadeInFromRight
  },
  'animate': {
    ...variables.animate.animateFadeInFromRight,
    transition: {
      when: "beforeChildren",
      delayChildren: variables.values.delay_for_children,
      staggerChildren: variables.values.delay_for_staggered_children
    }
  },
  'exit': {
    ...variables.initial_exit.hiddenFadeInFromRight,
    transition: {
      when: "afterChildren",
      staggerChildren: variables.values.delay_for_staggered_children,
      staggerDirection: -1
    }
  }
}

const list = {
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
  listContainer,
  list
}

export default variants;