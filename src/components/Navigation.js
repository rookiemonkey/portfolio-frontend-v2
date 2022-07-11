import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import normalizeHeight from "~/helpers/normalizeHeight";
import styles from '~/styles/Components.module.css';
import cartoon from '~/assets/cartoon.png';

const Navigation = () => {
  const _this = useRef()

  useEffect(() => normalizeHeight(_this), [])

  return (
    <nav ref={_this} className={styles['navigation']}>

      <div className={styles['navigation-logo']}>
        <Link to='/'>
          <img src={cartoon} />
        </Link>
      </div>

      <div className={styles['navigation-links']}>
        <Link to='/'>
          Home
        </Link>
        <Link to='/skills'>
          Skills
        </Link>
        <Link to='/projects'>
          Projects
        </Link>
      </div>

      <div className={styles['navigation-footer']}>
      </div>

    </nav>
  )
}

export default Navigation;