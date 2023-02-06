import React from 'react';

const Characteristic = function Characteristic({ trait }) {
  const traitName = trait[0];
  const traitDescription = trait[1];

  return (
    <div className="trait-options">
      <div className="trait-name">{traitName}</div>
      {traitDescription.map((option) => (
        <label key={option.value} htmlFor={option.label}>
          <input
            type="radio"
            id="option"
            value={option.value}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Characteristic;
