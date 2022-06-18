import React from 'react';
import Relative from './Relative';
import Float from './Float';
import { ReactComponent as Halftone } from '../assets/images/halftone1.svg';

const Backdrop = props => {
  return (
    <main className='backdrop'>
      
      <Relative>
        <Float leftOffset={350} topOffset={5} zindex={0} >
          <Halftone className='halftone'/>
        </Float>
      </Relative>

      { props.children }
    </main>
  )
}

export default Backdrop
