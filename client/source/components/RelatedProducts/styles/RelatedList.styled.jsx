import styled from 'styled-components';

const StyledRelatedList = styled.div`
  .container {
    display: grid;
    position: relative;
  }

  .left {
    font-size: 3em;
    position: absolute;
    top: 50%;
    background: #FFFBEA;
    border-radius: 50%;
  }

  .right {
    font-size: 3em;
    position: absolute;
    top: 50%;
    left: 98%;
    background: #FFFBEA;
    border-radius: 50%;
  }
`;

export default StyledRelatedList;
