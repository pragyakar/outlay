import React from 'react';
import Modal from '../UI/Modal';

const MonthlyReport = (props) => {
  return (
    <Modal>
      <div className="report-modal">
        <p className="modal-close" onClick={props.closeModal}>❌</p>
        <p className="report-modal-title">Monthly Report</p>
      </div>
    </Modal>
  );
}

export default MonthlyReport; 