// LIBRARY IMPORTS
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// LOCAL IMPORTS
import * as requests from '../../utilities/axiosRequests';

// MAIN
const CompareWindow = function createCompareWindow({ onClose }) {
  return (
    <div>
      <h4>This Will Transform into a fancy shmancy modal window</h4>
      <IoIosCloseCircleOutline onClick={onClose} />
    </div>
  );
};

export default CompareWindow;
