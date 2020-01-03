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
      imgUrl: '',
    };
  }

  onInputChange = ev => {
    this.setState({ input: ev.target.value })
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.setState({ imgUrl: this.state.input }, () => console.log(this.state.imgUrl))
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
        <FaceRecognition imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
