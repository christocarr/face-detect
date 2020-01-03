import React, { Component } from 'react';
import Header from './components/Header';
import ImageLink from './components/image-link/ImageLink';
import './App.css';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition';

const app = new Clarifai.App({
  apiKey: 'e263d09d6e604310b00efcae3f385aa8',
});

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
    ev.preventDefault();
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        'https://samples.clarifai.com/metro-north.jpg'
      )
      .then(
        function(response) {
          console.log(response);
        },
        function(err) {}
      );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ImageLink
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
