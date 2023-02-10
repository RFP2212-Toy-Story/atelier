// LIBRARY IMPORTS
import React, { useContext } from 'react';

// LOCAL IMPORTS
import ProdContext from '../../ProdContext.js';
import StyledCompareTable from './styles/CompareTable.styled.jsx';
import AvgStarArray from '../shared/AvgStarArray.jsx';
import average from '../../utilities/helpers';

// MAIN
const CompareTable = function CreateCompareTable({ relatedProductDetail, relatedAvgRating }) {
  // STATES
  const { product, meta } = useContext(ProdContext);

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
              <AvgStarArray avgRating={average(meta.ratings)} />
            </td>
            <td>Average Rating</td>
            <td className="middle">
              <AvgStarArray avgRating={relatedAvgRating} />
            </td>
          </tr>
        </tbody>
      </table>
    </StyledCompareTable>
  );
};

export default CompareTable;
