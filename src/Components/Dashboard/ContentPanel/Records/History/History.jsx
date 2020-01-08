import React from 'react';
import HistoryTable from './Table/Table';

const History = (props) => {
  return (
    <div className="history-container">
      <p className="container-title">Recent Expenses 💵</p>
      <p className="container-subtitle">Expense history from the last 5 days</p>
      <HistoryTable expenses={props.expenses}/>
    </div> 
  )
}

export default History;
