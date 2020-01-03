import React from 'react';

const FaceRecognition = ({ imgUrl }) => {
  console.log(imgUrl)
  return (
    <div>
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default FaceRecognition;
