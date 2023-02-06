import { createGlobalStyle } from 'styled-components';

const Globalstyles = createGlobalStyle`

/* Font: Press Start 2 */
// STYLED-COMPONENTS DEVs SAY: 'do not use @import CSS [...] CSSOM APIs we use in production do not handle it well.'
// So for now we'll direcly link fonts inside /dist/index.html
/* @import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap); */

// BODY
body {
  background-color: #fffbea;
  font-family: 'Nunito', sans-serif;
  color: #3D405B
  line-height: 1.5;
}

// BROWSER OVERRIDES
html {
  scroll-behavior: smooth;
}

*, *::before, *::after {
  box-sizing: border-box;
}

input, button, textarea, select {
  font: inherit;
}

input, button {
  cursor: pointer;
  &:hover {
    color: #E07A5F;
  }
}

button {
  transition: transform 0.2s;
}
button:hover {
  transform: scale(1.075);
}

select {
  background-color: #FEFCE9;
  border: 1px solid #BBBBBB;
  border-radius: 0.25rem;
  color: #3D405B
}
select:hover {
  background-color: #F6DEB6;
}


// CLASSES
.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

`;

export default Globalstyles;
