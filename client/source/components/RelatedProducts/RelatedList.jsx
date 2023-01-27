import React from 'react';
import RelatedListCard from './RelatedListCard.jsx';
import CompareWindow from './CompareWindow.jsx'

const RelatedList = (props) => {
  return (
    <div>
      <h3>Related Products:</h3>
      <ul>
        <RelatedListCard />
        <RelatedListCard />
        <RelatedListCard />
      </ul>
      <CompareWindow />
    </div>
  )
};

export default RelatedList;