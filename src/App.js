import React from 'react';
import Nav from './components/Nav';
import Logo from './components/logo/Logo';
import ImageLink from './components/image-link/ImageLink'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Logo />
      <ImageLink />
      {/*<FaceRegocnition /> */}
    </div>
  );
}

export default App;
