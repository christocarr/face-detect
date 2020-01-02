import React, { Component } from 'react';
import Header from './components/Header'
import ImageLink from './components/image-link/ImageLink'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ImageLink />
        {/*<FaceRegocnition /> */}
      </div>
    );
  }
}

export default App;
