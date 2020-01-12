import React from 'react';
import Modal from '../UI/Modal';
import AddForm from './AddForm';

const AddModal = (props) => {

  return (
    <Modal>
      <div className="modal-container">
        <p className="modal-close" onClick={props.closeModal}>❌</p>
        <div className="modal-form">
        <p className="modal-title">Add Expense</p>
         <AddForm handleSubmitForm={props.handleSubmit}/>
        </div>
      </div>
    </Modal>
  );  
}

export default AddModal;