import React, { useState } from 'react';
import AddModal from './AddModal';

const AddButton = () => {

  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  }

  const handleSubmit = (expenseObject) => {
    console.log(expenseObject); 
  }

  return (
    <>
      <div className="add-container" onClick={toggleModal}>
        <p className="add-button-text">Add Expense</p>
      </div>
      { !modalVisibility &&
        <AddModal closeModal={toggleModal} handleSubmit={handleSubmit}/>
      }
    </>
  );
}

export default AddButton;