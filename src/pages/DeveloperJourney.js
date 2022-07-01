import React, { useRef, useEffect } from 'react';
import styles from '../styles/DeveloperJourney.module.css';
import SVGDeveloperJourney from '../components/SVGDeveloperJourney';
import ExperienceItem from '../components/ExperienceItem';
import normalizeHeight from '../helpers/normalizeHeight';
import experiences from '../data/experiences.json';

const DeveloperJourney = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <React.Fragment>

      <header ref={_this} className={styles['header']} >
        <SVGDeveloperJourney />
      </header>

      <section className={styles['experiences']} >
        {experiences.data.map(data => <ExperienceItem data={data} key={data.key} />)}
      </section>

    </React.Fragment>
  )
}

export default DeveloperJourney