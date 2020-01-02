import React from 'react';

const ImageLink = ({ onInputChange }) => {
  return (
    <form className="flex items-center mt2">
      <input type="text" className="w-70" onChange={onInputChange} />
      <button className="w-30 ml1">Detect</button>
    </form>
  )
}

export default ImageLink