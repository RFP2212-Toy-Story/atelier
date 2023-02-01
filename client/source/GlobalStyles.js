import { createGlobalStyle } from 'styled-components';

const Globalstyles = createGlobalStyle`

/* Font: Press Start 2 */
@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);

// BROWSER OVERRIDES
html {
  scroll-behavior: smooth;
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

`;

export default Globalstyles;
