import styled from 'styled-components';

const StyledCompareTable = styled.div`
  overflow-x:auto !important;
  padding:5px 10px;
  max-width:700px;
  margin:10px auto;

  .compare {
    overflow:scroll;
    border-collapse: collapse;
    min-width: 100%;
}

  .compare td, .compare th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .compare tr:nth-child(even){
    background-color: #f2f2f2;
    min-width:100%;
  }

  .compare tr:nth-child(odd){
    background-color: #FFFBEA;
    min-width:100%;
  }

  .compare tr:hover {
    background-color: #ddd;
    min-width:100%;
  }

  .compare th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align:center;
    background-color: #3D405B;
    color: #FFFBEA;
  }
`;

export default StyledCompareTable;
