import React, { useRef, useEffect } from 'react';
import styles from '../styles/DeveloperJourney.module.css';
import SVGDeveloperJourney from '../components/SVGDeveloperJourney';
import SVGCircles from '../components/SVGCircles';
import normalizeHeight from '../helpers/normalizeHeight';

const DeveloperJourney = () => {
  const header = useRef()

  useEffect(() => normalizeHeight(header), [])

  return (
    <React.Fragment>

      <header ref={header} className={styles['header']} >
        <SVGDeveloperJourney className={styles['developer-journey']} />
        <SVGCircles className={styles['circles']} leftOffset={0.1} topOffset={0.02} />
      </header>

    </React.Fragment>
  )
}

export default DeveloperJourney