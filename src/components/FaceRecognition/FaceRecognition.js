import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ box, imgUrl }) => {
  console.log(box)
  return (
    <div className="mt3">
      <img id="image" src={imgUrl} alt="" width="300px" height="auto" />
      <div className="bounding-box"></div>
    </div>
  );
};

export default FaceRecognition;
