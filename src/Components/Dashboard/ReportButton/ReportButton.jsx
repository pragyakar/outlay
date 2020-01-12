import React, { useState } from 'react';
import ReportsModal from '../../Reports/ReportsModal';

const ReportButton = () => {

  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  }

  return (
    <>
    <div className="buttons-container" onClick={toggleModal}>
      <div className="button">
        <p className="button-text">View Full Report</p>
      </div>
    </div>
    { modalVisibility && 
      <ReportsModal closeModal={toggleModal} />
    }
    </>
  );
}

export default ReportButton;