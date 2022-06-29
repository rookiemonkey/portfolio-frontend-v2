import React, { useRef, useEffect } from 'react';
import styles from '../styles/DeveloperJourney.module.css';
import SVGDeveloperJourney from '../components/SVGDeveloperJourney';
import SVGCircles from '../components/SVGCircles';
import ExperienceItem from '../components/ExperienceItem';
import normalizeHeight from '../helpers/normalizeHeight';
import experiences from '../data/experiences.json';

const DeveloperJourney = () => {
  const header = useRef()

  useEffect(() => normalizeHeight(header), [])

  return (
    <React.Fragment>

      <header ref={header} className={styles['header']} >
        <SVGDeveloperJourney className={styles['developer-journey']} />
        <SVGCircles className={styles['circles']}  />
      </header>

      <section className={styles['experiences']} >
        {experiences.data.map(data => <ExperienceItem data={data} key={data.key} />)}
      </section>

    </React.Fragment>
  )
}

export default DeveloperJourney