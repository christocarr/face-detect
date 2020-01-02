import React, { Component } from 'react';
import Header from './components/Header';
import ImageLink from './components/image-link/ImageLink';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = ev => {
    console.log(ev.target.value);
  };

  onSubmit = ev => {
    ev.preventDefault()
    console.log('click');
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ImageLink
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {/*<FaceRegocnition /> */}
      </div>
    );
  }
}

export default App;
