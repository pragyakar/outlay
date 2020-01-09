import React, { useState } from 'react';
import Modal from '../../UI/Modal';

const AddButton = () => {

  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  }

  return (
    <div className="add-container" onClick={toggleModal}>
      <p className="add-button-text">Add Expense</p>
      { modalVisibility &&
        <Modal>
          <div className="modal-container">
            <h1 onClick={toggleModal}>Modal test</h1>
          </div>
        </Modal>
      }
    </div>
  );
}

export default AddButton;