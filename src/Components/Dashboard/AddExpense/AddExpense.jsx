import React, { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddExpenseModal from './AddExpenseModal';
import { connect } from 'react-redux';

const AddExpense = () => {

  const [modalVisibility, setModalVisibility] = useState(true);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  }

  const handleSubmit = (expenseObject) => {
    props.addExpense(expenseObject);
    toggleAddModal();
  }

  return (
    <Fragment>
      <div className="add-button" onClick={toggleModal} >
        <FontAwesomeIcon icon={'plus'} />  
      </div>
      {modalVisibility ? <AddExpenseModal closeModal={toggleModal} handleSubmit={handleSubmit}/> : ''}
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(AddExpense);