import React from 'react';
import HistoryTable from './Table/Table';
import { connect } from 'react-redux';

const History = (props) => {
  return (
    <div className="history-container">
      <p className="history-title">Recent Expenses</p>
      <p className="history-subtitle">Expense history from the last 10 days</p>
      <HistoryTable expenses={props.expenses}/>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenses
  }
} 

export default connect(mapStateToProps)(History);
