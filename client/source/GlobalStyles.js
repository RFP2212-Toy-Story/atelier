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
    color: #E07A5F !important;
  }
}

// CLASSES
.FlexColumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.FlexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

`;

export default Globalstyles;
