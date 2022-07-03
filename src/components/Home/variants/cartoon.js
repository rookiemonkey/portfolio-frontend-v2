import variables from '../../../helpers/animations';

const cartoon = {
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

const fillGray = {
  'initial': {
    fill: '#00C5C6C7',
    opacity: 0
  },
  'animate': {
    fill: '#C5C6C7',
    opacity: 1
  },
  'exit': {
    fill: '#00C5C6C7',
    opacity: 0
  }
}

const fillBlue = {
  'initial': {
    fill: '#0066FCF1',
    opacity: 0
  },
  'animate': {
    fill: '#66FCF1',
    opacity: 1
  },
  'exit': {
    fill: '#0066FCF1',
    opacity: 0
  }
}

const fillHair = {
  'initial': {
    fill: '#004C3A35',
    opacity: 0
  },
  'animate': {
    fill: '#4C3A35',
    opacity: 1
  },
  'exit': {
    fill: '#004C3A35',
    opacity: 0
  }
}

const variants = {
  cartoon,
  fillGray,
  fillBlue,
  fillHair,
  scaleIn: variables.variants.scaleIn,
  customScaleIn: { ...variables.variants.scaleIn, animate: { opacity: .25, scale: 1 } }
}

export default variants;