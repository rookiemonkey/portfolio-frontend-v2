import variables from '../.../../../../helpers/animations';

const experienceItem = {
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
    ...variables.initial_exit.hiddenFadeIn,
    transition: {
      when: "afterChildren",
      staggerChildren: variables.values.delay_for_staggered_children,
      staggerDirection: -1
    }
  }
}

const experienceItemTexts = {
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
    ...variables.initial_exit.hiddenFadeIn,
    transition: {
      when: "afterChildren",
      staggerChildren: variables.values.delay_for_staggered_children,
      staggerDirection: -1
    }
  }
}

const variants = {
  remove: variables.variants.remove,
  fadein: variables.variants.fadeIn,
  experienceItem,
  experienceItemTexts
}

export default variants;