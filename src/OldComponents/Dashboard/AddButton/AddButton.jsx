import React, { useState } from 'react';
import AddModal from '../../AddExpense';
import { connect } from 'react-redux';
import { addExpense } from '../../../store/actions/expenseActions';  

const AddButton = (props) => {

  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleAddModal = () => {
    setModalVisibility(!modalVisibility);
  }

  const handleSubmit = (expenseObject) => {
    props.addExpense(expenseObject);
    toggleAddModal();
  }

  return (
    <>
      <div className="buttons-container" onClick={toggleAddModal}>
        <div className="button">
          <p className="button-text">Add Expense</p>
        </div>
      </div>
      { modalVisibility &&
        <AddModal closeModal={toggleAddModal} handleSubmit={handleSubmit}/>
      }
    </>
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
)(AddButton);