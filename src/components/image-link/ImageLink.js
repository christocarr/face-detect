import React from 'react';

const ImageLink = ({ onInputChange, onSubmit }) => {
  return (
    <form className="flex items-center mt2">
      <input type="text" className="w-70" onChange={onInputChange} />
      <button className="w-30 ml1" onClick={onSubmit}>
        Detect
      </button>
    </form>
  );
};

export default ImageLink;
