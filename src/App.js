import React, { Component } from 'react';
import Header from './components/Header';
import ImageLink from './components/image-link/ImageLink';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Clarifai from 'clarifai';
import Signin from './components/SignIn';
import Register from './components/Register';
import UserRank from './components/UserRank/UserRank'

const app = new Clarifai.App({
  apiKey: 'e263d09d6e604310b00efcae3f385aa8',
});

const initialState = {
  input: '',
  imgUrl: '',
  faceBox: {},
  route: 'signin',
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: '',
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.name,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    }})

  }

  onInputChange = ev => {
    this.setState({ input: ev.target.value });
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          }).then(response => response.json)
            .then(count => {
              this.setState({
                users: {
                  entries: count
                }
              })
            })
        }
        this.faceBox(this.calcFaceLocation(response))
      })
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
      rightCol: imageWidth - faceData.right_col * imageWidth,
      bottomRow: imageHeight - faceData.bottom_row * imageHeight,
    };
  };

  faceBox = box => {
    this.setState({ faceBox: box });
  };

  onRouteChange = route => {
    if (route === 'signout') {
      this.setState(initialState)
    } 
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        {this.state.route === 'home' ? (
          <div>
            <Header onRouteChange={this.onRouteChange} />
            <UserRank userName={this.state.user.name} rank={this.state.user.entries} />
            <ImageLink
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition
              box={this.state.faceBox}
              imgUrl={this.state.imgUrl}
            />
          </div>
        ) : this.state.route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        )}
      </div>
    );
  }
}

export default App;
