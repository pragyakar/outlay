import React from 'react';
import HistoryTable from './Table/Table';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const History = (props) => {
  return (
    <div className="history-container">
      <p className="container-title">Recent Expenses</p>
      <p className="container-subtitle">Expense history from the last 5 days</p>
      <HistoryTable expenses={props.expenses}/>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenses
    // expenses: state.firestore.ordered.expenses
  }
} 

export default connect(mapStateToProps)(History);
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { 
//       collection: 'expenses', 
//       limit: 10 
//     }
//   ])
// )(History);
