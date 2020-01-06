import React from 'react';
import Logo from './logo/Logo';
import Nav from './Nav';

const Header = ({ onRouteChange }) => {
  return (
    <header className="flex pa2">
      <Logo />
      <Nav onRouteChange={onRouteChange} />
    </header>
  )
}

export default Header