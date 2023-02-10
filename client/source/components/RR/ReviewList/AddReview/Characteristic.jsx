import React from 'react';
import { TraitOptions } from '../../styles/RR.styled.js';

const Characteristic = function Characteristic({ trait, postID, onChange }) {
  const traitName = trait[0];
  const traitDescription = trait[1];

  return (
    <TraitOptions>
      <div className="trait-name">{traitName}</div>
      <div className="trait-container">
        {traitDescription.map((option) => (
          <div className="option-pair" key={option.value}>
            <input
              className="radio-button"
              name={postID[traitName]}
              type="radio"
              id={postID[traitName]}
              value={option.value}
              onChange={onChange}
              required={true}
            />
            <label
              className="option-label"
              key={option.value}
              htmlFor={option.label}
            >{option.label}
            </label>
          </div>
        ))}
      </div>
    </TraitOptions>
  );
};

export default Characteristic;
