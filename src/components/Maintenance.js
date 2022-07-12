import React from 'react';
import maintenance from '~/assets/maintenance.svg';
import styles from '~/styles/Components.module.css';

const Maintenance = () => {

  return (
    <section className={styles['maintenance']}>
      <img src={maintenance} alt="Maintenance"/>
      <h2>under maintenance</h2>
    </section>
  )
}

export default Maintenance;