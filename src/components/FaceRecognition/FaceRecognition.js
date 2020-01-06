import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ box, imgUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt3">
        <img id="image" src={imgUrl} alt="" width="300px" height="auto" />
        <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
