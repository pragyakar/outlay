import React, { useState } from 'react';
import AddModal from '../../AddExpense/AddModal';
import { connect } from 'react-redux';
import { addExpense } from '../../../store/actions/expenseActions';  

const AddButton = (props) => {

  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  }

  const handleSubmit = (expenseObject) => {
    props.addExpense(expenseObject);
    toggleModal();
  }

  return (
    <>
      <div className="add-container" onClick={toggleModal}>
        <p className="add-button-text">Add Expense</p>
      </div>
      { modalVisibility &&
        <AddModal closeModal={toggleModal} handleSubmit={handleSubmit}/>
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