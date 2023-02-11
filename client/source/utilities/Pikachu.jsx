import React from 'react';

const Pikachu = function CreatePikachuComponent() {
  return (
    <div id="adorable-pikachu">
      <button
        onClick={() => { document.getElementById('adorable-pikachu').style.visibility = 'hidden'; }}
        type="button"
        style={{
          position: 'fixed',
          bottom: 100,
          right: 60,
          zIndex: 9002,
          border: 'none',
          backgroundColor: 'transparent'
        }}
      >
        <h2>✗</h2>
      </button>
      <img
        style={{
          position: 'fixed',
          bottom: 10,
          right: 80,
          zIndex: 9001,
          border: 'none'
        }}
        alt="lightning rat with power tools"
        src="/images/pikachu-hard-at-work.gif"
      />
    </div>
  );
};

export default Pikachu;
