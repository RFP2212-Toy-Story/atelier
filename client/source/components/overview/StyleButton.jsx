import React from 'react';

const StyleButton = function CreateStyleButtonComponent({ index, name, setStyle }) {
  function handleClick(event) {
    setStyle(event.target.id);
  }

  return (
    <div>
      <button onClick={handleClick} id={index} type="button">{name}</button>
    </div>
  );
};


export default StyleButton;
