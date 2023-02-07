import React from 'react';

const Characteristic = function Characteristic({ trait, postID, onChange }) {
  const traitName = trait[0];
  const traitDescription = trait[1];
  // console.log('id', postID, postID[traitName]);


  return (
    <div className="trait-options">
      <div className="trait-name">{traitName}</div>
      {traitDescription.map((option) => (
        <label
          className="option-label"
          key={option.value}
          htmlFor={option.label}
        >
          <input
            name={postID[traitName]}
            type="radio"
            id={postID[traitName]}
            value={option.value}
            onChange={onChange}
            required={true}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Characteristic;
