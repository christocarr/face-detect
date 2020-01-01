import React from 'react';
import Tilt from 'react-tilt'
import icon from './icon.svg'

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{max: 25}} style={{ height: '5rem', width: '5rem' }}>
        <div className="Tilt-inner bg-near-white shadow-5" style={{ height: '100%', width: '100%' }}>
          <img src={icon} alt="icon"/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo