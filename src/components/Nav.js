import React from 'react';

const Nav = ({ onRouteChange }) => {
  return (
    <nav>
      <p onClick={() => onRouteChange('signin')} className="link dim blue underline pointer fr ma0">Sign Out</p>
    </nav>
  )
}

export default Nav