import React from 'react';
import Tilt from 'react-tilt'

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{max: 25}} style={{ height: '10rem', width: '10rem' }}>
        <div className="Tilt-inner ba b--blue bg-near-white" style={{ height: '100%', width: '100%' }}>

        </div>
      </Tilt>
    </div>
  )
}

export default Logo