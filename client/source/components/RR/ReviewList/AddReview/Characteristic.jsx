import React from 'react';

const Characteristic = function Characteristic({ trait }) {
  const traitName = trait[0]; // 'Size'
  const traitDescription = trait[1]; // [{label: too small, value: 1}]

  return (
    <div className="trait-options">
      <div className="trait-name">{traitName}</div>
      {traitDescription.map((option) => (
        <div key={option.value}>
          {option.label}
          <label htmlFor={option.value}>
            <input
              type="radio"
              id={traitName}
              value={option.value}
            />
            {option.value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Characteristic;
