import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddExpenseForm from './Form/AddExpenseForm';

const AddExpenseModal = (props) => {

  const { closeModal, handleSubmit } = props;

  return (
    <div className="add-expense-container">
      <span className="add-expense-close" onClick={closeModal}>
        <FontAwesomeIcon icon={"times-circle"} />  
      </span>
      <div className="add-expense-box">
        <span className="add-expense-box-title">Add Today's Expense</span>
        <div className="add-expense-form-container">
          <AddExpenseForm handleSubmitForm={handleSubmit}/>
        </div>
      </div>
    </div>
  );
}

export default AddExpenseModal;