import React from 'react';

const FaceRecognition = ({ imgUrl }) => {
  console.log(imgUrl)
  return (
    <div className="mt3">
      <img id="image" src={imgUrl} alt="" width="300px" height="auto" />
    </div>
  );
};

export default FaceRecognition;
