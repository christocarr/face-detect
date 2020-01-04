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
      faceBox: '',
    };
  }

  onInputChange = ev => {
    this.setState({ input: ev.target.value });
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.setState({ imgUrl: this.state.input }, () =>
      console.log(this.state.imgUrl)
    );
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.faceBox(this.calcFaceLocation(response)))
      .catch(err => console.log(err));
  };

  calcFaceLocation = data => {
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('image');
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);
    return {
      leftCol: faceData.left_col * imageWidth,
      topRow: faceData.top_row * imageHeight,
      rightCol: imageWidth - faceData.left_col * imageWidth,
      bottomRow: imageHeight - faceData.top_row * imageHeight,
    };
  };

  faceBox = box => {
    this.setState({ faceBox: box });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ImageLink
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition box={this.state.faceBox} imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
