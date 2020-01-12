import React, { useState } from 'react';
import Modal from '../UI/Modal';
import Loader from '../UI/Loader';

const ReportsModal = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Modal>
      <div className="modal-container">
        <p className="modal-close" onClick={props.closeModal}>❌</p>
        <div className="modal-reports">
          <h2>Reports</h2>
        </div>
      </div>
      {!isLoaded &&
        <Loader text={'Fetching Expenses, Calculating Data and Generating Reports on your expenses...'} />
      }
    </Modal>
  );
}

export default ReportsModal;