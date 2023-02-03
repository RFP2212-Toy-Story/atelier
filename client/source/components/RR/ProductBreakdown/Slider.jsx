import React from 'react';

const Slider = function Slider({ trait, feedback }) {
  const valuePercentage = (feedback / 5) * 100;
  let traitMapping = null;

  if (trait === 'Size') {
    traitMapping = { left: 'Small', center: 'Perfect', right: 'Big' };
  } else if (trait === 'Width') {
    traitMapping = { left: 'Narrow', center: 'Perfect', right: 'Wide' };
  } else if (trait === 'Comfort') {
    traitMapping = { left: 'Poor', center: '', right: 'Great' };
  } else if (trait === 'Quality') {
    traitMapping = { left: 'Poor', center: '', right: 'Great' };
  } else if (trait === 'Length') {
    traitMapping = { left: 'Short', center: 'Perfect', right: 'Long' };
  } else if (trait === 'Fit') {
    traitMapping = { left: 'Short', center: 'Perfect', right: 'Long' };
  }

  return (
    <div className="trait-slider">
      <div className="trait-name">{trait}</div>
      <div className="trait-bar">
        <input
          className="slider"
          type="range"
          value={valuePercentage}
          disabled
        />
      </div>
      <div className="slider-text">
        <div className="slider-left-text">{traitMapping.left}</div>
        <div className="slider-center-text">{traitMapping.center}</div>
        <div className="slider-right-text">{traitMapping.right}</div>
      </div>
    </div>
  );
};

export default Slider;
