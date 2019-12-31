import React from 'react';
import Logo from './logo/Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="flex">
      <Logo />
      <Nav />
    </header>
  )
}

export default Header