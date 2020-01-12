import React from 'react';
import Modal from '../UI/Modal';

const ReportsModal = (props) => {
  return (
    <Modal>
      <div className="modal-container">
        <p className="modal-close" onClick={props.closeModal}>❌</p>
        <div className="modal-reports">
          <h2>Reports</h2>
        </div>
      </div>
    </Modal>
  );
}

export default ReportsModal;