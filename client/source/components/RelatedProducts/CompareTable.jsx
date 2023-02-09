// LIBRARY IMPORTS
import React, { useContext } from 'react';

// LOCAL IMPORTS
import ProdContext from '../../ProdContext.js';
import StyledCompareTable from './styles/CompareTable.styled.jsx';

// MAIN
const CompareTable = function CreateCompareTable({ relatedProductDetail }) {
  // STATES
  const { product } = useContext(ProdContext);

  return (
    <StyledCompareTable>
      <table className="compare">
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>Current Product</th>
            <th>Features</th>
            <th>Comparing</th>
          </tr>
          <tr>
            <td className="middle">
              {product.name}
            </td>
            <td>Name</td>
            <td className="middle">
              {relatedProductDetail.name}
            </td>
          </tr>
          <tr>
            <td className="middle">
              {product.category}
            </td>
            <td>Category</td>
            <td className="middle">
              {relatedProductDetail.category}
            </td>
          </tr>
          <tr>
            <td className="middle">
              ${product.default_price}
            </td>
            <td>Price</td>
            <td className="middle">
              ${relatedProductDetail.default_price}
            </td>
          </tr>
          <tr>
            <td className="middle">
              Some Stars
            </td>
            <td>Average Rating</td>
            <td className="middle">
              Some Stars
            </td>
          </tr>
          <tr>
            <td className="middle">
              Does this exist or is it the description?
            </td>
            <td>Overview</td>
            <td className="middle">
              TBD
            </td>
          </tr>
          <tr>
            <td className="middle">
              Do I really want to include this?
            </td>
            <td>Sizes</td>
            <td className="middle">
              Its kinda complicated to get a range
            </td>
          </tr>
        </tbody>
      </table>
    </StyledCompareTable>
  );
};

export default CompareTable;
