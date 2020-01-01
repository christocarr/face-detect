import React from 'react';
import Logo from './logo/Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="flex pa2">
      <Logo />
      <Nav />
    </header>
  )
}

export default Header